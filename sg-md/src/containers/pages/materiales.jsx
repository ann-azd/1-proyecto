import NavBar from "components/navigation/NavBar";
import Footer from "components/navigation/footer.jsx";
import Layout from "hocs/layouts/Layout";
import Header from "components/Materiales/header";
import MateList from "components/Materiales/MateList";
import { useEffect } from "react";


function Materiales() {
   useEffect(() => {
     window.scrollTo(0, 0);
   }, []);
  return (
    <Layout>
      <NavBar />
      <div className="pt-28">
        <Header/>
        <MateList/>
      </div>
      <Footer />
    </Layout>
  );
}
export default Materiales;
