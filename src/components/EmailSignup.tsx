'use client'
import { useState, useEffect } from 'react'

// First, we need to tell TypeScript about the Tally object that will be added to the window
declare global {
  interface Window {
    Tally?: {
      loadEmbeds: () => void
    }
  }
}

export default function EmailSignup() {
  // This state tracks whether the component has mounted, which is important for client-side rendering
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // This effect runs once when the component mounts
    // It handles loading and initializing the Tally script

    // First, we define how Tally should be initialized
    const initializeTally = () => {
      if (typeof window.Tally !== 'undefined') {
        window.Tally.loadEmbeds()
      } else {
        document.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((element) => {
          if (element instanceof HTMLIFrameElement) {
            element.src = element.dataset.tallySrc || ''
          }
        })
      }
    }

    // Create and set up the Tally script element
    const script = document.createElement('script')
    script.src = 'https://tally.so/widgets/embed.js'
    script.async = true
    script.onload = initializeTally
    script.onerror = initializeTally

    // Add the script to the document
    document.body.appendChild(script)

    // Mark the component as mounted
    setMounted(true)

    // Cleanup function that runs when the component unmounts
    return () => {
      try {
        document.body.removeChild(script)
      } catch (error) {
        console.error('Error removing Tally script:', error)
      }
    }
  }, []) // Empty dependency array means this effect runs once on mount

  // Show nothing until the component has mounted
  if (!mounted) {
    return <div className="bg-white py-16 sm:py-24" />
  }

  // The main render of our component
  return (
    <div id="signup" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24">
          {/* Header section */}
          <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Get Early Access
          </h2>
          
          {/* Subheader text */}
          <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-300">
            Join our beta testing program and help shape the future of education.
          </p>
          
          {/* Tally.so embed iframe */}
          <div className="mt-8 flex justify-center">
            <iframe
              data-tally-src="https://tally.so/embed/n92VpG?alignLeft=1&transparentBackground=1&dynamicHeight=1&hideTitle=1&customFormFont=Roboto"
              loading="lazy"
              width="100%"
              height="248"
              title="Get Early Access"
              className="w-full border-0 m-0"
              style={{ border: 'none' }}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}