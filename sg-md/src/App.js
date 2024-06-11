import Error404 from './containers/errors/error404';
import './App.css';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './containers/pages/home';
import { Provider } from 'react-redux';
import Materiales from 'containers/pages/materiales';
import Noticias from 'containers/pages/noticias';
import Somos from 'containers/pages/somos';
import Contacto from 'containers/pages/contacto';
import Admin from 'containers/pages/admin';
import Autenticar from 'containers/pages/Autenticar';
import PrivateRouteSC from 'components/autenticar/PrivateRouteSC';
import PrivateRouteVD from 'components/autenticar/PrivateRouteVD';
import HomeVd from 'containers/pages/pages_vd/home'
import HomeSc from 'containers/pages/pages_secretaria/home'
import EstudiantesSc from 'containers/pages/pages_secretaria/estudiantes'
import MaterialesVD from 'containers/pages/pages_vd/materiales'
import './index.css';

function App() {
  return (


    // <Provider>
    <BrowserRouter>
      <Routes>
        {/*Error */}

        <Route path='*' element={<Error404 />}></Route>
        <Route path='/materiales' element={<Materiales />}></Route>
        <Route path='/noticias' element={<Noticias />}></Route>
        <Route path='/somos' element={<Somos />}></Route>
        <Route path='/admin' element={<Admin />}></Route>
        <Route path='/contacto' element={<Contacto />}></Route>
        <Route path='/Autenticar' element={<Autenticar />}></Route>
        {/* <Route path='/secretaria/estudiantes' element={<EstudiantesSc />}></Route>
        <Route path='/secretaria' element={<HomeSc />}></Route> */}
        <Route element={< PrivateRouteSC requiredCategory="secretaria" />}>
          <Route path='/secretaria/estudiantes' element={<EstudiantesSc />}></Route>
          <Route path='/secretaria' element={<HomeSc />}></Route>
        </Route>
        <Route element={< PrivateRouteVD requiredCategory="vicedecano" />}>
          <Route path='/vd' element={<HomeVd />}></Route>
          <Route path='/vd/materiales' element={<MaterialesVD />}></Route>
        </Route>
        <Route path='/' element={<Home />}></Route>


      </Routes>
    </BrowserRouter>
    // </Provider>

  );
}

export default App;
