'use client'

import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Link from 'next/link'
import { Mail, Brain, Shield, Zap, LogOut } from 'lucide-react'

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 text-center">
          <div className="mb-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mb-2 animate-pulse">
              Mailify
            </h1>
            <div className="w-20 h-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mx-auto mb-4 rounded-full"></div>
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 animate-slide-up">
            Transform Your Email Experience with AI
          </h2>
          <p className="text-base md:text-lg text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed animate-slide-up">
            AI-powered email summaries, smart classification, and organized inbox management.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-3 mb-8 animate-slide-up">
            {session ? (
              <div className="flex gap-4">
                <Link
                  href="/dashboard"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Go to Dashboard
                </Link>
                <button
                  onClick={() => signOut()}
                  className="flex items-center gap-2 bg-gradient-to-r from-gray-600 to-gray-700 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-gray-700 hover:to-gray-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <LogOut className="w-5 h-5" />
                  Logout
                </button>
              </div>
            ) : (
              <>
                <Link
                  href="/auth/signin"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Sign In
                </Link>
                <Link
                  href="/auth/signup"
                  className="bg-white text-blue-600 px-10 py-4 rounded-xl font-bold text-lg border-2 border-blue-600 hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            <div className="group bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-1">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-sm font-bold mb-1 text-gray-800">Email Hub</h3>
              <p className="text-gray-600 text-xs">Store and organize emails securely.</p>
            </div>
            
            <div className="group bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-200 transform hover:-translate-y-1">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-sm font-bold mb-1 text-gray-800">AI Summaries</h3>
              <p className="text-gray-600 text-xs">Get 2-3 line summaries instantly.</p>
            </div>
            
            <div className="group bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-red-200 transform hover:-translate-y-1">
              <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-sm font-bold mb-1 text-gray-800">Smart Tags</h3>
              <p className="text-gray-600 text-xs">Auto-classify emails by priority.</p>
            </div>
            
            <div className="group bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-yellow-200 transform hover:-translate-y-1">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-sm font-bold mb-1 text-gray-800">Fast & Secure</h3>
              <p className="text-gray-600 text-xs">Instant AI with secure auth.</p>
            </div>
          </div>
          
          <div className="mt-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-8 max-w-4xl mx-auto border border-gray-100">
            <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">Why Choose Mailify?</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-blue-600">🚀 Boost Productivity</h4>
                <p className="text-gray-600 text-sm">Reduce email processing time by up to 80% with AI-powered summaries and smart filtering. Focus on what matters most while staying informed about everything.</p>
                
                <h4 className="text-lg font-semibold text-green-600">🎯 Stay Focused</h4>
                <p className="text-gray-600 text-sm">Prioritize important emails automatically with intelligent classification. Never miss critical communications while filtering out noise and distractions.</p>
              </div>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-purple-600">🔒 Privacy First</h4>
                <p className="text-gray-600 text-sm">Your emails are processed securely with enterprise-grade encryption. No data retention by AI providers ensures your privacy is always protected.</p>
                
                <h4 className="text-lg font-semibold text-orange-600">⚡ Real-time Processing</h4>
                <p className="text-gray-600 text-sm">Get instant summaries and classifications as soon as you add new emails. Lightning-fast AI processing keeps you updated in real-time.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <Link
              href="/about"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Learn More About Mailify
            </Link>
          </div>

        </div>
        
        <footer className="bg-gray-800 text-white py-4 mt-8">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-gray-300 text-sm mb-2">
              © 2024 Mailify. All rights reserved.
            </p>
            <p className="text-gray-400 text-xs">
              Built with Next.js, AI, and ❤️ for better email management
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}