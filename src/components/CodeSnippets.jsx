import React from 'react';
import { Copy } from 'lucide-react';

const snippets = [
  {
    label: '1-line install',
    lang: 'bash',
    code: 'npm i @vanishlabs/auth && npx vanish init',
  },
  {
    label: 'Add to your app',
    lang: 'tsx',
    code: `import { AuthProvider, LoginButton } from '@vanishlabs/auth';

export default function App() {
  return (
    <AuthProvider projectId={import.meta.env.VITE_PROJECT_ID}>
      <LoginButton strategy="passkey" onSuccess={(user) => console.log(user)} />
    </AuthProvider>
  );
}`,
  },
  {
    label: 'Server verify',
    lang: 'ts',
    code: `import { verifyAssertion } from '@vanishlabs/auth/server';

export async function POST(req) {
  const body = await req.json();
  const session = await verifyAssertion(body);
  return Response.json(session);
}`,
  },
];

export default function CodeSnippets() {
  const onCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {}
  };

  return (
    <section id="code" className="relative mx-auto max-w-6xl px-6 py-16">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">One line in, auth solved</h2>
          <p className="mt-2 text-white/60">Drop-in SDKs for web, iOS, and Android. Built on WebAuthn and passkeys.</p>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {snippets.map((s, i) => (
          <div key={i} className="group relative rounded-xl border border-white/10 bg-white/5 p-4 shadow-sm backdrop-blur">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-xs font-medium uppercase tracking-wide text-white/60">{s.label}</span>
              <button
                onClick={() => onCopy(s.code)}
                className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/10 px-2 py-1 text-[11px] text-white/80 opacity-0 transition group-hover:opacity-100 hover:bg-white/20"
              >
                <Copy size={14} /> Copy
              </button>
            </div>
            <pre className="overflow-auto rounded-lg bg-black/60 p-3 text-[12px] leading-relaxed text-emerald-100/90">
              <code>
                {s.code}
              </code>
            </pre>
          </div>
        ))}
      </div>
    </section>
  );
}
