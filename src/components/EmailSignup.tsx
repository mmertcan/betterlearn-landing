'use client'
import { useState, useEffect } from 'react'

export default function EmailSignup() {
  const [mounted, setMounted] = useState(false)
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('')

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="bg-white py-16 sm:py-24" />
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')

    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      setStatus('success')
      setEmail('')
    } catch (_error: unknown) {
      // Using underscore prefix and explicitly typing the error
      console.error('Error submitting form:', _error)
      setStatus('error')
    }
  }

  return (
    <div id="signup" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24">
          <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Get Early Access
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-300">
            Join our beta testing program and help shape the future of education.
          </p>
          
          <form onSubmit={handleSubmit} className="mx-auto mt-10 max-w-md">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-white">
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex justify-center">
              <button
                type="submit"
                disabled={status === 'sending'}
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {status === 'sending' ? 'Sending...' : 'Join Beta'}
              </button>
            </div>
          </form>
          
          {status === 'success' && (
            <p className="mt-4 text-center text-green-400">
              Thanks for signing up! We&apos;ll be in touch soon.
            </p>
          )}
          {status === 'error' && (
            <p className="mt-4 text-center text-red-400">
              Something went wrong. Please try again.
            </p>
          )}
        </div>
      </div>
    </div>
  )
}