import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Landing(){
  const nav = useNavigate()
  return (
    <div className="min-h-screen flex flex-col items-center justify-between py-12">
      <header className="w-full max-w-4xl px-6">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-semibold">Placement Readiness</div>
          <nav className="space-x-4 text-sm text-gray-600">
            <a href="#features">Features</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main className="w-full max-w-4xl px-6 text-center">
        <h1 className="text-5xl font-serif mb-4">Ace Your Placement</h1>
        <p className="text-lg text-gray-700 mb-6">Practice, assess, and prepare for your dream job</p>
        <button onClick={()=>nav('/app/dashboard')} className="px-6 py-3 rounded-md bg-primary text-white font-semibold">Get Started</button>

        <section id="features" className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card flex flex-col items-start gap-2">
            <div className="text-2xl">💻</div>
            <h3 className="font-semibold">Practice Problems</h3>
            <p className="text-sm text-gray-600">Curated problems with solutions and tags.</p>
          </div>
          <div className="card flex flex-col items-start gap-2">
            <div className="text-2xl">🎥</div>
            <h3 className="font-semibold">Mock Interviews</h3>
            <p className="text-sm text-gray-600">Live and recorded mock interviews.</p>
          </div>
          <div className="card flex flex-col items-start gap-2">
            <div className="text-2xl">📈</div>
            <h3 className="font-semibold">Track Progress</h3>
            <p className="text-sm text-gray-600">Visualize readiness and trends.</p>
          </div>
        </section>
      </main>

      <footer className="w-full max-w-4xl px-6 text-center text-sm text-gray-500">© {new Date().getFullYear()} Placement Readiness</footer>
    </div>
  )
}
