import type { Metadata } from 'next';
import CopyButton from '../components/CopyButton';

export const metadata: Metadata = {
  title: 'Facturación | CALANDA',
  description: 'Datos de facturación y recepción de cuentas de CALANDA.',
  robots: { index: false, follow: false }, // no se indexa; acceso solo por QR/enlace directo
};

export default function FacturacionPage() {
  const datos = {
    razon: 'Calanda Consultores y Estrategia SAS',
    nit: '901.859.654-2',
    correo: 'gerencia@calanda.com.co',
    direccion: 'Carrera 7 # 26 - 20, Bogotá D.C., Colombia',
    telefono: '3107624469',
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <section className="container section">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Facturación</h1>
        <p className="text-slate-600 mb-8">
          Información para el envío de cuentas y documentos a CALANDA.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-6 space-y-4">
            <Fila label="Razón social" value={datos.razon} />
            <Fila label="NIT" value={datos.nit} />
            <Fila label="Dirección" value={datos.direccion} />
            <Fila label="Correo" value={datos.correo} isEmail />
            <Fila label="Teléfono" value={datos.telefono} isPhone />
          </div>

          <div className="card p-6 space-y-4">
            <h2 className="text-xl font-semibold">Instrucciones de envío</h2>
            <ul className="list-disc pl-5 space-y-1 text-slate-700">
              <li>Formato: PDF (y XML si aplica).</li>
              <li>Asunto del correo: “Factura – Proveedor – Número”.</li>
              <li>Tiempo de respuesta: 5–7 días hábiles.</li>
            </ul>
            <div className="flex gap-3 pt-2">
              <a
                href={`mailto:${datos.correo}`}
                className="px-4 py-2 rounded-2xl bg-calanda-red text-white no-underline"
              >
                Enviar a {datos.correo}
              </a>
              <a
                href={`tel:${datos.telefono}`}
                className="px-4 py-2 rounded-2xl bg-calanda-dark text-white no-underline"
              >
                Llamar
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <CopyButton
            text={`${datos.razon} | NIT ${datos.nit} | ${datos.direccion} | ${datos.correo} | ${datos.telefono}`}
            className="px-4 py-2 rounded-xl border"
          >
            Copiar todos los datos
          </CopyButton>
        </div>
      </section>
    </div>
  );
}

function Fila({
  label,
  value,
  isEmail,
  isPhone,
}: {
  label: string;
  value: string;
  isEmail?: boolean;
  isPhone?: boolean;
}) {
  const rendered =
    isEmail ? (
      <a href={`mailto:${value}`} className="underline">
        {value}
      </a>
    ) : isPhone ? (
      <a href={`tel:${value}`} className="underline">
        {value}
      </a>
    ) : (
      <div className="font-medium">{value}</div>
    );

  return (
    <div className="flex items-center justify-between gap-4">
      <div>
        <div className="text-sm text-slate-500">{label}</div>
        {rendered}
      </div>
      <CopyButton text={value} className="px-3 py-1 rounded-lg border text-sm">
        Copiar
      </CopyButton>
    </div>
  );
}
