// File: src/components/Hero.jsx
// The Hero component is the first thing visitors see - it needs to grab attention
// and clearly communicate your value proposition
export default function Hero() {
    return (
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            {/* Main headline - clear and compelling */}
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Science-Based Learning Platform
            </h1>
            
            {/* Subheadline - explains the value proposition */}
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Transform your learning experience with AI-powered, science-based education. 
              Join our beta testing program and be among the first to experience the future of learning.
            </p>
            
            {/* Call-to-action buttons */}
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#signup"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Join Beta
              </a>
              <a href="#features" className="text-sm font-semibold leading-6 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }