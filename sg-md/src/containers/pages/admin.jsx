
import Footer from "components/navigation/footer.jsx";
import Layout from "hocs/layouts/Layout";
import ListaUsuarios from "components/componentesAdmin/listaMateriales";
import CreateNuevoMaterial from "components/componentesAdmin/CreateNuevoMaterial.tsx";
import { useEffect } from "react";
import NavBar from "components/navigation/NavBar";

function Admin() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <div className="pt-28">
        <NavBar />
        <ListaUsuarios />
        <CreateNuevoMaterial />
      </div>
    </Layout>
  );
}
export default Admin;
