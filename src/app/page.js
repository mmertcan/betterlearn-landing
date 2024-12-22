// File: src/app/page.js
// This is your main page file. It acts as the container for all other components
// and represents what visitors will see when they first land on your website.
// src/app/page.js
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import EmailSignup from '@/components/EmailSignup'
import Footer from '@/components/Footer'


export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Hero />
      <Features />
      <EmailSignup />
      <Footer />
    </main>
  )
}