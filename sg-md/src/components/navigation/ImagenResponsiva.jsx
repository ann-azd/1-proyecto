import React, { useState, useEffect } from "react";

const ResponsiveImage = () => {
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia("(max-width:  768px)").matches) {
        setImageSrc("assets/logo.png");
      } else {
        setImageSrc("assets/logoB2.png");
      }
    };

    // Llamar a la función al montar el componente
    handleResize();

    // Agregar el event listener para el cambio de tamaño de la ventana
    window.addEventListener("resize", handleResize);

    // Limpiar el event listener al desmontar el componente
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <img src={imageSrc} alt="Imagen responsiva" />;
};

export default ResponsiveImage;
