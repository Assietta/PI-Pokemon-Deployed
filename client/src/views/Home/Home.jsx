import style from './Home.module.css'
import Cards from "../../components/Cards/Cards";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemons, getTypes } from "../../redux/actions";
import { SearchBar, Filter, Sorter, FilterDB} from "../../components/components";


const Home = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getPokemons());
      await dispatch(getTypes());
      setLoading(false);
    }
    fetchData();
  }, [dispatch]);

  return (
    <>
      <div >
      <div className={style.container}>
        <div className={style.sorter}>
          <Sorter />
        </div>
        <div className={style.filter}>
          <div className={style.filterdb}>
            <FilterDB/>
          </div>
          <div className={style.filtertipos}>
            <Filter />
          </div>
        </div>
        <div className={style.search}>
          <SearchBar />
        </div>
      </div >
        {loading ? (
          <div className={style.loading}> 
            <img className={style.loadinggif} src="https://i.pinimg.com/originals/66/89/dc/6689dc331be27e66349ce9a4d15ddff3.gif" alt="" />
            <h1 className={style.textogif}>Cargando...!</h1>  
          </div>
            
        ) : (
      <div className={style.fondo}>
          <div className={style.acomodo}>
            <Cards />
          </div>
      </div>
      )}
      </div>
    </>
  );
};

export default Home;
