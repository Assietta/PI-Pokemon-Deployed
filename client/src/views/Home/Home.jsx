import style from './Home.module.css'
import Cards from "../../components/Cards/Cards";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPokemons, getTypes } from "../../redux/actions";
import { SearchBar, Filter, Sorter, FilterDB} from "../../components/components";


const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getPokemons());
      await dispatch(getTypes());
    }
    fetchData();
  }, [dispatch]);
  

  return (
    <>
      <div>

      <div className={style.container}>
        <div>
          <SearchBar />
        </div>
        <div className={style.filter}>
          <FilterDB/>
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
