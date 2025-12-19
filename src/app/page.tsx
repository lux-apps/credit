import React from 'react'

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          LUX Credit
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl">
          Decentralized Credit Solutions
        </p>
        <p className="text-lg text-gray-400 max-w-2xl">
          Access credit and lending services powered by blockchain technology.
        </p>
      </section>

      {/* Feature Sections */}
      <section className="py-24 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Collateralized Loans</h2>
          <p className="text-lg text-gray-400">Borrow against your crypto assets without selling them. Maintain exposure while accessing liquidity.</p>
        </div>
      </section>
      <section className="py-24 px-6 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Competitive Rates</h2>
          <p className="text-lg text-gray-400">Decentralized lending markets ensure the best rates for borrowers and lenders alike.</p>
        </div>
      </section>
      <section className="py-24 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Instant Approval</h2>
          <p className="text-lg text-gray-400">Smart contracts handle the entire lending process. No paperwork, no waiting.</p>
        </div>
      </section>

    </main>
  )
}
