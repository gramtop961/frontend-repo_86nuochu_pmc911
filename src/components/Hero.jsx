import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Github, Shield } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(1200px_600px_at_80%_-10%,rgba(34,197,94,0.08),transparent),radial-gradient(900px_500px_at_10%_10%,rgba(59,130,246,0.12),transparent)]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 pointer-events-none" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-16 md:pt-28 md:pb-24 lg:pt-32 lg:pb-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
              <Shield size={14} className="text-emerald-400" />
              <span>WebAuthn • FIDO2 • Passkeys</span>
            </div>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.1] text-white sm:text-5xl md:text-6xl">
              <span className="bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">Auth that disappears.</span>
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-white/70">
              Passwordless, biometric logins your users will love — shipped by you in one line of code. Secure by default, built for developers.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#waitlist"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-medium text-black shadow/50 shadow-white/10 transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white/40"
              >
                <Rocket size={16} /> Get early access
              </a>
              <a
                href="#code"
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-medium text-white/90 backdrop-blur transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
              >
                <Github size={16} /> View docs
              </a>
            </div>
            <p className="mt-5 text-sm text-white/50">No passwords. No phishing. Just a tap.</p>
          </div>

          <div className="relative h-[420px] w-full sm:h-[520px] md:h-[560px] lg:h-[600px]">
            <div className="absolute inset-0 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-1 backdrop-blur">
              <div className="h-full w-full overflow-hidden rounded-xl">
                <Spline
                  scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
