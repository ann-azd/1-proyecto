import NavBar from "components/navigation/NavBar";
import Footer from "components/navigation/footer.jsx";
import Layout from "hocs/layouts/Layout";
import Header from "components/home/header"
import Incentives from "components/home/Incentives";
import Materiales from "components/home/materiales";
import { useEffect } from "react";

function Home() {
   useEffect(() => {
     window.scrollTo(0, 0);
   }, []);
  return (
    <Layout>
      <NavBar />
      <div className="data-scroll-section pt-28 ">
        <Header></Header>
        <Incentives/>
        <Materiales></Materiales>
      </div>
      <Footer />
    </Layout>
  );
}
export default Home;
