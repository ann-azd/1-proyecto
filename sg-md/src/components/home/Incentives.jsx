

const incentives = [
  {
    name: "Mejora tu organización",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-shipping-simple.svg",
    description:
      "Con blogs, agendas y cuadernos podrá retener los conocimientos adquiridos al usarlos como materiales de consulta personal",
  },
  {
    name: "Usa la tecnología",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg",
    description:
      "Facilita tu vida con el uso de USB, calculadoras, laptps y mucho más, al alcance de tu mano",
  },
  {
    name: "Recicla",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-exchange-simple.svg",
    description:
      "Si ya no deseas usar más cierto altículo, entregalo en nuestras oficinas, nos encargaremos de darle un mejor uso",
  },
];

export default function Incentives() {
  return (
    <div className="bg-white">
      <div className="mx-auto lg:mx-12 max-w-7xl py-20 sm:px-2 sm:py-16 lg:px-2">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900">
              Obtenga todo lo que necesita para mejorar sus estudios desde nuestro departamento proveedor de recursos
            </h2>
            <p className="mt-4 text-gray-500">
              
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-3">
            {incentives.map((incentive) => (
              <div key={incentive.name} className="sm:flex lg:block">
                <div className="sm:flex-shrink-0">
                  <img className="h-16 w-16" src={incentive.imageSrc} alt="" />
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                  <h3 className="text-sm font-medium text-gray-900">
                    {incentive.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    {incentive.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

