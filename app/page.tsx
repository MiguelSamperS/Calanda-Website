import {
  HeartCrack,
  HandHeart,
  TrendingUp,
  Share2,
  Landmark,
  Mic,
  Sprout,
  ShieldAlert,
  Megaphone,
  ShieldCheck,
  MapPin,
  MessageSquare,
  Handshake,
  Radio,
  ArrowRight,
} from 'lucide-react';

import MobileMenu from './components/MobileMenu';
import ContactForm from './components/ContactForm';
import AcuerdoAccordion from './components/AcuerdoAccordion';

const NAV = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#licencia-social', label: 'Licencia Social' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#equipo', label: 'Equipo' },
  { href: '#contacto', label: 'Contacto' },
];

const SECTORS = [
  'Minería', 'Agroindustria', 'Infraestructura', 'Tecnología y Telecomunicaciones',
  'Desarrollo Rural', 'Sector Público', 'Zonas Francas', 'Cooperación Internacional',
  'Servicios Públicos', 'Energía', 'Pensiones', 'Inversión de Impacto', 'Puertos', 'Cannabis Medicinal',
];

const PROBLEM_CARDS = [
  {
    icon: HeartCrack,
    title: 'Confianza rota',
    text: 'Cuando la comunidad o los grupos de interés no creen en la empresa, cualquier decisión se vuelve sospechosa.',
  },
  {
    icon: HandHeart,
    title: 'Inversión social sin apropiación',
    text: 'No basta con hacer obras o programas si el territorio los percibe como entregas unilaterales o contraprestaciones obligatorias.',
  },
  {
    icon: TrendingUp,
    title: 'Conflictos que escalan',
    text: 'La ausencia de canales legítimos de diálogo convierte diferencias manejables en crisis operativas, reputacionales o jurídicas.',
  },
];

const SERVICE_CARDS = [
  {
    icon: Share2,
    title: 'Relacionamiento Estratégico e Incidencia',
    text: 'Construimos rutas de relacionamiento con actores públicos, privados, comunitarios e institucionales para abrir canales de diálogo, generar confianza e incidir legítimamente en decisiones relevantes.',
  },
  {
    icon: Landmark,
    title: 'Asuntos Públicos y Advocacy',
    text: 'Acompañamos la lectura del entorno político, regulatorio y reputacional para anticipar riesgos, identificar oportunidades y actuar con oportunidad, legitimidad y eficacia.',
  },
  {
    icon: Mic,
    title: 'Comunicación Estratégica y capacitación de voceros',
    text: (
      <>
        Diseñamos narrativas, mensajes centrales y de posicionamiento, así como capacitamos en vocería para
        fortalecer credibilidad, confianza y legitimidad ante <em>stake holders</em>.
      </>
    ),
  },
  {
    icon: Sprout,
    title: 'ESG Social y Valor Compartido',
    text: 'Traducimos la sostenibilidad en relaciones, indicadores, proyectos y mecanismos concretos que generen valor para la empresa y para sus grupos de interés.',
  },
  {
    icon: ShieldAlert,
    title: 'Manejo de Crisis y Conflictividad',
    text: 'Diseñamos respuestas estratégicas frente a crisis sociales, reputacionales, institucionales o territoriales, combinando análisis político, comunicación, negociación y manejo de escenarios.',
  },
  {
    icon: Megaphone,
    title: 'Estrategia Digital para la Legitimidad',
    text: 'Convertimos contenidos, historias, acuerdos y aprendizajes de campo en estrategias digitales, piezas y campañas medibles que amplifican la confianza y hacen visible el impacto.',
  },
];

const DIFF_ITEMS = [
  {
    icon: ShieldCheck,
    title: 'Metodología',
    text: 'Integramos herramientas de negociación colaborativa, gobernanza y resolución de conflictos desarrolladas en centros académicos de referencia mundial, adaptadas a la realidad colombiana.',
  },
  {
    icon: MapPin,
    title: 'Territorio',
    text: 'Experiencia directa en comunidades rurales, sindicatos, grupos étnicos, autoridades locales, instituciones públicas y territorios con alta complejidad social.',
  },
  {
    icon: MessageSquare,
    title: 'Narrativa',
    text: 'Usamos la comunicación para el desarrollo como herramienta para construir apropiación, confianza, legitimidad y sentido de corresponsabilidad.',
  },
  {
    icon: Handshake,
    title: 'Valor compartido',
    text: 'Conectamos las prioridades del territorio con los objetivos de la organización, evitando relaciones de dependencia y fortaleciendo capacidades locales.',
  },
  {
    icon: Radio,
    title: 'Amplificación digital',
    text: 'Convertimos las historias, acuerdos e impactos del territorio en contenidos, campañas y mediciones que fortalecen reputación y visibilidad.',
  },
];

const TEAM = [
  {
    photo: '/equipo-miguel.png',
    name: 'Miguel Samper',
    role: 'Estrategia, negociación, gobernanza y ESG',
    bio: [
      'Abogado y consultor con más de 20 años de experiencia en política pública, desarrollo rural, justicia, tierras, sostenibilidad y relacionamiento institucional. Ha ocupado cargos de alta responsabilidad en el Estado, incluyendo la Dirección de la Agencia Nacional de Tierras y el viceministerio de Justicia, y ha trabajado en procesos donde confluyen comunidades, empresas, autoridades, regulación y decisiones de alto impacto público.',
      'Su trayectoria combina conocimiento técnico, lectura política del territorio y capacidad de concertación con actores institucionales, campesinos, étnicos, comunitarios y empresariales. Ha liderado agendas de reforma rural, justicia transicional, política de drogas, gestión social, gestión predial y articulación público-privada, con una comprensión práctica de cómo se construyen acuerdos en contextos complejos.',
    ],
  },
  {
    photo: '/equipo-paula.jpg',
    name: 'Paula López',
    role: 'Comunicación para el desarrollo, comunicación estratégica y capacitación en vocería',
    bio: [
      'Periodista y consultora en comunicaciones con más de 20 años de experiencia en medios, sector público, empresa privada y cooperación internacional. Ha trabajado en territorios complejos y en sectores sensibles como energía, desarrollo rural, paz, transición ambiental, derechos humanos, política pública e inversión de impacto.',
      'Su fortaleza está en leer contextos, escuchar comunidades, entender la conversación pública y convertir información compleja en mensajes claros, creíbles y útiles. Ha liderado relacionamiento con medios locales, regionales y nacionales, así como procesos de pedagogía comunitaria, manejo reputacional, capacitación en vocería, campañas públicas y comunicación institucional en momentos de alta tensión política.',
    ],
  },
  {
    photo: '/equipo-estefania.jpg',
    name: 'Estefanía Albornoz',
    role: 'Audiencias digitales, contenidos, posicionamiento y medición',
    bio: [
      'Profesional en marketing digital y comunicación con más de 12 años de experiencia en campañas, contenidos, SEO, redes sociales, pauta, automatización, generación de demanda, analítica y construcción de comunidades digitales. Ha trabajado con agencias, empresas tecnológicas, entidades públicas, organizaciones sociales y cooperación internacional.',
      'Su experiencia le permite traducir temas técnicos en contenidos accesibles, atractivos y culturalmente relevantes. Ha liderado equipos interdisciplinarios, desarrollado campañas multicanal, diseñado narrativas por audiencia y usado datos para mejorar alcance, conversación, posicionamiento y conversión.',
    ],
  },
  {
    photo: '/equipo-raul.jpg',
    name: 'Raúl Díaz',
    role: 'Pedagogía, diseño de narrativas, comunicación cultural y preparación de mensajes',
    bio: [
      'Consultor, investigador y formador en comunicación con más de 15 años de experiencia en comunicación verbal y no verbal, entrenamiento de voceros, relacionamiento con medios, pedagogía y preparación de mensajes estratégicos.',
      'Su trabajo conecta la comunicación institucional con la comunicación entendida como práctica cultural: no solo qué se dice, sino cómo se dice, quién lo dice, desde dónde se escucha y qué sentido produce en cada audiencia. Ha acompañado entidades públicas, organismos multilaterales, universidades y organizaciones sociales en procesos de participación, apropiación comunitaria, inclusión y formación comunicativa.',
    ],
  },
  {
    photo: '/equipo-catalina.jpg',
    name: 'Catalina Albornoz',
    role: 'Escritura, análisis jurídico, contenidos y claridad institucional',
    bio: [
      'Abogada, redactora y especialista en contenidos jurídicos e institucionales, con experiencia en periodismo especializado, investigación, entrevistas, edición, análisis normativo, storytelling y producción de textos para medios impresos, portales digitales, redes sociales y líderes corporativos.',
      'Durante varios años hizo parte del equipo de Ámbito Jurídico, donde cubrió fuentes judiciales, elaboró informes, realizó entrevistas y produjo contenidos sobre asuntos legales, institucionales y de actualidad nacional. También ha trabajado en contenidos digitales y posicionamiento para clientes corporativos, combinando rigor, sensibilidad y capacidad de síntesis.',
    ],
  },
];

const ORG_BADGES = [
  'Gobierno y política pública', 'Desarrollo rural y territorio', 'Energía y transición',
  'Minería y sostenibilidad', 'Justicia y paz', 'Cooperación internacional',
  'Inversión de impacto', 'Comunicación y reputación', 'Marketing digital y posicionamiento', 'ESG y valor compartido',
];

export default function Page() {
  return (
    <div className="bg-bone text-ink">
      {/* ============ HEADER ============ */}
      <header className="fixed top-0 inset-x-0 z-30 bg-bone/90 backdrop-blur border-b border-ink/10">
        <div className="container flex items-center justify-between py-3">
          <a href="#inicio" className="flex items-center gap-3">
            <img src="/icono-calanda-sin-fondo.png" alt="Calanda" className="h-10 w-10 md:h-12 md:w-12 object-contain" />
            <span className="flex flex-col leading-none">
              <span className="font-sans font-bold tracking-wide text-lg md:text-xl text-ink">CALANDA</span>
              <span className="font-sans text-[10px] md:text-xs tracking-[0.2em] text-ink/55">CONSULTORES Y ESTRATEGIA</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            {NAV.map((l) => (
              <a key={l.href} href={l.href} className="text-ink/75 hover:text-calanda-red transition">
                {l.label}
              </a>
            ))}
            <a href="#contacto" className="px-5 py-2.5 rounded bg-calanda-red text-white font-semibold hover:bg-calanda-redBright transition">
              Hablemos
            </a>
          </nav>

          <MobileMenu />
        </div>
      </header>

      {/* ============ HERO ============ */}
      <section id="inicio" className="relative min-h-screen flex flex-col text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src="/hero-territorio-dialogo.jpg" alt="Diálogo en territorio con comunidades en Colombia" className="w-full h-full object-cover" />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, rgba(10,18,28,.62) 0%, rgba(10,18,28,.28) 30%, rgba(10,18,28,.34) 55%, rgba(9,16,25,.92) 100%), linear-gradient(90deg, rgba(9,16,25,.82) 0%, rgba(9,16,25,.30) 48%, rgba(9,16,25,0) 72%)',
            }}
          />
        </div>

        <div className="relative z-10 container flex-1 flex flex-col justify-end md:justify-center pt-28 pb-14 md:py-0 max-w-4xl">
          <span
            className="inline-flex items-center gap-2.5 text-sm font-bold tracking-[0.14em] uppercase"
            style={{ color: '#C13C4F', textShadow: '0 1px 10px rgba(8,14,22,.45)' }}
          >
            <span className="w-7 h-[2.5px]" style={{ background: '#C13C4F' }} />
            Acompañamiento Integral
          </span>

          <h1 className="font-serif font-semibold text-4xl md:text-6xl leading-[1.05] mt-6 max-w-3xl">
            Construimos <em className="italic font-medium">licencia social</em> para operar donde otros solo gestionan conflictos.
          </h1>

          <p className="text-white/90 max-w-2xl mt-6 text-base md:text-xl leading-relaxed">
            Acompañamos a empresas e instituciones a diseñar estrategias integrales para construir legitimidad, confianza
            y acuerdos duraderos con comunidades, sindicatos, autoridades regionales o locales y otros grupos de interés.
          </p>

          <p className="font-serif italic font-bold text-gold mt-5 flex items-center gap-3 text-lg">
            <span className="w-8 h-0.5 bg-gold" />
            La licencia social no se compra. Se construye.
          </p>

          <div className="flex flex-wrap gap-3.5 mt-9">
            <a href="#licencia-social" className="inline-flex items-center gap-2 px-7 py-4 rounded bg-calanda-red text-white font-semibold hover:bg-calanda-redBright transition">
              Conocer metodología <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#contacto" className="inline-flex items-center px-7 py-4 rounded border border-white/40 text-white font-semibold hover:border-white transition">
              Hablemos
            </a>
          </div>

          <div className="flex items-center gap-3.5 text-sm mt-13 pt-6 border-t border-white/15 flex-wrap">
            <span className="uppercase tracking-[0.22em] text-white/60 font-semibold text-xs">El equilibrio que sostiene</span>
            <span className="flex items-center gap-3.5 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-calanda-red" /> Empresa
              <span className="w-1.5 h-1.5 rounded-full bg-calanda-red" /> Comunidad
              <span className="w-1.5 h-1.5 rounded-full bg-calanda-red" /> Estado
            </span>
          </div>
        </div>
      </section>

      {/* ============ SECTORES (marquesina) ============ */}
      <section className="bg-ink text-white py-11">
        <div className="container">
          <p className="text-sm font-semibold tracking-[0.16em] uppercase max-w-xl leading-relaxed">
            Un equipo que ha liderado procesos de concertación comunitaria, negociación con sindicatos y trabajadores,
            transformación institucional y gobernanza en ambientes complejos
          </p>
          <div className="flex flex-col gap-1.5 mt-7">
            <span className="text-xs font-semibold tracking-[0.16em] uppercase text-gold">Dónde hemos agregado valor</span>
            <p className="font-serif text-lg text-white/80">Sectores a los que hemos acompañado</p>
          </div>
        </div>
        <div
          className="relative overflow-hidden w-full mt-7"
          style={{ WebkitMaskImage: 'linear-gradient(90deg, transparent 0, #000 9%, #000 91%, transparent 100%)', maskImage: 'linear-gradient(90deg, transparent 0, #000 9%, #000 91%, transparent 100%)' }}
        >
          <div className="marquee-track flex items-center w-max">
            {[...SECTORS, ...SECTORS].map((s, i) => (
              <span key={i} className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-calanda-redBright flex-none mx-9 md:mx-11" />
                <span className="font-serif text-2xl md:text-3xl text-white/90 whitespace-nowrap">{s}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ============ EL PROBLEMA ============ */}
      <section className="section">
        <div className="container grid md:grid-cols-2 gap-11 items-start">
          <div>
            <span className="text-calanda-red text-xs font-semibold tracking-[0.22em] uppercase inline-flex items-center gap-2.5">
              <span className="w-6 h-px bg-calanda-red" /> El problema
            </span>
            <h2 className="font-serif font-semibold text-3xl md:text-4xl mt-5">
              Las licencias legales <em className="text-calanda-red italic">no siempre bastan.</em>
            </h2>
            <p className="text-ink/60 mt-5 text-lg">
              Un proyecto puede tener permisos, estudios técnicos, licencia ambiental, cierre financiero y respaldo
              institucional. Pero si no tiene confianza en el territorio ni gobernanza interna o externa, sigue siendo vulnerable.
            </p>
            <p className="text-ink/60 mt-4 text-lg">
              En Colombia y América Latina, muchos proyectos no se frenan por fallas técnicas, sino por conflictos sociales,
              pérdida de legitimidad, expectativas mal gestionadas, narrativas adversas o acuerdos que no logran sostenerse en el tiempo.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {PROBLEM_CARDS.map((c) => (
              <div key={c.title} className="card p-6 flex gap-5 items-start">
                <c.icon className="w-11 h-11 text-calanda-red flex-none" strokeWidth={1.5} />
                <div>
                  <h4 className="font-serif text-lg font-semibold mb-1.5">{c.title}</h4>
                  <p className="text-ink/60 text-[15px]">{c.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="container mt-13">
          <p className="border-l-[3px] border-calanda-red bg-bone2 rounded-r px-8 py-7 font-serif italic text-xl md:text-2xl">
            La diferencia entre un proyecto vulnerable y un proyecto sostenible suele estar en la calidad de las
            relaciones que logra construir.
          </p>
        </div>
      </section>

      {/* ============ ACOMPAÑAMIENTO INTEGRAL ============ */}
      <section id="licencia-social" className="section bg-ink text-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-gold text-xs font-bold tracking-[0.22em] uppercase inline-flex items-center gap-2.5">
              <span className="w-6 h-px bg-gold" /> Acompañamiento integral
            </span>
            <h2 className="font-serif font-semibold text-3xl md:text-5xl mt-5 leading-tight">
              Estrategia de Licencia Social para Operar
            </h2>
            <span className="inline-flex items-center gap-2.5 mt-6 px-5 py-2 rounded-full border border-white/20 text-sm text-white/85">
              <span className="w-2 h-2 rounded-full bg-gold" /> Diseñar · Construir · Proteger
            </span>
            <p className="text-white/80 text-lg md:text-xl mt-6">
              Diseñamos, construimos y protegemos la licencia social que permite operar con legitimidad, confianza y
              acuerdos duraderos.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mt-16">
            <div className="rounded-lg overflow-hidden shadow-2xl relative">
              <img src="/mesa-mapas-gobernanza.jpg" alt="Mesa de gobernanza territorial con mapas y actores locales" className="w-full aspect-[4/3.4] object-cover" />
              <span className="absolute left-5 bottom-5 text-xs font-semibold tracking-widest uppercase bg-ink/55 backdrop-blur border border-white/15 px-3.5 py-2 rounded-full">
                Gobernanza territorial · Colombia
              </span>
            </div>
            <div>
              <h3 className="font-serif text-2xl md:text-3xl mb-3">Licenciamiento social que perdura en el tiempo</h3>
              <div className="space-y-3 text-white/75">
                <p>
                  Las licencias ambientales, los permisos regulatorios y los títulos habilitantes son indispensables.
                  Pero en ciertos sectores productivos, con determinados grupos de interés complejos o en territorios
                  difíciles existe una licencia adicional que ninguna autoridad puede otorgar y cuya ausencia puede
                  poner en riesgo incluso las inversiones mejor estructuradas: <strong className="text-white">la licencia social para operar.</strong>
                </p>
                <p>
                  En Calanda ayudamos a empresas e instituciones a diseñar una estrategia para construir esa licencia,
                  integrando gobernanza, negociación colaborativa, comunicación para el desarrollo, sostenibilidad
                  corporativa y creación de valor compartido.
                </p>
              </div>
              <div className="space-y-3 text-white/75 mt-5 pt-5 border-t border-white/10">
                <p>No creemos en la inversión social entendida como una sucesión de entregas. Creemos en construir confianza, corresponsabilidad y apropiación.</p>
                <p className="font-serif italic text-gold text-lg">
                  Porque los proyectos que perduran no son los que simplemente obtienen permisos. Son los que logran
                  que su presencia tenga sentido para el territorio, los trabajadores, las comunidades y los demás
                  grupos de interés.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <div className="border border-white/10 rounded p-7 bg-white/[0.02]">
              <div className="text-xs font-semibold tracking-widest uppercase text-gold mb-3.5">Una metodología distinta, pero probada</div>
              <h4 className="font-serif text-xl mb-2.5">Trabajamos antes del conflicto</h4>
              <p className="text-white/70 text-[15px]">
                La mayoría de estrategias de relacionamiento se activan cuando el conflicto ya apareció. Nosotros
                identificamos riesgos, entendemos intereses, diseñamos reglas de diálogo, construimos acuerdos y
                medimos la confianza en el tiempo.
              </p>
            </div>
            <div className="border border-white/10 rounded p-7 bg-white/[0.02]">
              <div className="text-xs font-semibold tracking-widest uppercase text-gold mb-3.5">Rigor internacional</div>
              <h4 className="font-serif text-xl mb-2.5">Una metodología de Harvard adaptada a Colombia</h4>
              <p className="text-white/70 text-[15px]">
                Incorporamos metodologías de negociación colaborativa y generación de acuerdos de la Universidad de
                Harvard, adaptada a la realidad social, política, cultural y territorial del país.
              </p>
            </div>
            <div className="border border-white/10 rounded p-7 bg-white/[0.02]">
              <div className="text-xs font-semibold tracking-widest uppercase text-gold mb-3.5">¿Por qué Calanda?</div>
              <h4 className="font-serif text-xl mb-2.5">Desde el escritorio y desde el territorio</h4>
              <p className="text-white/70 text-[15px]">
                La licencia social se construye entendiendo a la vez las realidades de las comunidades y de los
                trabajadores, las miradas de las autoridades locales o regionales, las exigencias regulatorias, los
                retos operativos, las dinámicas políticas de la zona, la conversación pública y las expectativas de
                los inversionistas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ MÉTODO ACUERDO ============ */}
      <section id="metodo" className="section">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 items-end mb-10">
            <div>
              <span className="text-calanda-red text-xs font-semibold tracking-[0.22em] uppercase inline-flex items-center gap-2.5">
                <span className="w-6 h-px bg-calanda-red" /> Método propio
              </span>
              <h2 className="font-serif font-semibold text-3xl md:text-5xl mt-5">Método ACUERDO</h2>
              <div className="flex gap-1.5 mt-4 flex-wrap">
                {'ACUERDO'.split('').map((l, i) => (
                  <span key={i} className="font-serif font-semibold text-xl md:text-2xl text-calanda-red border border-ink/15 rounded w-9 h-9 md:w-11 md:h-11 flex items-center justify-center">
                    {l}
                  </span>
                ))}
              </div>
            </div>
            <p className="text-ink/60 text-lg">
              Una metodología para anticipar conflictos, construir legitimidad y sostener relaciones de largo plazo.
            </p>
          </div>

          <div className="card px-7 py-6 mb-9">
            <p className="text-ink/60">
              <strong className="text-ink">ACUERDO</strong> integra análisis territorial, negociación colaborativa, gobernanza,
              comunicación para el desarrollo y valor compartido para transformar relaciones frágiles en confianza verificable.
            </p>
          </div>

          <AcuerdoAccordion />
        </div>
      </section>

      {/* ============ OTROS SERVICIOS ============ */}
      <section id="servicios" className="relative">
        <div className="relative flex items-center overflow-hidden min-h-screen py-20">
          <div className="absolute inset-0">
            <img src="/mosaico-servicios.jpg" alt="Equipo de Calanda trabajando en territorio" className="w-full h-full object-cover" />
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(100deg, rgba(10,18,28,.92) 0%, rgba(10,18,28,.80) 22%, rgba(10,18,28,.40) 40%, rgba(10,18,28,.20) 62%, rgba(10,18,28,.42) 100%), linear-gradient(0deg, rgba(10,18,28,.55) 0%, rgba(10,18,28,0) 32%)',
              }}
            />
          </div>
          <div className="relative z-10 container">
            <div className="max-w-md text-white">
              <span className="text-gold text-xs font-semibold tracking-[0.22em] uppercase inline-flex items-center gap-2.5">
                <span className="w-6 h-px bg-gold" /> Servicios
              </span>
              <h2 className="font-serif font-semibold text-3xl md:text-5xl mt-5">Otros Servicios</h2>
              <p className="text-white/90 mt-5" style={{ textShadow: '0 1px 16px rgba(8,14,22,.5)' }}>
                Calanda también acompaña a empresas e instituciones en otros retos como el relacionamiento con actores
                clave, asuntos públicos, comunicación reputacional, ESG social, valor compartido, manejo de crisis,
                narrativa territorial y amplificación digital.
              </p>
              <p className="text-white/90 mt-4" style={{ textShadow: '0 1px 16px rgba(8,14,22,.5)' }}>
                Diseñamos soluciones integrales o intervenciones puntuales según el momento del proyecto, el nivel de
                riesgo y las necesidades de cada organización.
              </p>
              <p className="text-white/90 mt-4" style={{ textShadow: '0 1px 16px rgba(8,14,22,.5)' }}>
                Integramos estrategia, territorio, comunicación e incidencia para construir confianza, legitimidad y
                capacidad de acción en entornos complejos.
              </p>
            </div>
          </div>
        </div>

        <div className="container py-16 md:py-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4.5">
            {SERVICE_CARDS.map((s) => (
              <div key={s.title} className="card p-7 flex flex-col gap-3">
                <span className="w-12 h-12 rounded bg-calanda-red/[0.08] flex items-center justify-center">
                  <s.icon className="w-6 h-6 text-calanda-red" strokeWidth={1.6} />
                </span>
                <h4 className="font-serif text-lg leading-tight">{s.title}</h4>
                <p className="text-ink/60 text-[15px]">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ EQUIPO ============ */}
      <section id="equipo" className="section">
        <div className="container">
          <span className="text-calanda-red text-xs font-semibold tracking-[0.22em] uppercase inline-flex items-center gap-2.5">
            <span className="w-6 h-px bg-calanda-red" /> Nuestro equipo
          </span>
          <h2 className="font-serif font-semibold text-3xl md:text-5xl mt-5">Nuestro equipo</h2>
          <p className="text-ink/60 text-lg mt-5 max-w-2xl">
            Experiencia pública, privada, territorial, comunicacional y digital al servicio de proyectos que
            necesitan construir legitimidad.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-11">
            {TEAM.map((m) => (
              <article key={m.name} className="card overflow-hidden">
                <div className="aspect-[4/3.6] overflow-hidden bg-ink">
                  <img src={m.photo} alt={m.name} className="w-full h-full object-cover" style={{ objectPosition: 'center 22%' }} />
                </div>
                <div className="p-6">
                  <h4 className="font-serif text-xl mb-1">{m.name}</h4>
                  <span className="block text-sm font-semibold text-calanda-red mb-3.5 pb-3.5 border-b border-ink/10">{m.role}</span>
                  {m.bio.map((p, i) => (
                    <p key={i} className={`text-[13.5px] text-ink/60 leading-relaxed ${i > 0 ? 'mt-2.5' : ''}`}>{p}</p>
                  ))}
                </div>
              </article>
            ))}

            <article className="card flex items-center justify-center bg-white">
              <div className="p-9 text-center">
                <img src="/icono-calanda-sin-fondo.png" alt="Calanda" className="w-24 h-24 object-contain mx-auto mb-5" />
                <p className="font-serif italic text-lg leading-snug">
                  Un equipo con el rigor técnico para entender a las empresas y la experiencia territorial para
                  construir confianza en Colombia.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ============ NUESTRO DIFERENCIAL ============ */}
      <section className="section bg-white border-t border-ink/10">
        <div className="container grid lg:grid-cols-2 gap-11 items-center">
          <div className="rounded-xl overflow-hidden border border-ink/10 shadow-lg bg-[#F6F4F1]">
            <img src="/infografia-diferencial.jpg" alt="Rigor internacional y experiencia real en Colombia" className="w-full block" />
          </div>
          <div>
            {DIFF_ITEMS.map((d, i) => (
              <div key={d.title} className={`grid grid-cols-[auto_1fr] gap-5 py-5 ${i === 0 ? 'pt-0' : ''} ${i < DIFF_ITEMS.length - 1 ? 'border-b border-ink/10' : 'pb-0'}`}>
                <span className="w-11 h-11 rounded bg-bone2 flex items-center justify-center flex-none">
                  <d.icon className="w-[22px] h-[22px] text-calanda-red" strokeWidth={1.6} />
                </span>
                <div>
                  <h4 className="font-serif text-lg mb-1.5">{d.title}</h4>
                  <p className="text-ink/60 text-[15px]">{d.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TRAYECTORIA COMPARTIDA ============ */}
      <section className="section bg-ink text-white text-center">
        <div className="container">
          <span className="text-gold text-xs font-bold tracking-[0.22em] uppercase">— Trayectoria compartida</span>
          <h2 className="font-serif font-semibold text-3xl md:text-4xl mt-5 max-w-xl mx-auto">
            Una mirada construida desde múltiples sectores
          </h2>
          <p className="text-white/75 max-w-2xl mx-auto mt-5 text-lg">
            La experiencia del equipo integra sector público, empresa privada, cooperación internacional,
            sostenibilidad, comunicación, desarrollo rural, justicia, energía, minería, tecnología e inversión de impacto.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-11">
            {ORG_BADGES.map((b) => (
              <span key={b} className="border border-white/15 rounded-full px-5 py-2.5 text-sm text-white/90 bg-white/[0.03]">
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CIERRE CTA ============ */}
      <section id="contacto" className="relative text-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src="/cierre-confianza.jpg" alt="Territorio colombiano al atardecer" className="w-full h-full object-cover" style={{ objectPosition: 'center 60%' }} />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(180deg, rgba(9,16,25,.78) 0%, rgba(9,16,25,.62) 45%, rgba(9,16,25,.88) 100%)' }}
          />
        </div>
        <div className="relative z-10 container py-24 md:py-36 max-w-3xl mx-auto">
          <span className="text-gold text-xs font-bold tracking-[0.22em] uppercase">— Construyamos confianza</span>
          <h2 className="font-serif font-semibold text-3xl md:text-5xl mt-5 leading-tight">
            Los mejores proyectos no son los que solo obtienen permisos.{' '}
            <em className="italic text-gold font-medium">Son los que construyen confianza.</em>
          </h2>
          <p className="text-white/90 mt-6 text-lg md:text-xl">
            Hablemos de cómo construir una licencia social que perdure en el tiempo.
          </p>

          <div className="card p-7 max-w-md mx-auto mt-9 text-left">
            <ContactForm />
          </div>

          <p className="text-xs tracking-[0.24em] uppercase text-white/60 font-semibold mt-8">
            CALANDA · CONSULTORES Y ESTRATEGIA
          </p>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="bg-ink text-white/70 pt-16 pb-8 border-t border-white/10">
        <div className="container grid md:grid-cols-3 gap-11 mb-11">
          <div>
            <a href="#inicio" className="flex items-center gap-3">
              <span className="w-11 h-11 rounded-lg bg-white flex items-center justify-center p-1.5 shadow">
                <img src="/icono-calanda-sin-fondo.png" alt="Calanda" className="w-full h-full object-contain" />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-sans font-bold text-lg text-white">CALANDA</span>
                <span className="font-sans text-[10px] tracking-[0.2em] text-white/55">CONSULTORES Y ESTRATEGIA</span>
              </span>
            </a>
            <p className="mt-4.5 text-sm max-w-xs text-white/60 leading-relaxed">
              Estrategia, territorio, comunicación e incidencia para construir legitimidad en entornos complejos.
            </p>
          </div>
          <div>
            <h5 className="text-xs font-semibold tracking-[0.16em] uppercase text-white/50 mb-4.5">Navegación</h5>
            <ul className="space-y-2.5 text-sm">
              {NAV.map((l) => (
                <li key={l.href}><a href={l.href} className="hover:text-white transition">{l.label}</a></li>
              ))}
              <li><a href="/facturacion" className="hover:text-white transition">Información legal</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-xs font-semibold tracking-[0.16em] uppercase text-white/50 mb-4.5">Contacto</h5>
            <a href="mailto:info@calanda.com.co" className="block text-sm mb-2.5 hover:text-white transition">info@calanda.com.co</a>
            <span className="block text-sm">Carrera 7 # 26 - 20<br />Bogotá D.C., Colombia</span>
          </div>
        </div>
        <div className="container flex flex-wrap justify-between gap-3.5 pt-6 border-t border-white/10 text-xs text-white/45">
          <span>© {new Date().getFullYear()} Calanda Consultores y Estrategia. Todos los derechos reservados.</span>
          <div className="flex gap-5 flex-wrap">
            <a href="#licencia-social" className="hover:text-white transition">Licencia Social</a>
            <a href="#servicios" className="hover:text-white transition">Servicios</a>
            <a href="#contacto" className="hover:text-white transition">Contacto</a>
            <a href="/facturacion" className="hover:text-white transition">Información legal</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
