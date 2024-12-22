// File: src/components/Footer.jsx
// A simple footer component to provide additional credibility
// and potentially important links
export default function Footer() {
    return (
      <footer className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
          <div className="mt-8 md:order-1 md:mt-0">
            <p className="text-center text-xs leading-5 text-gray-500">
              &copy; 2024 BetterLearn.ai. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    )
  }