'use client';

import { useState } from 'react';

export default function Page() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-30 backdrop-blur bg-white/70 border-b border-slate-200">
        <div className="container py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="size-9 rounded-2xl bg-calanda.dark text-white grid place-items-center font-bold">∑</div>
            <span className="font-semibold tracking-tight">CALANDA</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#servicios" className="hover:opacity-80">Servicios</a>
            <a href="#metodo" className="hover:opacity-80">Método</a>
            <a href="#casos" className="hover:opacity-80">Casos</a>
            <a href="#contacto" className="hover:opacity-80">Contacto</a>
          </nav>
          <a href="#contacto" className="hidden md:inline-block underline">Hablemos</a>
        </div>
      </header>

      {/* Hero */}
      <section className="container section grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Convertimos <span className="hero-underline">mensajes</span> en poder e <span className="hero-underline">ideas</span> en acción
          </h1>
          <p className="text-lg text-slate-600">
            Narrativas, posicionamiento, <strong>incidencia</strong> y <strong>relacionamiento público</strong> para que las organizaciones sean escuchadas, creídas y respaldadas por quienes importan.
          </p>
          <div className="flex gap-3">
            <a href="#servicios" className="px-5 py-3 rounded-2xl bg-calanda.red text-white no-underline">Ver servicios</a>
            <a href="#contacto" className="inline-flex items-center gap-1 text-slate-700 font-medium underline">Agenda una llamada →</a>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-slate-500 pt-2">
            <div className="flex items-center gap-2">✓ Comunicación estratégica</div>
            <div className="flex items-center gap-2">✓ Free press y medios</div>
            <div className="flex items-center gap-2">✓ Relaciones institucionales</div>
          </div>
        </div>
        <div className="card p-6 space-y-3 text-slate-700">
          <h3 className="text-xl font-semibold">Qué podemos lograr juntos</h3>
          <p>• Alinear el propósito con una narrativa potente.</p>
          <p>• Multiplicar el alcance con estrategia multicanal.</p>
          <p>• Abrir puertas con relacionamiento estratégico.</p>
          <p>• Medir resultados con indicadores claros (MEL).</p>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="section bg-slate-50 border-y">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-semibold mb-10">Servicios</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="card p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
                <ul className="list-disc pl-5 space-y-1 text-slate-700">
                  {s.points.map((p, i) => <li key={i}>{p}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Método BRAVO */}
      <section id="metodo" className="section">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">Método B.R.A.V.O.</h2>
          <div className="grid md:grid-cols-5 gap-4 text-slate-700">
            {bravo.map((b) => (
              <div key={b.k} className="card p-5">
                <div className="text-sm tracking-widest text-slate-500">{b.k}</div>
                <h3 className="font-semibold">{b.title}</h3>
                <p className="text-sm mt-2">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Casos */}
      <section id="casos" className="section bg-slate-50 border-y">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-semibold mb-10">Casos de éxito (anónimos)</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {cases.map((c) => (
              <div key={c.title} className="card p-6">
                <h3 className="text-xl font-semibold">{c.title}</h3>
                <p className="mt-2">{c.desc}</p>
                <ul className="list-disc pl-5 mt-3 space-y-1 text-slate-700">
                  {c.bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="section">
        <div className="container grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Hablemos</h2>
            <p className="text-slate-600 mb-6">Cuéntanos qué quieres lograr y te propondremos una ruta clara en 48 horas hábiles.</p>
            <ul className="space-y-1 text-slate-700">
              <li>✉︎ info@calanda.com.co</li>
              <li>☎︎ +57 318 318 3188</li>
              <li>🌐 www.calanda.com.co</li>
            </ul>
          </div>
          <div className="card p-6">
            {sent ? (
              <div className="p-6 rounded-xl bg-emerald-50 text-emerald-700 space-y-2">
                <h3 className="text-xl font-semibold">¡Gracias por escribirnos!</h3>
                <p>Recibimos tu mensaje y en menos de 48 horas hábiles te compartiremos una ruta BRAVO enfocada en comunicación, incidencia y relacionamiento.</p>
                <p className="text-sm">Si es urgente (crisis o ventana regulatoria), escribe <strong>URGENTE</strong> a <a href="mailto:info@calanda.com.co">info@calanda.com.co</a>.</p>
                <div className="mt-3 flex gap-3">
                  <a className="px-4 py-2 rounded-xl bg-calanda.red text-white no-underline" href="#servicios">Ver servicios</a>
                  <a className="px-4 py-2 rounded-xl bg-slate-900 text-white no-underline" href="mailto:info@calanda.com.co">Agendar llamada</a>
                </div>
              </div>
            ) : (
              <form className="space-y-3" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
                <input className="w-full border rounded-xl p-3" placeholder="Nombre" required />
                <input className="w-full border rounded-xl p-3" type="email" placeholder="Correo" required />
                <textarea className="w-full border rounded-xl p-3" rows={5} placeholder="¿En qué podemos ayudarte?" required />
                <button className="w-full px-5 py-3 rounded-2xl bg-calanda.red text-white">Enviar</button>
              </form>
            )}
          </div>
        </div>
      </section>

      <footer className="py-10 border-t text-center text-sm text-slate-500">
        © {new Date().getFullYear()} CALANDA — Comunicación, incidencia y estrategia.
      </footer>
    </div>
  );
}

const services = [
  {
    title: "Estrategia y posicionamiento",
    points: [
      "Diagnóstico de comunicación y propósito",
      "Narrativa central y mensajes clave",
      "Plan de acción en medios y redes",
      "Indicadores de impacto (MEL)"
    ]
  },
  {
    title: "Free press y medios",
    points: [
      "Dossier y base de periodistas",
      "Gestión de entrevistas y apariciones",
      "Ruedas de prensa y vocería",
      "Seguimiento y clipping con insights"
    ]
  },
  {
    title: "Relaciones institucionales y alianzas",
    points: [
      "Mapeo de actores público‑privados",
      "Agenda y gestión de reuniones",
      "Acompañamiento en eventos clave",
      "Construcción de alianzas estratégicas"
    ]
  },
  {
    title: "Storytelling corporativo y político",
    points: [
      "Guiones, discursos y presentaciones",
      "Piezas audiovisuales y materiales de difusión",
      "Storydoing para mostrar el propósito en acción"
    ]
  },
  {
    title: "Formación y entrenamiento de voceros",
    points: [
      "Sesiones personalizadas y simulaciones",
      "Protocolos de vocería para medios y crisis",
      "Feedback en tiempo real"
    ]
  },
  {
    title: "Manejo de crisis y escenarios críticos",
    points: [
      "Plan de respuesta rápida",
      "Mensajes de control reputacional",
      "War room y acompañamiento en tiempo real"
    ]
  },
  {
    title: "Marketing digital",
    points: [
      "Auditoría digital y calendario de contenidos",
      "SEO/SEM y optimización de campañas",
      "Social listening y reportes de métricas",
      "Mejora continua"
    ]
  },
  {
    title: "Producción audiovisual",
    points: [
      "Videos institucionales y documentales",
      "Cápsulas para redes y animaciones",
      "Edición profesional y banco de imágenes"
    ]
  }
];

const bravo = [
  { k: "B", title: "Base", desc: "Diagnóstico profundo y definición del propósito de marca." },
  { k: "R", title: "Relato", desc: "Narrativa y mensajes clave con storytelling y storydoing." },
  { k: "A", title: "Alcance", desc: "Estrategia multicanal y activación de vocerías y alianzas." },
  { k: "V", title: "Visibilidad", desc: "Presencia frente a públicos clave y optimización digital." },
  { k: "O", title: "Oportunidad", desc: "Transferencia de capacidades para sostenibilidad y escala." }
];

const cases = [
  {
    title: "Sector regulado y sensible",
    desc: "Posicionamiento de compañía con altos estándares, trazabilidad y aporte económico ante autoridades y opinión pública.",
    bullets: [
      "Narrativa y free press en medios clave",
      "Entrenamiento de voceros para temas sensibles",
      "Visibilidad sostenida e invitaciones a foros sectoriales"
    ]
  },
  {
    title: "Alianzas multi-actor",
    desc: "Diseño de relacionamiento para conectar empresa, gobierno y sociedad civil alrededor de un propósito compartido.",
    bullets: [
      "Mapeo de actores y agenda de alto nivel",
      "Gestión de reuniones y seguimiento",
      "Resultados medibles en corto plazo"
    ]
  },
  {
    title: "Comunicación de impacto",
    desc: "Campaña multicanal para traducir proyectos complejos en resultados comprensibles y memorables.",
    bullets: [
      "Mensajes simples y poderosos",
      "Storytelling + storydoing",
      "KPIs y aprendizaje continuo (MEL)"
    ]
  }
];
