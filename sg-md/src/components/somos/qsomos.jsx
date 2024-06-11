import React from "react";
import { useEffect } from "react";

const QuienesSomos = () => {
  useEffect(() => {
    const accordionInputs = document.querySelectorAll(
      'input[name="my-accordion-3"]'
    );

    accordionInputs.forEach((input) => {
      input.addEventListener("change", (event) => {
        const accordionItems = document.querySelectorAll(".collapse");
        accordionItems.forEach((item) => {
          item.classList.remove("bg-blue-400");
          item.classList.add("bg-blue-100");
          const label = item.querySelector("label");
          if (label) {
            label.classList.remove("font-bold");
            label.classList.add("font-medium");
          }
        });

        if (event.target.checked) {
          // Cambiar el color de fondo a azul oscuro
          const expandedItem = event.target.closest(".collapse");
          expandedItem.classList.remove("bg-blue-100");
          expandedItem.classList.add("bg-blue-400");
          // Seleccionar el label asociado y aplicarle el estilo de negrita
          const expandedLabel = expandedItem.querySelector("label");
          if (expandedLabel) {
            expandedLabel.classList.remove("font-medium");
            expandedLabel.classList.add("font-bold");
          }
        }
      });
    });
  }, []);

  // Datos de prueba para el equipo
  const equipo = [
    {
      nombre: "Ana Nelia Dominguez",
      cargo: "CEO",
      foto: "https://via.placeholder.com/150",
    },
    {
      nombre: "Darien Santana",
      cargo: "Diseñador principal",
      foto: "https://via.placeholder.com/150",
    },
    {
      nombre: "Edrien Fernández",
      cargo: "Programador Backend",
      foto: "https://via.placeholder.com/150",
    },
    {
      nombre: "Alain Vazquez",
      cargo: "Diseñador de BD",
      foto: "https://via.placeholder.com/150",
    },
    // Agrega más miembros del equipo aquí
  ];

  return (
    <div className="container-fluid   mx-auto px-4 py-8 bg-gradient-to-t from-blue-300 to-transparent">
      {/* Barra de Navegación */}

      {/* Área de Héroe */}
      <div className="hero  flex flex-col  items-center justify-center text-center mt-16">
        <h1 className="text-5xl font-bold">
          Descubre más sobre nuestro equipo
        </h1>
        <p className="text-xl mt-4">
          Unidos somos fuertes, divididos caemos. La unidad es poder.
        </p>
      </div>

      {/* Sección de Misión y Visión */}
      <section className="mt-16 mx-10">
        <h2 className="text-2xl font-semibold mb-4">Misión y Visión</h2>

        <div className="flex w-full">
          <div className="grid  flex-grow card bg-blue-200 rounded-box place-items-center py-7 px-5 text-justify ">
            <p>
              <span className="font-bold">Misión:</span> Formar integralmente a
              los estudiantes, ofreciendo educación de calidad a nivel
              licenciatura y posgrado, y apoyar la docencia a través de la
              provisión de materiales educativos relevantes y actualizados.
            </p>
          </div>
          <div className="divider divider-horizontal">AND</div>
          <div className="grid  flex-grow card bg-blue-200 rounded-box place-items-center py-7 px-5 text-justify">
            <p>
              <span className="font-bold">Visión:</span> Ser reconocidos como un
              departamento esencial en el proceso educativo, contribuyendo
              significativamente al éxito académico de los estudiantes y al
              avance del conocimiento en sus respectivas disciplinas.
            </p>
          </div>
        </div>
      </section>

      {/* Sección de Historia */}
      <section className="mt-16 mx-7 grid sm:grid-cols-2 md:grid-cols-3">
        <div className="sm:col-span-1 md:col-span-2 overflow-hidden">
          <h2 className="text-2xl font-semibold  mb-4">Historia</h2>
          <p className="text-justify text-md overflow-hidden">
            En el año 2005, en una universidad de renombre, se creó un pequeño
            departamento con una gran misión: facilitar el acceso a materiales
            docentes de calidad. Con solo un puñado de miembros dedicados y una
            modesta colección de libros y artículos, el Departamento de Recursos
            Educativos comenzó su viaje. Con el paso de los años, el
            departamento se convirtió en el corazón académico de la universidad.
            Su personal, conocido por su pasión y dedicación, trabajó
            incansablemente para ampliar la biblioteca de recursos, integrando
            tecnologías digitales y colaborando con profesores para desarrollar
            materiales didácticos innovadores. A medida que la tecnología
            avanzaba, el departamento también evolucionó. En 2010, lanzaron una
            plataforma en línea que permitía a los estudiantes acceder a los
            recursos desde cualquier lugar. Este avance fue crucial para apoyar
            a los estudiantes durante los desafíos del aprendizaje a distancia.
            Hoy, el Departamento de Recursos Educativos es un pilar fundamental
            en la educación universitaria, con una rica biblioteca digital y un
            equipo que sigue comprometido con la excelencia educativa y el apoyo
            incondicional al cuerpo estudiantil. Su historia es un testimonio de
            cómo la visión y la unidad pueden transformar una pequeña iniciativa
            en un legado duradero.
          </p>
        </div>
        <div className=" pt-7  overflow-scroll  ">
          <ul className="timeline content-end sm:timeline-vertical timeline-horizontal ">
            <li>
              <div className="timeline-start">2002</div>
              <div className="timeline-middle ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end timeline-box">
                Creación de la UCI
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-start">2005</div>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end timeline-box">Creación Dpt SGMD</div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-start">2010</div>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end timeline-box">Creación SG-MD</div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-start">2018</div>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end timeline-box">
                Actualización importante
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-start">2024</div>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end timeline-box">Actualidad</div>
            </li>
          </ul>
        </div>
      </section>

      {/* Sección de Equipo */}
      <section className="mt-16 mx-10">
        <h2 className="text-3xl font-semibold mb-4 text-center">
          Nuestro Equipo
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {equipo.map((miembro, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={miembro.foto}
                alt={miembro.nombre}
                className="w-32 h-32 rounded-full mb-2"
              />
              <h3 className="text-xl font-semibold">{miembro.nombre}</h3>
              <p className="text-sm">{miembro.cargo}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sección de Servicios */}
      <section className="mt-16 lg:mx-40 ">
        <h2 className="text-3xl font-semibold mb-4 text-center">
          Nuestros Servicios
        </h2>

        <div className="collapse collapse-plus bg-blue-100 mb-2">
          <input
            type="radio"
            name="my-accordion-3"
            id="accordion-1"
            defaultChecked
          />
          <label
            htmlFor="accordion-1"
            className="collapse-title text-xl font-medium"
          >
            Acceso a Recursos Educativos
          </label>
          <div className="collapse-content">
            <p>
              Proporcionar una amplia gama de materiales de estudio, incluyendo
              libros, artículos, y acceso a bases de datos académicas.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-blue-100 mb-2">
          <input type="radio" name="my-accordion-3" id="accordion-2" />
          <label
            htmlFor="accordion-2"
            className="collapse-title text-xl font-medium"
          >
            Soporte Tecnológico
          </label>
          <div className="collapse-content">
            <p>
              Ofrecer asistencia para plataformas de aprendizaje en línea y
              herramientas digitales.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-blue-100 mb-2">
          <input type="radio" name="my-accordion-3" id="accordion-3" />
          <label
            htmlFor="accordion-3"
            className="collapse-title text-xl font-medium"
          >
            Desarrollo de Materiales Didácticos
          </label>
          <div className="collapse-content">
            <p>
              Colaborar con el profesorado para crear y actualizar materiales de
              enseñanza personalizados.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-blue-100 mb-2">
          <input type="radio" name="my-accordion-3" id="accordion-4" />
          <label
            htmlFor="accordion-4"
            className="collapse-title text-xl font-medium"
          >
            Talleres y Formación
          </label>
          <div className="collapse-content">
            <p>
              Organizar sesiones de capacitación para estudiantes y profesores
              sobre cómo utilizar eficazmente los recursos educativos.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-blue-100 mb-2">
          <input type="radio" name="my-accordion-3" id="accordion-5" />
          <label
            htmlFor="accordion-5"
            className="collapse-title text-xl font-medium"
          >
            Servicios de Biblioteca
          </label>
          <div className="collapse-content">
            <p>Facilitar el préstamo de libros y otros materiales impresos.</p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-blue-100 mb-2">
          <input type="radio" name="my-accordion-3" id="accordion-6" />
          <label
            htmlFor="accordion-6"
            className="collapse-title text-xl font-medium"
          >
            Consultoría Académica
          </label>
          <div className="collapse-content">
            <p>
              Brindar asesoramiento sobre la selección de materiales y
              estrategias de estudio.
            </p>
          </div>
        </div>

        {/* <button class="btn w-64 rounded-full">Button</button>
        <button class="btn btn-primary">Button</button>
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        {/* <button
          className="btn"
          onClick={() => document.getElementById("my_modal_2").showModal()}
        >
          open modal
        </button>
        <dialog id="my_modal_2" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">Press ESC key or click outside to close</p>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>  */}
      </section>

      {/* Sección de Contacto */}
      <section className="mt-16 mx-10">
        <h2 className="text-2xl font-semibold mb-4">Contacto</h2>
        <p>
          Para más información, contáctanos a través de nuestro formulario de
          contacto o visita nuestras redes sociales.
        </p>
      </section>
    </div>
  );
};

export default QuienesSomos;
