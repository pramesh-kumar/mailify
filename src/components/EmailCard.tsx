'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp, RefreshCw } from 'lucide-react'

interface Email {
  id: string
  subject: string
  sender: string
  body: string
  summary: string | null
  tag: string | null
  createdAt: string
}

interface EmailCardProps {
  email: Email
  onRegenerateSummary: (id: string) => void
}

export default function EmailCard({ email, onRegenerateSummary }: EmailCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isRegenerating, setIsRegenerating] = useState(false)

  const getTagColor = (tag: string | null) => {
    switch (tag) {
      case 'Urgent': return 'bg-red-100 text-red-800'
      case 'Informative': return 'bg-blue-100 text-blue-800'
      case 'Spam': return 'bg-gray-100 text-gray-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const handleRegenerate = async () => {
    setIsRegenerating(true)
    await onRegenerateSummary(email.id)
    setIsRegenerating(false)
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4">
      <div className="flex justify-between items-start mb-3">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">{email.subject}</h3>
          <p className="text-sm text-gray-600">From: {email.sender}</p>
        </div>
        <div className="flex items-center gap-2">
          {email.tag && (
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTagColor(email.tag)}`}>
              {email.tag}
            </span>
          )}
          <button
            onClick={handleRegenerate}
            disabled={isRegenerating}
            className="p-1 text-gray-500 hover:text-gray-700 disabled:opacity-50"
            title="Regenerate summary"
          >
            <RefreshCw className={`w-4 h-4 ${isRegenerating ? 'animate-spin' : ''}`} />
          </button>
        </div>
      </div>

      {email.summary && (
        <div className="mb-3 p-3 bg-gray-50 rounded-md">
          <p className="text-sm text-gray-700 font-medium">AI Summary:</p>
          <p className="text-sm text-gray-600 mt-1">{email.summary}</p>
        </div>
      )}

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center text-sm text-blue-600 hover:text-blue-800 mb-2"
      >
        {isExpanded ? <ChevronUp className="w-4 h-4 mr-1" /> : <ChevronDown className="w-4 h-4 mr-1" />}
        {isExpanded ? 'Hide' : 'Show'} full email
      </button>

      {isExpanded && (
        <div className="border-t border-gray-200 pt-4 mt-3">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-lg border border-gray-200 shadow-sm">
            <h4 className="text-sm font-semibold text-gray-800 mb-2">Full Email Content:</h4>
            <div className="prose prose-sm max-w-none">
              <pre className="text-sm text-gray-700 whitespace-pre-wrap font-sans leading-relaxed">{email.body}</pre>
            </div>
          </div>
        </div>
      )}

      <div className="text-xs text-gray-500 mt-3">
        {new Date(email.createdAt).toLocaleString()}
      </div>
    </div>
  )
}