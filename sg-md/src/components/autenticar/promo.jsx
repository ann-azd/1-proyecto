

export default function Promo() {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div className="relative mx-auto max-w-full px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg ">
            <div
              className="w-auto px-6 py-8 max-w-xl min-w-sm mr-5 rounded-xl my-5  border-slate-800 border-2 
shadow-md shadow-neutral-500  bg-slate-100 bg-opacity-50
"
            >
              <h2 className="mr-auto ml-auto text-center text-xl">
                Iniciar Sesión
              </h2>
              <form className="w-full max-w-lg ">
                <label className="block">
                  <span className="text-gray-900">Nombre </span>
                  <input
                    type="text"
                    className="mt-1 block w-full bg-zinc-200 rounded-lg focus:bg-neutral-50 border-2"
                    placeholder="Juan Gómez"
                    name="title"
                  />
                </label>
                <label className="block">
                  <span className="text-gray-900">Contraseña </span>
                  <input
                    type="text"
                    className="mt-1 block w-full bg-zinc-200 rounded-lg focus:bg-neutral-50 border-2 "
                    placeholder="*******************"
                    name="title"
                  />
                </label>
                <label className="block">
                  <span className="text-gray-900">Categoría</span>
                  <select
                    className="block w-full mt-1 bg-zinc-200 rounded-lg focus:bg-neutral-50 border-2
          "
                    name="name"
                  >
                    <option>Estudiante</option>
                    <option>Secretaria</option>
                    <option>Vicedecano</option>
                  </select>
                </label>

                <button
                  type="submit"
                  className=" text-slate-100 w-32 h-10  mt-3 mr-auto ml-auto block rounded-lg hover:bg-cyan-600 transition duration-200 ase-in-out bg-blue-500 shadow-lg shadow-blue-500/50"
                >
                  Iniciar Sesión
                </button>
              </form>
            </div>
          </div>
          <div>
            <div className="mt-10 md:w-8 log:max-w-full" >
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <img
                          src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg ">
                        <img
                          src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
