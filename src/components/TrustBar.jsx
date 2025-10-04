import React from 'react';
import { ShieldCheck, Fingerprint, Lock, BadgeCheck } from 'lucide-react';

const items = [
  { icon: ShieldCheck, title: 'FIDO2 + WebAuthn', desc: 'Standards-based passkeys with device-bound hardware security.' },
  { icon: Fingerprint, title: 'Biometric-first', desc: 'Face ID, Touch ID, Windows Hello — no passwords to phish.' },
  { icon: Lock, title: 'End-to-end encrypted', desc: 'Zero-knowledge keys. We never see secrets or passwords.' },
  { icon: BadgeCheck, title: 'SOC2-ready', desc: 'Enterprise controls, audit logs, and region controls.' },
];

export default function TrustBar() {
  return (
    <section className="border-y border-white/10 bg-black/20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 py-10 md:grid-cols-2 lg:grid-cols-4">
        {items.map((it, idx) => (
          <div key={idx} className="flex items-start gap-3 rounded-lg bg-white/5 p-4">
            <div className="rounded-md bg-emerald-400/10 p-2 text-emerald-400">
              <it.icon size={18} />
            </div>
            <div>
              <div className="text-sm font-medium text-white">{it.title}</div>
              <div className="text-sm text-white/60">{it.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
