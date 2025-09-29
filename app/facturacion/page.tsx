import type { Metadata } from 'next';
import CopyButton from '../components/CopyButton';

export const metadata: Metadata = {
  title: 'Facturación | CALANDA',
  description: 'Datos de facturación y recepción de cuentas de CALANDA.',
};

export default function FacturacionPage() {
  const nit = '901.234.567-8';
  const razon = 'CALANDA SAS';
  const direccion = 'Cra 7 # 123-45, Bogotá';
  const correoFacturas = 'facturas@calanda.com.co';

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <section className="container section">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Facturación</h1>
        <p className="text-slate-600 mb-8">Información para envío de cuentas y documentos.</p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-6 space-y-3">
            <Row label="Razón social" value={razon} />
            <Row label="NIT" value={nit} />
            <Row label="Dirección" value={direccion} />
            <Row label="Correo de facturación" value={correoFacturas} isEmail />
          </div>

          <div className="card p-6 space-y-4">
            <h2 className="text-xl font-semibold">Envío de facturas</h2>
            <ul className="list-disc pl-5 space-y-1 text-slate-700">
              <li>Formato: PDF + XML (si aplica).</li>
              <li>Asunto del correo: “Factura – Proveedor – Número”.</li>
              <li>Tiempo de respuesta: 5–7 días hábiles.</li>
            </ul>
            <a href={`mailto:${correoFacturas}`} className="inline-block px-4 py-2 rounded-2xl bg-calanda-red text-white no-underline">
              Enviar correo
            </a>
          </div>
        </div>

        <div className="mt-8">
          <CopyButton text={`${razon} | NIT ${nit}`} className="px-4 py-2 rounded-xl border">
            Copiar datos de facturación
          </CopyButton>
        </div>
      </section>
    </div>
  );
}

/** Subcomponente server (sin handlers) */
function Row({ label, value, isEmail = false }: { label: string; value: string; isEmail?: boolean }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div>
        <div className="text-sm text-slate-500">{label}</div>
        {isEmail ? (
          <a href={`mailto:${value}`} className="underline">{value}</a>
        ) : (
          <div className="font-medium">{value}</div>
        )}
      </div>
      <CopyButton text={value} className="px-3 py-1 rounded-lg border text-sm">Copiar</CopyButton>
    </div>
  );
}
