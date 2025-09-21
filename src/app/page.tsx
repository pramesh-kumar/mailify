'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Link from 'next/link'
import { Mail, Brain, Shield, Zap } from 'lucide-react'

export default function Home() {
  const { data: session, status } = useSession()
  const router = useRouter()

  // Removed auto-redirect - let users choose to go to dashboard

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-20 pb-16 text-center">
          <div className="mb-8">
            <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
              Mailify
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          </div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Transform Your Email Experience with AI
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Mailify revolutionizes how you handle emails. Our intelligent platform automatically summarizes lengthy emails into digestible insights, classifies them by importance, and helps you stay organized - all powered by cutting-edge AI technology.
          </p>
          
          <div className="flex justify-center gap-4 mb-16">
            {session ? (
              <Link
                href="/dashboard"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Go to Dashboard
              </Link>
            ) : (
              <>
                <Link
                  href="/auth/signin"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Sign In
                </Link>
                <Link
                  href="/auth/signup"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold border border-blue-600 hover:bg-blue-50 transition-colors"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <Mail className="w-16 h-16 text-blue-600 mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-3 text-gray-800">Centralized Email Hub</h3>
              <p className="text-gray-600 leading-relaxed">Import, store, and organize all your emails in one secure location. Never lose track of important communications again with our intuitive management system.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <Brain className="w-16 h-16 text-green-600 mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-3 text-gray-800">AI-Powered Summaries</h3>
              <p className="text-gray-600 leading-relaxed">Transform lengthy emails into concise 2-3 line summaries using advanced GPT technology. Save hours of reading time while staying informed.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <Shield className="w-16 h-16 text-red-600 mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-3 text-gray-800">Intelligent Classification</h3>
              <p className="text-gray-600 leading-relaxed">Automatically categorize emails as Urgent, Informative, or Spam. Our AI learns patterns to prioritize what matters most to you.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <Zap className="w-16 h-16 text-yellow-600 mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-3 text-gray-800">Lightning Fast & Secure</h3>
              <p className="text-gray-600 leading-relaxed">Experience instant AI processing with enterprise-grade security. Your data is protected with NextAuth authentication and encrypted storage.</p>
            </div>
          </div>
          
          <div className="mt-20 bg-white rounded-2xl shadow-xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">Why Choose Mailify?</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-blue-600">🚀 Boost Productivity</h4>
                <p className="text-gray-600">Reduce email processing time by 80% with AI summaries and smart filtering.</p>
                
                <h4 className="text-xl font-semibold text-green-600">🎯 Stay Focused</h4>
                <p className="text-gray-600">Prioritize important emails automatically and never miss critical communications.</p>
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-purple-600">🔒 Privacy First</h4>
                <p className="text-gray-600">Your emails are processed securely with no data retention by AI providers.</p>
                
                <h4 className="text-xl font-semibold text-orange-600">⚡ Real-time Processing</h4>
                <p className="text-gray-600">Get instant summaries and classifications as soon as you add new emails.</p>
              </div>
            </div>
          </div>
        </div>
        
        <footer className="bg-gray-800 text-white py-8 mt-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-gray-300">Built with Next.js, AI, and ❤️ for better email management</p>
          </div>
        </footer>
      </div>
    </div>
  )
}