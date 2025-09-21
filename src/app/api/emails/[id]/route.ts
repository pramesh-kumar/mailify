import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { generateEmailSummaryAndTag } from '@/lib/ai'

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { action } = await request.json()

    if (action === 'regenerate-summary') {
      const email = await prisma.email.findFirst({
        where: {
          id: id,
          userId: session.user.id
        }
      })

      if (!email) {
        return NextResponse.json({ error: 'Email not found' }, { status: 404 })
      }

      const { summary, tag } = await generateEmailSummaryAndTag(email.body, email.subject)

      const updatedEmail = await prisma.email.update({
        where: { id: id },
        data: { summary, tag }
      })

      return NextResponse.json(updatedEmail)
    }

    return NextResponse.json({ error: 'Invalid action' }, { status: 400 })
  } catch (error) {
    console.error('Update email error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}