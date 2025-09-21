'use client'

import Link from 'next/link'
import { ArrowLeft, Target, Lock, Clock } from 'lucide-react'

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-8 font-semibold"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mb-4">
            About Mailify
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how Mailify transforms your email experience with cutting-edge AI technology
          </p>
        </div>

        <div className="mb-20 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
            How Mailify Works
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-lg">1</span>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Import Your Emails</h3>
              <p className="text-gray-600 text-sm mb-3">
                Easily import emails from your existing accounts or manually add them to the platform.
              </p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• Support for Gmail, Outlook, Yahoo</li>
                <li>• Bulk import capabilities</li>
                <li>• Manual email entry option</li>
              </ul>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold text-lg">2</span>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">AI Analysis & Processing</h3>
              <p className="text-gray-600 text-sm mb-3">
                Our advanced Gemini AI analyzes each email's content and generates concise summaries.
              </p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• Google Gemini AI technology</li>
                <li>• Context-aware analysis</li>
                <li>• 2-3 line smart summaries</li>
              </ul>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 font-bold text-lg">3</span>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Organize & Manage</h3>
              <p className="text-gray-600 text-sm mb-3">
                Access your organized inbox with smart filters and priority-based sorting.
              </p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• Smart search & filtering</li>
                <li>• Priority-based organization</li>
                <li>• Tag-based categorization</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-20 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">Perfect For</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💼</span>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Business Professionals</h3>
              <p className="text-gray-600 text-sm mb-3">
                Manage high-volume work emails efficiently for executives and managers.
              </p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• Client communications</li>
                <li>• Meeting prioritization</li>
                <li>• Project tracking</li>
              </ul>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Students & Academics</h3>
              <p className="text-gray-600 text-sm mb-3">
                Organize academic communications and research correspondence.
              </p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• Professor communications</li>
                <li>• Assignment notifications</li>
                <li>• Research collaboration</li>
              </ul>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏢</span>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Teams & Organizations</h3>
              <p className="text-gray-600 text-sm mb-3">
                Streamline team communications for remote teams and projects.
              </p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• Team coordination</li>
                <li>• Project updates</li>
                <li>• Internal announcements</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Email Experience?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of users who have already revolutionized their email management with Mailify.
          </p>
          <Link
            href="/"
            className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get Started Today
          </Link>
        </div>

      </div>
    </div>
  )
}