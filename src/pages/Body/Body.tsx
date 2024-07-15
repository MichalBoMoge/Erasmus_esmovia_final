import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../Home/Home";
import Login from "../Login/Login";
import {myContext} from "../../app/ProviderContextComponent";
import { useContext } from "react";
import Profile from "../Profile/Profile";
import Product from "../Product/Product";

function Body() {
  const {user}= useContext(myContext)
  return (
    <>
      <Routes>
        <Route path="*" element={<Navigate to={"/"} replace />} />
        <Route path="/" element={<Home />} />
        {user.token === ""?<Route path="/login" element={<Login/>}/>:
        <Route path="/profile" element={<Profile/>}/>}
        {user.selected.title !==""?<Route path="/product" element={<Product/>}/>:null}
        
        

      </Routes>
    </>
  );
}

export default Body;