import { useContext, useEffect, useState } from "react";
import { AnswerProducts, ProductInt } from "../../interfaces";
import {bringCharacters} from "../../services/api-calls";
import "./Home.css";
import CCard from "../../common/CCard/CCard";
import { useNavigate } from "react-router-dom";
import { myContext } from "../../app/ProviderContextComponent";


function Home() {
  const [characters, setCharacters] = useState<ProductInt[]>([]);
  const [flag, setFlag] = useState<boolean>(false);
  const [msgError, setMsgError] = useState<string>("");
  const navigate = useNavigate()
  const {setUser, searchCriteria} = useContext(myContext)


  useEffect(() => {
    if (characters?.length === 0) {
      const fetchDataRickMorty = async (): Promise<any> => {
        const fetched: AnswerProducts = await bringCharacters();

        if (fetched.success) {
          setFlag(true);
          setCharacters(fetched.data);
          console.log(searchCriteria)
        } else {
          setMsgError(fetched.message);
        }
      };

      if (!flag) {
        fetchDataRickMorty();
      }
    }
  }, [characters]);


  const filterProducts = (products: ProductInt[], searchCriteria: string): ProductInt[] => {
    if (!searchCriteria) {
      return products;
    }
    return products.filter(product =>
      product.title.toLowerCase().includes(searchCriteria.toLowerCase())
    );
  };

  useEffect(() => {
    const result = filterProducts(characters, searchCriteria);
    setCharacters(result);
  }, [characters, searchCriteria]);


  const selectProduct = (product : ProductInt) =>{
    setUser({
      selected:product

    })
    navigate("/product")

  }


  return (
    <div className="home-design bg-secondary">
      {characters?.length > 0 ? (
        <div className="container">
            <div className="row">
          {characters.map((character) => {
            return <CCard key={character.id}
            product={character}
            selectProduct={() => selectProduct(character)}
            />
          })}
          </div>
        </div>
      ) : (
        <div>{msgError}</div>
      )}
    </div>
  );
}

export default Home;