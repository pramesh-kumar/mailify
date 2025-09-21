'use client'

import { useState, useEffect } from 'react'
import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import EmailCard from '@/components/EmailCard'
import AddEmailForm from '@/components/AddEmailForm'
import { Search, Filter, LogOut } from 'lucide-react'
import ThemeToggle from '@/components/ThemeToggle'

interface Email {
  id: string
  subject: string
  sender: string
  body: string
  summary: string | null
  tag: string | null
  createdAt: string
}

export default function Dashboard() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [emails, setEmails] = useState<Email[]>([])
  const [filteredEmails, setFilteredEmails] = useState<Email[]>([])
  const [selectedTag, setSelectedTag] = useState<string>('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin')
    }
  }, [status, router])

  useEffect(() => {
    if (session) {
      fetchEmails()
    }
  }, [session])

  useEffect(() => {
    filterEmails()
  }, [emails, selectedTag, searchTerm]) // eslint-disable-line react-hooks/exhaustive-deps

  const fetchEmails = async () => {
    try {
      const response = await fetch('/api/emails')
      if (response.ok) {
        const data = await response.json()
        setEmails(data)
      }
    } catch (error) {
      console.error('Error fetching emails:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const filterEmails = () => {
    let filtered = emails

    if (selectedTag !== 'all') {
      filtered = filtered.filter(email => email.tag === selectedTag)
    }

    if (searchTerm) {
      filtered = filtered.filter(email =>
        email.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
        email.sender.toLowerCase().includes(searchTerm.toLowerCase()) ||
        email.body.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    setFilteredEmails(filtered)
  }

  const handleAddEmail = async (emailData: { subject: string; sender: string; body: string }) => {
    try {
      const response = await fetch('/api/emails', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(emailData)
      })

      if (response.ok) {
        const newEmail = await response.json()
        setEmails([newEmail, ...emails])
      }
    } catch (error) {
      console.error('Error adding email:', error)
    }
  }

  const handleRegenerateSummary = async (emailId: string) => {
    try {
      const response = await fetch(`/api/emails/${emailId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'regenerate-summary' })
      })

      if (response.ok) {
        const updatedEmail = await response.json()
        setEmails(emails.map(email => 
          email.id === emailId ? updatedEmail : email
        ))
      }
    } catch (error) {
      console.error('Error regenerating summary:', error)
    }
  }

  if (status === 'loading' || isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    )
  }

  if (!session) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Mailify
            </Link>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600 dark:text-gray-300">Welcome, {session.user?.name}</span>
              <ThemeToggle />
              <button
                onClick={() => signOut()}
                className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
              >
                <LogOut className="w-4 h-4" />
                Sign out
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <AddEmailForm onAddEmail={handleAddEmail} />
        </div>

        <div className="mb-6 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search emails..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-gray-500" />
            <select
              value={selectedTag}
              onChange={(e) => setSelectedTag(e.target.value)}
              className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Tags</option>
              <option value="Urgent">Urgent</option>
              <option value="Informative">Informative</option>
              <option value="Spam">Spam</option>
            </select>
          </div>
        </div>

        <div className="space-y-4">
          {filteredEmails.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500">
                {emails.length === 0 ? 'No emails yet. Add your first email!' : 'No emails match your filters.'}
              </p>
            </div>
          ) : (
            filteredEmails.map((email) => (
              <EmailCard
                key={email.id}
                email={email}
                onRegenerateSummary={handleRegenerateSummary}
              />
            ))
          )}
        </div>
      </main>
    </div>
  )
}