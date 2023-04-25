import Cards from "../../components/Cards/Cards";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPokemons, getTypes } from "../../redux/actions";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons(), getTypes());
  }, [dispatch]);

  return (
    <>
      <div>
        <Cards />
      </div>
    </>
  );
};

export default Home;
