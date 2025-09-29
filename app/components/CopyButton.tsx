'use client';

import { useState } from 'react';

export default function CopyButton({ text, children, className }: { text: string; children?: React.ReactNode; className?: string }) {
  const [ok, setOk] = useState(false);

  async function handleClick() {
    try {
      await navigator.clipboard.writeText(text);
      setOk(true);
      setTimeout(() => setOk(false), 1500);
    } catch {
      // noop
    }
  }

  return (
    <button type="button" onClick={handleClick} className={className}>
      {ok ? '¡Copiado!' : (children ?? 'Copiar')}
    </button>
  );
}
