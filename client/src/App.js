import { Home, Detail, Form, LandingPage } from "./views/index"
import { Route, Routes, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import axios from "axios";
axios.defaults.baseURL = 'https://pi-pokemon-production-799f.up.railway.app/';


function App() {
  const { pathname } = useLocation();

  return (
    <>
      {pathname !== "/" && <NavBar />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/Forms" element={<Form />} />
      </Routes>

    </>
  );
}

export default App;

