

const posts = [
  {
    title: "Tabletas electrónicas",
    category: { name: "Tecnología", bandera: true },
    description: "Dispositivos portátiles con funciones de móvil y computadora",
    imageUrl: "mn1",
    author: {
      name: "Vicedecano de Administración",
      imageUrl: "admin",
    },
  },
  {
    title: "Teclados",
    category: { name: "Tecnología", bandera: true },
    description:
      "Teclado: escribe, navega, controla y personaliza tu ordenador fácilmente",
    imageUrl: "mn3",
    author: {
      name: "Vicedecano de Administración",
      imageUrl: "admin",
    },
  },
  {
    title: "Memorias USB marca ADATA",
    href: "#",
    category: { name: "Tecnología", bandera: true },
    description:
      "Memoria USB: almacena, transfiere y protege tus datos fácilmente.",
    imageUrl: "mn4",
    author: {
      name: "Vicedecano de Administración",
      imageUrl: "admin",
    },
  },
  {
    title: "Calculadoras Científicas",

    category: { name: "Artículo básico", bandera: false },
    description: "Aparato que realiza operaciones matemáticas avanzadas.",
    imageUrl: "mn2",
    author: {
      name: "Vicedecano de Administración",
      imageUrl: "admin",
    },
  },
  {
    title: "Lápices",
    href: "#",
    category: { name: "Artículo básico", bandera: false },
    description:
      "Lápices: escribe, dibuja, borra y crea con facilidad y precisión.",
    imageUrl: "mn5",
    author: {
      name: "Vicedecano de Administración",
      imageUrl: "admin",
    },
  },
  {
    title: "Agendas 2024",
    href: "#",
    category: { name: "Artículo básico", bandera: false },
    description:
      "Agenda: planifica, organiza, recuerda y gestiona tu tiempo eficientemente.",
    imageUrl: "mn6",
    author: {
      name: "Vicedecano de Administración",
      imageUrl: "admin",
    },
  },
];

export default function Materiales() {
  return (
    <div className="relative bg-gradient-to-t from-indigo-300 to-transparent px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-18  lg:pb-28">
      <div className="absolute inset-0">
        <div className="h-1/3  sm:h-2/3 " />
      </div>
      <div className="relative mx-auto max-w-7xl ">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Próximamente disponible para solicitud
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
            A continuación le proporcionamos información sobre la disponibilidad
            futura de materiales docentes.
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none md:max-w-none md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <div
              key={post.title}
              className="flex flex-col overflow-hidden rounded-lg shadow-lg"
            >
              <div className="flex-shrink-0">
                <img
                  className="h-64 w-full object-cover"
                  src={require(`../../assets/${post.imageUrl}.png`)}
                  alt=""
                />{" "}
                {console.log(post.imageUrl)}
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <p className="text-sm font-bold text-indigo-600">
                    {post.category.name}
                  </p>
                  <div className="mt-2">
                    <p className="text-xl font-semibold text-gray-900">
                      {post.title}
                    </p>
                    <p className="mt-1 text-base text-gray-500">
                      {post.description}
                    </p>
                  </div>
                </div>
                <div className="mt-1 flex items-center">
                  <div className="flex-shrink-0">
                    <div>
                      <p className="sr-only">{post.author.name}</p>
                      <img
                        className="h-10 w-10 rounded-full"
                        src={require(`../../assets/${post.author.imageUrl}.png`)}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      <span className="hover:text-blue-500 ">
                        {post.author.name}
                      </span>
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
