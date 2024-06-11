import NavBar from "components/navigation/NavBar";
import Footer from "components/navigation/footer.jsx";
import Layout from "hocs/layouts/Layout";
import { useEffect } from "react";

function Contacto() {
   useEffect(() => {
     window.scrollTo(0, 0);
   }, []);
  return (
    <Layout>
      <NavBar />
      <div className="pt-32">Contacto</div>

      <Footer />
    </Layout>
  );
}
export default Contacto;
