import './stylesheets/index.css';
import './stylesheets/reset.css';
import { Outlet } from "react-router-dom";
import Footer from "./components/partials/Footer";
import Header from "./components/partials/Header"

function App() {



  return (
    <>
      <Header />

      <Outlet />

      <Footer />
    </>
  )
}

export default App
