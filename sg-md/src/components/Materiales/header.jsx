import headerHome from "assets/header-materiales.png";

function Header() {
  return (
    <main>
      {/* <div className="relative px-6 lg:px-8 ">
        <div className="mx-auto max-w-full xl:mx-12 xl:pt-40 pb-12 lg:pt-30  xl:pb-55 lg:pb-40  pt-24  "> */}
      <div className="relative px-6 ">
        <div className="mx-auto max-w-full xl:mx-12   sm:pt-6 lg:pt-26 xl:pt-28  pb-12   xl:pb-60">
          <div>
            <div>
              <div
                className=""
                style={{
                  color: "rgba(2, 47, 198, 0.94)",
                  fontWeight: "bold",
                }}
              >
                <h1 className="text-2xl font-semibold tracking-tight pt-12  sm:text-3xl lg:text-6xl">
                  Materiales Docentes
                </h1>
                <p className="mt-9 lg:mt-11 text-md lg:max-w-2xl md:max-w-lg xl:max-w-3xl sm:max-w-md  max-w-68 leading-8 text-black sm:text-2xl lg:text-3xl ">
                  El reciclaje es el arte de convertir lo viejo en nuevo, lo
                  inútil en útil, lo desechado en deseado.
                </p>
              </div>
            </div>
            <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
              <svg
                className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
                viewBox="0 0 1155 678"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                  fillOpacity=".3"
                  d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                />
                <defs>
                  <linearGradient
                    id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                    x1="1155.49"
                    x2="-78.208"
                    y1=".177"
                    y2="474.645"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#9089FC" />
                    <stop offset={1} stopColor="#FF80B5" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="absolute inset-x-0 top-[calc(100%-18rem)] -z-10 transform-gpu overflow-hidden bg-white  lg:top-[calc(100%-30rem)] xl:top-[calc(100%-45rem)] md:top-[calc(100%-22rem)] sm:top-[calc(100%-22rem)]">
              <img
                src={headerHome}
                className="w-full h-full pt-2  object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
export default Header;
