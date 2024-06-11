import NavBar from "components/navigation/NavBar";
import Footer from "components/navigation/footer.jsx";
import Layout from "hocs/layouts/Layout";
import Header from "components/noticias/header";
import ListaNoticias from "components/noticias/ListaNoticias"
import { useEffect } from "react";

function Noticias() {
   useEffect(() => {
     window.scrollTo(0, 0);
   }, []);
  return (
    <Layout>
      <NavBar />
      <div className="pt-28">
        <Header/>
        <ListaNoticias/>
      
      </div>
      <Footer />
    </Layout>
  );
}
export default Noticias;

