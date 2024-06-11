import NavBar from "components/autenticar/NavBar";
import Footer from "components/navigation/footer.jsx";
import Layout from "hocs/layouts/Layout";
import Header from "components/autenticar/header";
import Incentives from "components/home/Incentives";
import Materiales from "components/home/materiales";
import { useEffect } from "react";
import Promo from "components/autenticar/promo";
import { Toaster } from "react-hot-toast";

function Autenticar() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <NavBar />
      <div className="xl:pt-14 lg:pt-24 md:pt-24 sm:pt-24 pt-32">
        <Header></Header>
        {/* <Promo></Promo> */}
        <Toaster position="bottom-center" reverseOrder={false} />
      </div>
      <Footer />
    </Layout>
  );
}
export default Autenticar;
