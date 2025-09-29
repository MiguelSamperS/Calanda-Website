import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Facturación | CALANDA",
  description: "Información de facturación de CALANDA.",
  robots: { index: false, follow: false }, // ❌ No indexar
};

export default function FacturacionPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="container mx-auto max-w-3xl px-4 py-10 print:py-0">
        {/* Encabezado */}
        <header className="mb-8 print:mb-4">
          <img src="/logo-horizontal.png" alt="CALANDA" className="h-16 w-auto mb-4" />
          <h1 className="text-3xl font-semibold">Información de facturación</h1>
          <p className="text-slate-600">
            Datos para emisión de facturas electrónicas y pagos.
          </p>
        </header>

        {/* Datos de facturación */}
        <div className="space-y-6">
          <section className="card p-6 print:shadow-none">
            <h2 className="text-xl font-semibold mb-3">Datos fiscales</h2>
            <ul className="space-y-1">
              <li><strong>Razón social:</strong> CALANDA S.A.S.</li>
              <li><strong>NIT:</strong> 900.000.000-1</li>
              <li><strong>Régimen:</strong> Responsable de IVA</li>
              <li><strong>Dirección:</strong> Calle 00 # 00-00, Bogotá D.C., Colombia</li>
            </ul>
          </section>

          <section className="card p-6 print:shadow-none">
            <h2 className="text-xl font-semibold mb-3">Contacto de facturación</h2>
            <ul className="space-y-1">
              <li><strong>Correo:</strong> facturacion@calanda.com.co</li>
              <li><strong>Teléfono:</strong> +57 300 000 0000</li>
            </ul>
          </section>

          <section className="card p-6 print:shadow-none">
            <h2 className="text-xl font-semibold mb-3">Pagos</h2>
            <ul className="space-y-1">
              <li><strong>Banco:</strong> Bancolombia</li>
              <li><strong>Tipo de cuenta:</strong> Ahorros</li>
              <li><strong>Número de cuenta:</strong> 00000000000</li>
              <li><strong>Beneficiario:</strong> CALANDA S.A.S.</li>
              <li><strong>Referencia de pago:</strong> Número de factura</li>
            </ul>
          </section>

          <section className="card p-6 print:shadow-none">
            <h2 className="text-xl font-semibold mb-3">Documentos</h2>
            <ul className="list-disc pl-6">
              <li><a className="underline" href="/docs/RUT.pdf" target="_blank">RUT (PDF)</a></li>
              <li><a className="underline" href="/docs/camara_comercio.pdf" target="_blank">Certificado cámara de comercio (PDF)</a></li>
            </ul>
            <p className="text-sm text-slate-500 mt-2">
              (Coloca los PDF en <code>/public/docs/</code> con esos nombres).
            </p>
          </section>
        </div>

        {/* Botón imprimir (oculto en impresión) */}
        <div className="mt-8 print:hidden">
          <button
            onClick={() => window.print()}
            className="px-4 py-2 rounded-xl bg-calanda-red text-white"
          >
            Imprimir
          </button>
        </div>
      </section>
    </main>
  );
}
