'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [sent, setSent] = useState<null | 'ok' | 'err'>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    };

    try {
      setLoading(true);
      const r = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      setSent(r.ok ? 'ok' : 'err');
    } catch {
      setSent('err');
    } finally {
      setLoading(false);
    }
  }

  if (sent === 'ok') {
    return (
      <div className="p-6 rounded-lg bg-emerald-50 text-emerald-800 space-y-3">
        <h3 className="text-xl font-serif font-semibold">¡Gracias por escribirnos!</h3>
        <p>Recibimos tu mensaje y te responderemos pronto.</p>
        <a className="inline-block px-5 py-2.5 rounded bg-calanda-red text-white font-semibold" href="mailto:info@calanda.com.co">
          Escribir de nuevo
        </a>
      </div>
    );
  }

  if (sent === 'err') {
    return (
      <div className="p-5 rounded-lg bg-red-50 text-red-700">
        Ocurrió un error al enviar. Por favor, escríbenos a{' '}
        <a href="mailto:info@calanda.com.co" className="underline">info@calanda.com.co</a>.
      </div>
    );
  }

  return (
    <form className="space-y-4" onSubmit={onSubmit}>
      <input
        name="name"
        className="w-full border border-ink/15 rounded p-3.5 bg-white focus:outline-none focus:ring-2 focus:ring-calanda-red/40"
        placeholder="Nombre"
        required
      />
      <input
        name="email"
        type="email"
        className="w-full border border-ink/15 rounded p-3.5 bg-white focus:outline-none focus:ring-2 focus:ring-calanda-red/40"
        placeholder="Correo"
        required
      />
      <textarea
        name="message"
        rows={5}
        className="w-full border border-ink/15 rounded p-3.5 bg-white focus:outline-none focus:ring-2 focus:ring-calanda-red/40"
        placeholder="¿En qué podemos ayudarte?"
        required
      />
      <button
        disabled={loading}
        className="w-full px-5 py-3.5 rounded bg-calanda-red text-white font-semibold hover:bg-calanda-redBright transition disabled:opacity-60"
      >
        {loading ? 'Enviando…' : 'Enviar'}
      </button>
    </form>
  );
}
