'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const STEPS = [
  {
    letter: 'A',
    kicker: 'Análisis territorial',
    title: 'Leemos el territorio antes de intervenirlo',
    text: 'Mapeamos actores, riesgos, intereses, liderazgos, legitimidades, antecedentes de conflictividad y dinámicas de poder para entender qué puede habilitar o bloquear un proyecto.',
  },
  {
    letter: 'C',
    kicker: 'Comprensión de intereses',
    title: 'Más allá de las posiciones iniciales',
    text: 'Identificamos lo que realmente está en juego para empresas, trabajadores y sindicatos, comunidades, autoridades e instituciones, y encontramos puntos de convergencia que permitan construir soluciones sostenibles.',
  },
  {
    letter: 'U',
    kicker: 'Unificación de actores',
    title: 'Conversar alrededor de objetivos compartidos',
    text: 'Creamos condiciones para que actores diversos conversen alrededor de objetivos compartidos, reglas claras y expectativas realistas. No forzamos consensos artificiales: diseñamos procesos para que los acuerdos sean posibles.',
  },
  {
    letter: 'E',
    kicker: 'Estructura de gobernanza',
    title: 'Una arquitectura de confianza que se sostiene',
    text: 'Diseñamos espacios, reglas, mecanismos de seguimiento y rutas de decisión para que los acuerdos no dependan de la buena voluntad del momento, sino de una arquitectura de confianza que pueda sostenerse en el tiempo.',
  },
  {
    letter: 'R',
    kicker: 'Relatos compartidos',
    title: 'Comunicación que hace visible lo construido',
    text: 'Construimos narrativas que generan apropiación, confianza y sentido de corresponsabilidad entre empresa, comunidades y aliados institucionales. La comunicación no se usa para maquillar el conflicto, sino para hacer visible lo que se construye en conjunto.',
  },
  {
    letter: 'D',
    kicker: 'Desarrollo de valor compartido',
    title: 'Beneficios sostenibles, no dependencia',
    text: 'Conectamos los objetivos empresariales con prioridades reales del territorio para crear beneficios sostenibles, reducir relaciones de dependencia y fortalecer capacidades locales.',
  },
  {
    letter: 'O',
    kicker: 'Observación y ajuste continuo',
    title: 'Lo que no se mide se vuelve percepción',
    text: 'Medimos confianza, cumplimiento, percepción, apropiación, conversación digital y conflictividad para ajustar la estrategia en el tiempo. Lo que no se mide se vuelve percepción. Lo que no se gobierna se vuelve conflicto.',
  },
];

export default function AcuerdoAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="border-t border-ink/10">
      {STEPS.map((step, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={step.letter} className="border-b border-ink/10">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className="w-full grid grid-cols-[auto_1fr_auto] items-center gap-6 md:gap-12 py-6 md:py-8 text-left"
            >
              <span
                className={`font-serif font-semibold text-4xl md:text-5xl w-[1.3em] transition-colors ${
                  isOpen ? 'text-calanda-red' : 'text-ink/15'
                }`}
              >
                {step.letter}
              </span>
              <span>
                <span className="block text-xs font-semibold tracking-widest uppercase text-calanda-red mb-1.5">
                  {step.kicker}
                </span>
                <span className="block font-serif text-xl md:text-2xl text-ink">{step.title}</span>
              </span>
              <span
                className={`flex-none w-9 h-9 rounded-full border grid place-items-center transition-transform ${
                  isOpen ? 'bg-calanda-red border-calanda-red text-white rotate-180' : 'border-ink/20 text-ink/60'
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </span>
            </button>
            {isOpen && (
              <div className="pb-7 md:pb-9 pl-[calc(1.3em+1.5rem)] md:pl-[calc(1.3em+3rem)] max-w-2xl">
                <p className="text-ink/60 text-base md:text-lg">{step.text}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
