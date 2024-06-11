import { connect } from "react-redux";
import logoM from "assets/logoB2.png";
import logoL from "assets/loading.gif";
// import { ImExit } from "react-icons/im";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import { BeatLoader } from "react-spinners";
import { Popover, Transition, Menu } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks/store";
import { useActions } from "../../hooks/usersActions";

const solutions = [
  {
    name: "Inicio",
    description: "Measure actions your users take",
    href: "/vd",
    icon: IconOne,
  },
  {
    name: "Materiales",
    description: "Measure actions your users take",
    href: "/vd/materiales",
    icon: IconTwo,
  },
  {
    name: "Noticias",
    description: "Create your own targeted content",
    href: "/noticias",
    icon: IconThree,
  },
  {
    name: "¿Quiénes somos?",
    description: "Keep track of your growth",
    href: "/somos",
    icon: IconCuatro,
  },
  {
    name: "Contáctanos",
    description: "Keep track of your growth",
    href: "/contacto",
    icon: IconCinco,
  },
  {
    name: "Admin",
    description: "Keep track of your growth",
    href: "/admin",
    icon: IconSeis,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function NavBar() {
  const dispatch = useAppDispatch();
  // const useSelector = useAppSelector();
  const { logout, login } = useActions();

  const userLogin = useAppSelector((state) => state.usuarios);
  const { error, loading, userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  const [louding, setLouding] = useState(true);
  const [open, setOpen] = useState(false);

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (document.getElementById("navBB")) {
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        document.getElementById("navBB").classList.remove("shadow-2xl");
        document.getElementById("navBB").classList.add("shadow-md");
      } else {
        document.getElementById("navBB").classList.add("shadow-2xl");
        document.getElementById("navBB").classList.remove("shadow-md");
      }
    }
  }

  return (
    <nav
      id="navBB"
      className="w-full py-4  fixed top-0 z-40 transition duration-300 ease-in-out shadow-2xl bg-white "
    >
      <div className=" px-4 sm:px-6">
        <div className="-ml-4 -mt-2 hidden lg:flex flex-wrap items-center justify-between sm:flex-nowrap md:px-13  px-2">
          <Link to="/vd" className="ml-4 mt-1">
            <img
              src={logoM}
              alt=""
              width={280}
              height={60}
              className=" mt-0 min-w-2"
            />
          </Link>
          <div className="ml-4 mt-2 flex items-center flex-shrink-0">
            {" "}
            {/*Añadi flex items-center */}
            <NavLink
              to="/vd/materiales"
              className=" inline-flex mx-4 font-medium text-2xl  leading-6 text-gray-900  border-b-2 border-white hover:border-teal-700 transition duration-300 ease-in-out"
            >
              Inventario
            </NavLink>
            {/* <NavLink
              to="/vd/inventario"
              className=" inline-flex mx-4 font-medium text-2xl  leading-6 text-gray-900  border-b-2 border-white hover:border-teal-700 transition duration-300 ease-in-out"
            >
              Inventario
            </NavLink> */}
            <NavLink
              to="/d"
              className=" inline-flex mx-4 font-medium text-2xl leading-6 text-gray-900  border-b-2 border-white hover:border-teal-700 transition duration-300 ease-in-out"
            >
              Sección Estadística
            </NavLink>
            {/* logoutHandler */}
            {/*Aqui voy a prubar un menu para ver el perfil */}
            <Menu as="div" className="relative inline-flex   mx-4 leading-6">
              <div>
                <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-12 w-12 rounded-full"
                    src={`http://127.0.0.1:8000${userInfo.image}`}
                    alt=""
                  />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0  z-10 mt-11 w-48 origin-top-left rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        style={{ textDecoration: "none" }}
                        href="/miPerfil"
                        className={classNames(
                          active ? "bg-gray-100" : "",
                          "block px-4 py-2 text-md text-gray-700"
                        )}
                      >
                        Ver Perfil
                      </a>
                    )}
                  </Menu.Item>

                  {/* <Menu.Item>
                    {({ active }) => (
                      <a
                        onClick={logoutHandler}
                        style={{ textDecoration: "none" }}
                        className={classNames(
                          active ? "bg-gray-100" : "",
                          "block px-4 py-2 text-sm text-gray-700"
                        )}
                      >
                        Sign out
                      </a>
                    )}
                  </Menu.Item> */}
                </Menu.Items>
              </Transition>
            </Menu>
            <Link
              onClick={logoutHandler}
              to="/"
              className="inline-flex ml-10 mr-8 items-center rounded-md border border-transparent transition duration-300 ease-in-out bg-blue-800 px-5  py-2  font-medium text-white shadow-sm hover:bg-indigo-950 focus:outline-none focus:ring-1 text-lg focus:ring-indigo-500 focus:ring-offset-2"
            >
              Cerrar sesión
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 ml-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
                />
              </svg>
            </Link>
          </div>
        </div>
        <div className="-ml-4 -mt-2 lg:hidden flex flex-wrap items-center justify-between sm:flex-nowrap md:px-13   px-2">
          <Link to="/vd" className="ml-4 mt-1">
            <img
              src={logoM}
              alt="/vd"
              width={280}
              height={60}
              className="bg-black mt-0 min-w-2"
            />
          </Link>
          <div className="ml-4 mt-2 flex-shrink-0">
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={`
                ${open ? "" : ""} focus:ring-none focus:outline-none
                `}
                  >
                    {open ? (
                      <svg
                        // onClick={() => setOpen(false)}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-9 h-9"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18 18 6M6 6l12 12"
                        />
                      </svg>
                    ) : (
                      <svg
                        // onClick={() => setOpen(true)}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-9 h-9 focus:text-blue-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                      </svg>
                    )}
                  </Popover.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute -left-28 z-10 mt-6 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5">
                        <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                          {solutions.map((item) => (
                            <Link
                              key={item.name}
                              to={item.href}
                              className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50"
                            >
                              <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                                <item.icon aria-hidden="true" />
                              </div>
                              <div className="ml-4">
                                <p className="text-sm font-medium text-gray-900">
                                  {item.name}
                                </p>
                                <p className="text-sm text-gray-500">
                                  {item.description}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            {/* <button>
              {open ? (
                <svg
                  onClick={() => setOpen(false)}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-9 h-9"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  onClick={() => setOpen(true)}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-9 h-9 focus:text-blue-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button> */}
          </div>
        </div>
      </div>
    </nav>
  );
}

// const mapStateToProps = (state) => ({});

// export default connect(mapStateToProps, {})(NavBar);

function IconOne() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M24 11L35.2583 17.5V30.5L24 37L12.7417 30.5V17.5L24 11Z"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.7417 19.8094V28.1906L24 32.3812L31.2584 28.1906V19.8094L24 15.6188L16.7417 19.8094Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.7417 22.1196V25.882L24 27.7632L27.2584 25.882V22.1196L24 20.2384L20.7417 22.1196Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  );
}

function IconTwo() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M28.0413 20L23.9998 13L19.9585 20M32.0828 27.0001L36.1242 34H28.0415M19.9585 34H11.8755L15.9171 27"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.804 30H29.1963L24.0001 21L18.804 30Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  );
}

function IconThree() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <rect x="13" y="32" width="2" height="4" fill="#FDBA74" />
      <rect x="17" y="28" width="2" height="8" fill="#FDBA74" />
      <rect x="21" y="24" width="2" height="12" fill="#FDBA74" />
      <rect x="25" y="20" width="2" height="16" fill="#FDBA74" />
      <rect x="29" y="16" width="2" height="20" fill="#FB923C" />
      <rect x="33" y="12" width="2" height="24" fill="#FB923C" />
    </svg>
  );
}

function IconCuatro() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <rect x="13" y="32" width="2" height="4" fill="#FDBA74" />
      <rect x="17" y="28" width="2" height="8" fill="#FDBA74" />
      <rect x="21" y="24" width="2" height="12" fill="#FDBA74" />
      <rect x="25" y="20" width="2" height="16" fill="#FDBA74" />
      <rect x="29" y="16" width="2" height="20" fill="#FB923C" />
      <rect x="33" y="12" width="2" height="24" fill="#FB923C" />
    </svg>
  );
}
function IconCinco() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <rect x="13" y="32" width="2" height="4" fill="#FDBA74" />
      <rect x="17" y="28" width="2" height="8" fill="#FDBA74" />
      <rect x="21" y="24" width="2" height="12" fill="#FDBA74" />
      <rect x="25" y="20" width="2" height="16" fill="#FDBA74" />
      <rect x="29" y="16" width="2" height="20" fill="#FB923C" />
      <rect x="33" y="12" width="2" height="24" fill="#FB923C" />
    </svg>
  );
}
function IconSeis() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <rect x="13" y="32" width="2" height="4" fill="#FDBA74" />
      <rect x="17" y="28" width="2" height="8" fill="#FDBA74" />
      <rect x="21" y="24" width="2" height="12" fill="#FDBA74" />
      <rect x="25" y="20" width="2" height="16" fill="#FDBA74" />
      <rect x="29" y="16" width="2" height="20" fill="#FB923C" />
      <rect x="33" y="12" width="2" height="24" fill="#FB923C" />
    </svg>
  );
}

export default NavBar;
