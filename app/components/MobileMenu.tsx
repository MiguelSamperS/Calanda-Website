'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Menu, X } from 'lucide-react';

const LINKS = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#licencia-social', label: 'Licencia Social' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#equipo', label: 'Equipo' },
  { href: '#contacto', label: 'Contacto' },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const overlay = (
    <nav className="fixed inset-0 z-[100] bg-ink flex flex-col justify-center gap-2 px-10">
      {LINKS.map((l) => (
        <a
          key={l.href}
          href={l.href}
          onClick={() => setOpen(false)}
          className="font-serif text-3xl text-white py-3 border-b border-white/10 last:border-0"
        >
          {l.label}
        </a>
      ))}
      <a
        href="#contacto"
        onClick={() => setOpen(false)}
        className="mt-6 inline-flex w-fit px-6 py-3 rounded bg-calanda-red text-white font-semibold"
      >
        Hablemos
      </a>
    </nav>
  );

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="p-2 text-ink relative z-[101]"
      >
        {open ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
      </button>

      {open && mounted && createPortal(overlay, document.body)}
    </div>
  );
}
