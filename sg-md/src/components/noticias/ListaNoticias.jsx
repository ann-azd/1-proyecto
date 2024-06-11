import UnaNoticia from "components/noticias/UnaNoticia";
import { v4 as uuidv4 } from "uuid";
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const posts = [
  {
    title: "Tabletas electrónicas",
    category: { name: "Tecnología", bandera: true },
    description: "Dispositivos portátiles con funciones de móvil y computadora",
    imageUrl: "not1",
    author: {
      name: "Vicedecano de Administración",
      imageUrl: "admin",
      id: "dfdfgdf",
    },
  },
  {
    title: "Teclados",
    category: { name: "Tecnología", bandera: true },
    description:
      "Teclado: escribe, navega, controla y personaliza tu ordenador fácilmente",
    imageUrl: "not1",
    author: {
      name: "Vicedecano de Administración",
      imageUrl: "admin",
      id: "dfdfgdfsdgdf",
    },
  },
  {
    title: "Memorias USB marca ADATA",
    href: "#",
    category: { name: "Tecnología", bandera: true },
    description:
      "Memoria USB: almacena, transfiere y protege tus datos fácilmente.",
    imageUrl: "not1",
    author: {
      name: "Vicedecano de Administración",
      imageUrl: "admin",
      id: "dfdfgdfdfdg",
    },
  },
  {
    title: "Calculadoras Científicas",

    category: { name: "Artículo básico", bandera: false },
    description: "Aparato que realiza operaciones matemáticas avanzadas.",
    imageUrl: "not1",
    author: {
      name: "Vicedecano de Administración",
      imageUrl: "admin",
      id: "dfdfghgjghdf",
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
      id: "dfdsssssfgdf",
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
      id: "dfdfhhhhgdf",
    },
  },
];


const posts2 = [
  {
    title: "Noticia 1",
    category: "",
    description: "Dispositivos portátiles con funciones de móvil y computadora",
    imageUrl: "not1",
    id: "sfsdfjadkasdk",
  },

  {
    title: "TNoticia 2",
    category: "",
    description: "Dispositivos portátiles con funciones de móvil y computadora",
    imageUrl: "not1",
    id: "sfsdfjadjsdfk",
  },

  {
    title: "Noticia 3",
    category: "",
    description: "Dispositivos portátiles con funciones de móvil y computadora",
    imageUrl: "not1",
    id: "aaasfsdfjadkasdk",
  },
  {
    title: "Noticia 4",
    category: "",
    description: "Dispositivos portátiles con funciones de móvil y computadora",
    imageUrl: "not1",
    id: "bbbsfsdfjadkasdk",
  },
  {
    title: "Noticia 5",
    category: "",
    description: "Dispositivos portátiles con funciones de móvil y computadora",
    imageUrl: "not1",
    id: "cccsfsdfjadkasdk",
  },
  {
    title: "Noticia 6",
    category: "",
    description: "Dispositivos portátiles con funciones de móvil y computadora",
    imageUrl: "not1",
    id: "hhhsfsdfjadkasdk",
  },
];

function ListaNoticias() {
// const breakPoints = [
//   // { width: 1, itemsToShow: 1, itemsToScroll: 1 },
//   { width: 550, itemsToShow: 1, itemsToScroll: 1 },
//   { width: 960, itemsToShow: 2, itemsToScroll: 1 },
//   { width: 1280, itemsToShow: 3, itemsToScroll: 2 },
//   // { width: 1450, itemsToShow: 5 },
//   // { width: 1750, itemsToShow: 6 },
// ];

var settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};




  return (
    <div className="relative bg-gradient-to-t from-indigo-300 to-transparent px-4 pt-11 sm:pt-28 md:pt-52 xl:pt-60 pb-20 sm:px-6 lg:px-8 lg:pt-18  lg:pb-28">
      <div className="absolute inset-0">
        <div className="h-1/3  sm:h-2/3 " />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Noticias Recientes
          </h2>
          <p className="mx-auto mt-10  max-w-2xl text-xl text-gray-500 sm:mt-4">
            Sobre el acontecer en nuestra universidad las noticas más relevantes
          </p>
        </div>

        {/* mx-auto mt-12 grid max-w-lg gap-8 lg:max-w-none sm:grid-cols-1 lg:grid-cols-4" */}

        <div className="relative mx-auto mt-14 max-w-full">
          {/* <Carousel
            itemsToScroll={3}
            itemsToShow={3}
            breakPoints={breakPoints}
            pagination={false}
            itemPadding={[0, 48]}
          > */}
          <div className="slider-container">
            <Slider {...settings}>
              {posts2.map((post, index) => (
                <UnaNoticia
                  key={uuidv4()}
                  id={uuidv4()}
                  index={index}
                  data={post}
                />
              ))}
            </Slider>
          </div>
          {/* </Carousel> */}
        </div>
      </div>
    </div>
  );
}
export default ListaNoticias;
/*
import Carousel from "@itseasy21/react-elastic-carousel";


const breakPoints = [
   { width: 1, itemsToShow: 1, itemsToScroll: 1 },
   { width: 1280, itemsToShow: 2, itemsToScroll: 2 },
   { width: 1750, itemsToShow: 3, itemsToScroll: 2 },
   // { width: 1450, itemsToShow: 5 },
   // { width: 1750, itemsToShow: 6 },
 ];

   <Carousel
          itemsToScroll={3}
          itemsToShow={3}
          breakPoints={breakPoints}
          pagination={false}
          itemPadding={[0, 48]}
        >
envolviendo a Div con mapa dentro



        </Carousel> 

        anadir en el index.css

        para la flecha

        .rec.rec-arrow {
  background-color: #0B1014;
  color: #eeeeee;
  }
  
  cuando estamos encima de la flecha

  .rec.rec-arrow:hover {
  background-color: #393b3f;
  }
  
  cuando esta desabilitada

  .rec.rec-arrow:disabled {
    visibility: hidden;
    }
    
    cuando esta en focus
    
  .rec-carousel-item:focus {
  outline: none;
  box-shadow: inset 0 0 1px 1px lightgrey;
  background-color: #eaeaea;
  }




*/