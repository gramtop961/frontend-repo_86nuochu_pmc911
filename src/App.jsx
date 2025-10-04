import React from 'react';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import CodeSnippets from './components/CodeSnippets';
import CTA from './components/CTA';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-emerald-400 to-sky-500" />
            <span className="text-sm font-semibold tracking-wide text-white/90">Vanish</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
            <a href="#code" className="hover:text-white">Docs</a>
            <a href="#waitlist" className="hover:text-white">Pricing</a>
            <a href="#waitlist" className="rounded-md border border-white/15 bg-white/5 px-3 py-1.5 text-white/90 hover:bg-white/10">Sign in</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <TrustBar />
        <CodeSnippets />
        <CTA />
      </main>

      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-white/50 md:flex-row">
          <div>© {new Date().getFullYear()} Vanish Labs, Inc.</div>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Security</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
