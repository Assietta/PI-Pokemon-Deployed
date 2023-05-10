import style from './Fondo.module.css'
import Landing from "./components/Landing.jsx";

const LandingPage = () => {
  return (
    <div className={style.landing}>
      <Landing></Landing>
    </div>
  );
};

export default LandingPage;
