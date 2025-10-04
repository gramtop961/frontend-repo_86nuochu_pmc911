import React from 'react';

export default function CTA() {
  return (
    <section id="waitlist" className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-emerald-500/10 via-transparent to-transparent" />
      <div className="mx-auto max-w-3xl px-6 py-16 text-center">
        <h3 className="text-3xl font-semibold text-white">Ship passkeys this week</h3>
        <p className="mx-auto mt-3 max-w-xl text-white/70">Join the waitlist to get sandbox access, SDKs, and a guided integration walkthrough.</p>
        <form className="mx-auto mt-8 flex max-w-md items-center gap-2">
          <input
            type="email"
            required
            placeholder="Work email"
            className="flex-1 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 outline-none backdrop-blur focus:border-white/30"
          />
          <button
            type="submit"
            className="rounded-lg bg-white px-4 py-3 text-sm font-medium text-black shadow/50 shadow-white/10 transition hover:opacity-90"
          >
            Join
          </button>
        </form>
        <div className="mt-4 text-xs text-white/50">By joining you agree to our Terms and Privacy Policy.</div>
      </div>
    </section>
  );
}
