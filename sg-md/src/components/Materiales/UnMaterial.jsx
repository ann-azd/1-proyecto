function UnMaterial({ data, index, id }) {
  return (
    <div
      onMouseEnter={() => {
        const tag = document.getElementById(index);
        tag.classList.add("text-pink-600");
        const imag = document.getElementById(id);
        imag.classList.add("scale-110");
      }}
      onMouseLeave={() => {
        const tag = document.getElementById(index);
        tag.classList.remove("text-pink-600");
        const imag = document.getElementById(id);
        imag.classList.remove("scale-110");
      }}
      className="flex flex-col overflow-hidden rounded-lg shadow-lg"
    >
      <div className="flex-shrink-0">
        <img
          id={id}
          className="h-64 w-full object-cover"
          // src={require(`../../assets/${data.imageUrl}.png`)}
          src={`http://127.0.0.1:8000${data.urlimage}`}
          alt="Hola"
        />
      </div>
      <div className="flex flex-1 flex-col justify-between bg-white p-6">
        <div className="flex-1">
          <p className="text-sm font-bold text-indigo-600">{data.categoria}</p>
          <div className="mt-2">
            <p
              id={index}
              className="text-xl font-semibold text-gray-900 transition duration-400 ease-in-out "
            >
              {data.titulo}
            </p>
            <p className="mt-1 text-base text-gray-500">{data.description}</p>
          </div>
        </div>
        <div className="mt-1 flex items-center">
          <div className="flex-shrink-0">
            <div>
              <p className="sr-only">{data.autor}</p>
              <img
                className="h-10 w-10 rounded-full transition duration-500 ease-in-out "
                // src={require(`../../assets/${data.author.imageUrl}.png`)}
                src={`http://127.0.0.1:8000${data.autor_image}`}
                alt=""
              />
            </div>
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">
              <span className="hover:text-blue-500 ">{data.autor}</span>
            </p>
            <div className="flex space-x-1 text-sm text-gray-600"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default UnMaterial;
