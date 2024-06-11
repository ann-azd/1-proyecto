import NavBar from "components/componentesVD/NavBar";
import Footer from "components/navigation/footer.jsx";
import Layout from "hocs/layouts/Layout";
import Header from "components/componentesVD/homeVD/header";
import Incentives from "components/home/Incentives";
// import Materiales from "components/home/materiales";
import { useEffect } from "react";
import SeccionesInv from "components/componentesVD/materialVD/SeccionesInv";
import { Toaster } from "react-hot-toast";

function Materiales() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <NavBar />
      <div className="data-scroll-section pt-28 ">
        <SeccionesInv />
        <Toaster position="top-right" reverseOrder={false} />
      </div>
      <Footer />
    </Layout>
  );
}
export default Materiales;
