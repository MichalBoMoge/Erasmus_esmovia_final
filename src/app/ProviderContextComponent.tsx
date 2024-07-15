import React, { useState, useEffect} from "react";
import { createContext } from "react";
import { ProductInt } from "../interfaces";



export interface User{
    name:string,
    token:string,
    selected:ProductInt
}


type SetUserType = (user: Partial<User>) => void;
type AddProductType = (product: ProductInt) => void;
type RemoveProductType = (productId: number) => void;
type LogoutType = () => void;
type SetSearchCriteriaType = (criteria: string) => void;


export interface ContextValue {
  user:User,
  products: ProductInt[],
  searchCriteria: string,
  setSearchCriteria: SetSearchCriteriaType;
  setUser: SetUserType;
  addProduct:AddProductType,
  removeProduct:RemoveProductType,
  logout: LogoutType
}

export const myContext = createContext<ContextValue | null>(null);

interface MyContextProviderProps{
    children:React.ReactNode
}

export const initialProd: ProductInt = {
  id: 0,
  title:"",
  price:0,
  description:"",
  category:"",
  image:"",
  rating: {
    rate:0,
    count:0
  }
}

const initialUser: User = {

    name: "",
    token: "",
    selected:initialProd
      
  
};

const initialProducts: ProductInt[] = [];


export const MyProvider: React.FC<MyContextProviderProps> = ({ children }) => {
  const [user, setUserState] = useState<User>(initialUser);
  const [products, setProducts] = useState<ProductInt[]>(initialProducts)
  const [searchCriteria,setSearchCriteria] = useState<string>("")
  const setUser: SetUserType = (newUser) => {
  setUserState((prevUser) => ({
    ...prevUser,
    ...newUser,
  }));


};

const addProduct: AddProductType = (product) => {
  setProducts((prevProducts) => [...prevProducts, product]);
};

const removeProduct: RemoveProductType = (productId) => {
  setProducts((prevProducts) => prevProducts.filter(product => product.id !== productId));
};

const logout: LogoutType = () => {
  setUserState(initialUser);
  setProducts(initialProducts)
};

useEffect(() => {
  if (searchCriteria === '') {
    setProducts(initialProducts);
  } else {
    setProducts((prevProducts) =>
      prevProducts.filter(product =>
        product.title.toLowerCase().includes(searchCriteria.toLowerCase())
      )
    );
  }
}, [searchCriteria]);

const contextValue: ContextValue = { user, products, searchCriteria,setSearchCriteria, setUser,addProduct,removeProduct, logout };

  return (
    <myContext.Provider value={contextValue}>
      {children}
    </myContext.Provider>
  );
};
