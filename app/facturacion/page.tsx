export default function FacturacionPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="max-w-lg w-full bg-white shadow-lg rounded-2xl p-8 border">
        <h1 className="text-2xl font-bold text-calanda-red mb-6 text-center">
          Información de Facturación
        </h1>
        <ul className="space-y-3 text-slate-700">
          <li>
            <strong>Razón Social:</strong> Calanda Consultores y Estrategia SAS
          </li>
          <li>
            <strong>NIT:</strong> 901.859.654-2
          </li>
          <li>
            <strong>Correo:</strong>{" "}
            <a href="mailto:gerencia@calanda.com.co" className="underline">
              gerencia@calanda.com.co
            </a>
          </li>
          <li>
            <strong>Dirección:</strong> Carrera 7 # 26 - 20, Bogotá D.C., Colombia
          </li>
          <li>
            <strong>Teléfono:</strong> 3107624469
          </li>
        </ul>
      </div>
    </div>
  );
}
