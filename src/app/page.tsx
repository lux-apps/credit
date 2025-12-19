'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Page() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <main className="min-h-screen bg-black text-white font-sans">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-wider">
            LUX
          </Link>
          <div className="flex gap-6 text-sm">
            <Link href="/cards" className="hover:text-gray-300 transition-colors">Cards</Link>
            <Link href="/compare" className="hover:text-gray-300 transition-colors">Compare</Link>
            <Link href="https://lux.network" className="hover:text-gray-300 transition-colors">Network</Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 pt-20">
        <div className="lg:w-1/2 text-center lg:text-left lg:pr-12 mb-12 lg:mb-0">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            LUX CREDIT
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl">
            Build multi-generational wealth with the first zero interest credit card with auto repaying loans. The future of finance is here.
          </p>
          <div className="flex gap-4 justify-center lg:justify-start">
            <Link
              href="/cards"
              className="px-6 py-3 border border-white/30 rounded-md hover:bg-white/10 transition-colors"
            >
              Browse Cards
            </Link>
            <Link
              href="/apply"
              className="px-6 py-3 bg-white text-black rounded-md hover:bg-gray-200 transition-colors font-medium"
            >
              Apply Now
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2 flex flex-col items-center">
          {mounted && (
            <video
              autoPlay
              loop
              muted
              playsInline
              poster="https://cdn.lux.network/commerce/cr/product/LUX-CARD-poster.jpg"
              className="w-full max-w-lg rounded-lg"
            >
              <source src="https://cdn.lux.network/commerce/cr/product/LUX-CARD-black.mp4" type="video/mp4" />
            </video>
          )}
          <p className="text-xs text-gray-500 italic mt-4">Anodized Black Titanium</p>
        </div>
      </section>

      {/* Zero Interest Section */}
      <section className="min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="lg:w-1/2 flex flex-col items-center lg:order-2 lg:pl-12 mb-12 lg:mb-0">
          <img
            src="https://cdn.lux.network/commerce/cr/family/cards-2-flat-tit-1593x1231.png"
            alt="Lux Credit Cards"
            className="w-full max-w-xl"
          />
          <p className="text-xs text-gray-500 italic mt-4">Sovereign Card</p>
        </div>
        <div className="lg:w-1/2 text-center lg:text-left lg:pr-12">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            ZERO INTEREST
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-xl">
            Pay zero interest on all loans. Retain complete sovereignty over your assets, backed by the security and transparency inherent in Lux Quantum Safe Technology.
          </p>
          <Link
            href="/compare"
            className="inline-block px-6 py-3 border border-white/30 rounded-md hover:bg-white/10 transition-colors"
          >
            Compare Cards
          </Link>
        </div>
      </section>

      {/* Auto Repayment Section */}
      <section className="min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 py-24">
        <div className="lg:w-1/2 flex flex-col items-center mb-12 lg:mb-0">
          {mounted && (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full max-w-lg rounded-lg"
            >
              <source src="https://cdn.lux.network/commerce/cr/product/gunmetal-card.mp4" type="video/mp4" />
            </video>
          )}
          <p className="text-xs text-gray-500 italic mt-4">Black Gunmetal</p>
        </div>
        <div className="lg:w-1/2 text-center lg:text-left lg:pl-12">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            AUTO LOAN REPAYMENT
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-xl">
            Each loan is automatically repaid by Lux Protocol, so you never have to sell your assets or pay capital gains.
          </p>
          <Link
            href="/compare"
            className="inline-block px-6 py-3 border border-white/30 rounded-md hover:bg-white/10 transition-colors"
          >
            Compare Cards
          </Link>
        </div>
      </section>

      {/* Card Tiers Section */}
      <section className="py-24 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">Choose Your Card</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Black', description: 'Premium titanium card with exclusive benefits', price: '$1,000' },
              { name: 'Elite', description: 'Enhanced rewards and priority services', price: '$2,500' },
              { name: 'Founder', description: 'Limited edition with founding member perks', price: '$5,000' },
              { name: 'Sovereign', description: 'Ultimate tier with maximum benefits', price: '$10,000' },
            ].map((card) => (
              <Link
                key={card.name}
                href={`/cards/${card.name.toLowerCase()}`}
                className="bg-black/50 border border-white/10 rounded-lg p-6 hover:border-white/30 transition-colors"
              >
                <h3 className="text-xl font-bold mb-2">{card.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{card.description}</p>
                <p className="text-lg font-medium">{card.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">Premier Benefits</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: 'Quantum Safe', description: 'Protected by post-quantum cryptography for future-proof security.' },
              { title: 'DeFi Rewards', description: 'Earn yield on your holdings through integrated DeFi protocols.' },
              { title: 'Global Access', description: 'Use your card anywhere in the world with zero foreign transaction fees.' },
              { title: 'Instant Liquidity', description: 'Access credit instantly without selling your crypto assets.' },
              { title: 'Self Custody', description: 'Maintain full control of your assets at all times.' },
              { title: 'Tax Efficient', description: 'Borrow against assets instead of selling to avoid capital gains.' },
            ].map((feature) => (
              <div key={feature.title} className="text-center">
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-t from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-gray-300 mb-8">
            Join thousands of members building wealth with Lux Credit.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/apply"
              className="px-8 py-4 bg-white text-black rounded-md hover:bg-gray-200 transition-colors font-medium"
            >
              Apply Now
            </Link>
            <Link
              href="/compare"
              className="px-8 py-4 border border-white/30 rounded-md hover:bg-white/10 transition-colors"
            >
              Compare Cards
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xl font-bold">LUX</div>
          <div className="flex gap-6 text-sm text-gray-400">
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="https://lux.network" className="hover:text-white transition-colors">Lux Network</Link>
          </div>
          <p className="text-sm text-gray-500">© 2025 Lux Partners Limited</p>
        </div>
      </footer>
    </main>
  )
}
