import "./app.scss";
import HeaderNav from "./components/HeaderNav";
import MainRoutes from "./MainRouts";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <HeaderNav />

      <main className="page-main">
        <MainRoutes />
      </main>

      <Footer />
    </>
  );
};

export default App;
/*  */
