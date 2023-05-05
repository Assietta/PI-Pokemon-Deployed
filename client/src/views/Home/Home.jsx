import style from './Home.module.css'
import Cards from "../../components/Cards/Cards";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPokemons, getTypes } from "../../redux/actions";
import { SearchBar, Filter, Sorter} from "../../components/components";


const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons(), getTypes());
  }, [dispatch]);

  return (
    <>
      <div>

      <div className={style.container}>
        <div>
          <SearchBar />
        </div>
        <div className={style.filter}>
          <Filter />
        </div>
        <div>
          <Sorter />
        </div>
      </div>

        <Cards />
      </div>
    </>
  );
};

export default Home;
