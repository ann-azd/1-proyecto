import NavBar from "components/componentesSC/NavBar";
import Footer from "components/navigation/footer.jsx";
import Layout from "hocs/layouts/Layout";
import Header from "components/componentesVD/homeVD/header";
import Incentives from "components/home/Incentives";
import Materiales from "components/home/materiales";
import { useEffect } from "react";
import SeccionesEstu from 'components/componentesSC/estudiantesSC/SeccionesEstu'

function Inventario() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <NavBar />
      <div className="data-scroll-section pt-28 ">
        <SeccionesEstu />
      </div>
      <Footer />
    </Layout>
  );
}
export default Inventario;
