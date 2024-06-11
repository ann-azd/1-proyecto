import NavBar from "components/navigation/NavBar";
import Footer from "components/navigation/footer.jsx";
import Layout from "hocs/layouts/Layout";
import { useEffect } from "react";
import Qsomos from "components/somos/qsomos";

function Somos() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <NavBar />
      <div className="pt-24">
        <Qsomos />
      </div>

      <Footer />
    </Layout>
  );
}
export default Somos;
