'use client';

import { useState } from 'react';
// Íconos (lucide-react)
import {
  Target,
  BookOpen,
  Users,
  Compass,
  Newspaper,
  Landmark,
  PenTool,
  Mic,
  ShieldAlert,
  BarChart3,
  Film,
} from 'lucide-react';

type IconType = React.ComponentType<{ className?: string }>;

export default function Page() {
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

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-30 backdrop-blur bg-white/80 border-b border-slate-200">
        <div className="container py-3 flex items-center justify-between">
          {/* LOGO CALANDA (grande) */}
          <a href="/" className="flex items-center gap-3">
            <img src="/logo-horizontal.png" alt="CALANDA" className="h-24 md:h-32 w-auto" />
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#servicios" className="hover:text-calanda-red transition">Servicios</a>
            <a href="#metodo" className="hover:text-calanda-red transition">Método</a>
            <a href="#por-que" className="hover:text-calanda-red transition">¿Por qué este equipo?</a>
            <a href="#casos" className="hover:text-calanda-red transition">Casos</a>
            <a href="#contacto" className="hover:text-calanda-red transition">Contacto</a>
          </nav>
          <a href="#contacto" className="hidden md:inline-block underline text-calanda-red font-semibold">
            Hablemos
          </a>
        </div>
      </header>

      {/* Hero con imagen conceptual */}
      <section className="container section grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Convertimos <span className="hero-underline">mensajes</span> en poder e <span className="hero-underline">ideas</span> en acción
          </h1>
          <p className="text-lg text-slate-600">
            Narrativas, posicionamiento, <strong>incidencia</strong> y <strong>relacionamiento estratégico</strong> para que las organizaciones
            sean escuchadas, creídas y respaldadas por tomadores de decisión y grupos de interés.
          </p>
          <div className="flex gap-3">
            <a href="#servicios" className="px-5 py-3 rounded-2xl bg-calanda-red text-white no-underline hover:opacity-90 transition">
              Ver servicios
            </a>
            <a href="#contacto" className="inline-flex items-center gap-1 text-slate-700 font-medium underline hover:text-calanda-red transition">
              Agenda una llamada →
            </a>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-slate-500 pt-2">
            <div className="flex items-center gap-2">✓ Comunicación estratégica</div>
            <div className="flex items-center gap-2">✓ Incidencia pública y política</div>
            <div className="flex items-center gap-2">✓ <em>Free press</em> y medios</div>
            <div className="flex items-center gap-2">✓ Relacionamiento institucional</div>
          </div>
        </div>

        <div className="card overflow-hidden">
          {/* Imagen conceptual: hilo rojo/conexión/propósito */}
          <img
            src="https://images.unsplash.com/photo-1485217988980-11786ced9454?q=80&auto=format&fit=crop&w=1400"
            alt="Conexiones que mueven ideas: propósito en acción"
            className="w-full h-64 md:h-full object-cover"
          />
        </div>
      </section>

      {/* Banda visual */}
      <section className="container -mt-8">
        <div className="rounded-2xl overflow-hidden shadow">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&auto=format&fit=crop&w=1600"
            alt="Taller de estrategia y vocería"
            className="w-full h-56 md:h-72 object-cover"
          />
        </div>
      </section>

      {/* Servicios con íconos */}
      <section id="servicios" className="section bg-slate-50 border-y">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-calanda-dark">Servicios</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesWithIcons.map((s) => (
              <div key={s.title} className="card p-6 hover:shadow-lg transition">
                <div className="flex items-center gap-3 mb-3">
                  <s.icon className="w-6 h-6 text-calanda-red" />
                  <h3
                    className="text-xl font-semibold text-calanda-red"
                    dangerouslySetInnerHTML={{ __html: s.title }}
                  />
                </div>
                <ul className="list-disc pl-5 space-y-1 text-slate-700">
                  {s.points.map((p, i) => (
                    <li key={i} dangerouslySetInnerHTML={{ __html: p }} />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Método BRAVO con imagen lateral */}
      <section id="metodo" className="section">
        <div className="container grid lg:grid-cols-5 gap-6 items-start">
          <div className="lg:col-span-3">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-calanda-dark">Método B.R.A.V.O.</h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 text-slate-700">
              {bravo.map((b) => (
                <div key={b.k} className="card p-5">
                  <div className="text-2xl md:text-3xl font-extrabold tracking-widest text-[#B91C1C]">{b.k}</div>
                  <h3 className="font-semibold text-calanda-red">{b.title}</h3>
                  <p className="text-sm mt-2">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-2 card overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&auto=format&fit=crop&w=1200"
              alt="Relaciones institucionales y alianzas"
              className="w-full h-64 md:h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ¿Por qué elegirnos? */}
      <section id="por-que" className="section bg-slate-50 border-y">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-calanda-dark">¿Por qué elegirnos?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Estrategia */}
            <div className="card p-6 hover:shadow-lg transition">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-8 h-8 text-calanda-red" />
                <h3 className="text-xl font-semibold text-calanda-red">Estrategia con propósito</h3>
              </div>
              <p className="text-slate-700">
                No comunicamos por comunicar: cada mensaje responde a un objetivo claro y medible. Nuestra obsesión es
                generar impacto real.
              </p>
            </div>

            {/* Narrativas */}
            <div className="card p-6 hover:shadow-lg transition">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-8 h-8 text-calanda-red" />
                <h3 className="text-xl font-semibold text-calanda-red">Narrativas que abren puertas</h3>
              </div>
              <p className="text-slate-700">
                Conectamos con audiencias clave. Traducimos complejidad en mensajes que se entienden, movilizan y persuaden.
              </p>
            </div>

            {/* Relacionamiento */}
            <div className="card p-6 hover:shadow-lg transition">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-8 h-8 text-calanda-red" />
                <h3 className="text-xl font-semibold text-calanda-red">Relacionamiento que importa</h3>
              </div>
              <p className="text-slate-700">
                Nuestra red en el sector público, privado y social se pone al servicio de cada cliente para abrir caminos
                y generar resultados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Casos */}
      <section id="casos" className="section bg-slate-50 border-y">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-calanda-dark">Casos de éxito</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {cases.map((c) => (
              <div key={c.title} className="card p-0 overflow-hidden">
                <img src={c.img} alt=""className="w-full h-36 object-cover" loading="lazy" referrerPolicy="no-referrer" onError={(e) => 
                { (e.currentTarget as HTMLImageElement).src = "https://images.unsplash.com/photo-1581091215367-59ab6b321caa?q=80&auto=format&fit=crop&w=1200"; 
                 // fallback genérico }}/>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-calanda-red">{c.title}</h3>
                  <p className="mt-2">{c.desc}</p>
                  <ul className="list-disc pl-5 mt-3 space-y-1 text-slate-700">
                    {c.bullets.map((b, i) => <li key={i}>{b}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="section">
        <div className="container grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-calanda-dark">Hablemos</h2>
            <p className="text-slate-600 mb-6">
              Cuéntanos qué quieres lograr y te propondremos una ruta clara en 48 horas hábiles.
            </p>
            <ul className="space-y-1 text-slate-700">
              <li>✉︎ <a href="mailto:info@calanda.com.co" className="underline">info@calanda.com.co</a></li>
              <li>🌐 <a href="https://www.calanda.com.co" className="underline">www.calanda.com.co</a></li>
            </ul>
          </div>

          <div className="card p-6">
            {sent === 'ok' ? (
              <div className="p-6 rounded-xl bg-emerald-50 text-emerald-700 space-y-2">
                <h3 className="text-xl font-semibold">¡Gracias por Escribirnos!</h3>
                <p>Recibimos tu mensaje y estamos corriendo para responderte con soluciones que se ajusten a la talla de tus necesidades.</p>
                <div className="mt-3 flex gap-3">
                  <a className="px-4 py-2 rounded-xl bg-calanda-red text-white no-underline" href="#servicios">Ver servicios</a>
                  <a className="px-4 py-2 rounded-xl bg-calanda-dark text-white no-underline" href="mailto:info@calanda.com.co">Escribir de nuevo</a>
                </div>
              </div>
            ) : sent === 'err' ? (
              <div className="p-4 rounded-xl bg-red-50 text-red-700">
                Ocurrió un error al enviar. Por favor, escríbenos a <a href="mailto:info@calanda.com.co" className="underline">info@calanda.com.co</a>.
              </div>
            ) : (
              <form className="space-y-3" onSubmit={onSubmit}>
                <input name="name" className="w-full border rounded-xl p-3" placeholder="Nombre" required />
                <input name="email" className="w-full border rounded-xl p-3" type="email" placeholder="Correo" required />
                <textarea name="message" className="w-full border rounded-xl p-3" rows={5} placeholder="¿En qué podemos ayudarte?" required />
                <button
                  disabled={loading}
                  className="w-full px-5 py-3 rounded-2xl bg-calanda-red text-white hover:opacity-90 transition disabled:opacity-60"
                >
                  {loading ? 'Enviando…' : 'Enviar'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t text-center text-sm text-slate-500">
        <div className="container flex flex-col items-center gap-3">
          <img src="/logo-symbol.png" alt="CALANDA" className="h-10 w-auto opacity-80" />
          <div>© {new Date().getFullYear()} CALANDA — Comunicación, incidencia y estrategia.</div>
        </div>
      </footer>

      {/* CTA flotante móvil */}
      <a
        href="#contacto"
        className="md:hidden fixed bottom-4 right-4 px-4 py-3 rounded-full bg-calanda-red text-white shadow-lg no-underline"
      >
        Hablemos
      </a>
    </div>
  );
}

/* ---------- Datos ---------- */

const servicesBase = [
  {
    title: "Estrategia y posicionamiento",
    points: [
      "Diagnóstico de comunicación y propósito",
      "Narrativa central y mensajes clave",
      "Plan de acción en medios y redes",
      "Indicadores de impacto (MEL)",
    ],
  },
  {
    title: "<em>Free press</em> y medios",
    points: [
      "Dossier y base de periodistas",
      "Gestión de entrevistas y apariciones",
      "Ruedas de prensa y vocería",
      "Seguimiento y <em>clipping</em> con insights",
    ],
  },
  {
    title: "Relaciones institucionales y alianzas",
    points: [
      "Mapeo de actores público-privados",
      "Agenda y gestión de reuniones",
      "Acompañamiento en eventos clave",
      "Construcción de alianzas estratégicas",
    ],
  },
  {
    title: "<em>Storytelling</em> corporativo y político",
    points: [
      "Guiones, discursos y presentaciones",
      "Piezas audiovisuales y materiales de difusión",
      "<em>Storydoing</em> para mostrar el propósito en acción",
    ],
  },
  {
    title: "Formación y entrenamiento de voceros",
    points: [
      "Sesiones personalizadas y simulaciones",
      "Protocolos de vocería para medios y crisis",
      "Capacitación en manejo de canales verbal y no verbal",
    ],
  },
  {
    title: "Manejo de crisis y escenarios críticos",
    points: [
      "Plan de respuesta rápida",
      "Mensajes de control reputacional",
      "<em>War room</em> y acompañamiento en tiempo real",
    ],
  },
  {
    title: "Marketing digital",
    points: [
      "Auditoría digital y calendario de contenidos",
      "SEO/SEM y optimización de campañas",
      "<em>Social listening</em> y reportes de métricas",
      "Plan de mejora continua",
    ],
  },
  {
    title: "Producción audiovisual",
    points: [
      "Videos institucionales y documentales",
      "Cápsulas para redes y animaciones",
      "Edición profesional y banco de imágenes",
    ],
  },
];

const iconMap: IconType[] = [
  Compass,      // Estrategia y posicionamiento
  Newspaper,    // Free press y medios
  Landmark,     // Relaciones institucionales
  PenTool,      // Storytelling corporativo y político
  Mic,          // Formación de voceros
  ShieldAlert,  // Manejo de crisis
  BarChart3,    // Marketing digital
  Film,         // Producción audiovisual
];

const servicesWithIcons = servicesBase.map((s, i) => ({
  ...s,
  icon: iconMap[i] ?? Compass,
}));

const bravo = [
  { k: "B", title: "Base", desc: "Diagnóstico profundo y definición del propósito de marca." },
  { k: "R", title: "Relato", desc: "Narrativa y mensajes clave con storytelling y storydoing." },
  { k: "A", title: "Alcance", desc: "Estrategia multicanal y activación de vocerías y alianzas." },
  { k: "V", title: "Visibilidad", desc: "Presencia frente a públicos clave y optimización digital." },
  { k: "O", title: "Oportunidad", desc: "Transferencia de capacidades para sostenibilidad y escala." },
];

const cases = [
  {
    // Laboratorio / industria regulada
    img: "https://images.unsplash.com/photo-1581091215367-59ab6b321caa?q=80&auto=format&fit=crop&w=1200",
    title: "Sector regulado y sensible",
    desc: "Posicionamiento de compañía con altos estándares, trazabilidad y aporte económico ante autoridades y opinión pública.",
    bullets: [
      "Narrativa y <em>free press</em> en medios clave".replace(/<[^>]*>/g, ''), // visibles como texto
      "Entrenamiento de voceros para temas sensibles",
      "Visibilidad sostenida e invitaciones a foros sectoriales",
    ],
  },
  {
    img: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&auto=format&fit=crop&w=1200",
    title: "Alianzas multi-actor",
    desc: "Diseño de relacionamiento para conectar empresa, gobierno y sociedad civil alrededor de un propósito compartido.",
    bullets: [
      "Mapeo de actores y agenda de alto nivel",
      "Gestión de reuniones y seguimiento",
      "Resultados medibles en corto plazo",
    ],
  },
  {
    // Megáfono en la calle / comunicación pública
    img: "https://images.unsplash.com/photo-1517602302552-471fe67acf66?q=80&auto=format&fit=crop&w=1200",
    title: "Comunicación de impacto",
    desc: "Campaña multicanal para traducir proyectos complejos en resultados comprensibles y memorables.",
    bullets: [
      "Mensajes simples y poderosos",
      "Storytelling + storydoing",
      "KPIs y aprendizaje continuo (MEL)",
    ],
  },
];
