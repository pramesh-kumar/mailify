import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { generateEmailSummaryAndTag } from '@/lib/ai'

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const tag = searchParams.get('tag')

    const emails = await prisma.email.findMany({
      where: {
        userId: session.user.id,
        ...(tag && { tag })
      },
      orderBy: { createdAt: 'desc' }
    })

    return NextResponse.json(emails)
  } catch (error) {
    console.error('Get emails error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { subject, sender, body } = await request.json()

    if (!subject || !sender || !body) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }

    // Generate AI summary and tag
    const { summary, tag } = await generateEmailSummaryAndTag(body, subject)

    const email = await prisma.email.create({
      data: {
        userId: session.user.id,
        subject,
        sender,
        body,
        summary,
        tag,
      }
    })

    return NextResponse.json(email)
  } catch (error) {
    console.error('Create email error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}