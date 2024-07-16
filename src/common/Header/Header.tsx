import "./Header.css"
import Surfer from "../Surfer/Surfer";
import { useContext } from "react";
import { myContext } from "../../app/ProviderContextComponent";
import CInput from "../CInput/CInput";
function Header() {
  const {user,logout,searchCriteria,setSearchCriteria, }= useContext(myContext);



  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchCriteria(event.target.value)
    console.log(searchCriteria)
    console.log(user)
  }

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="header-design bg-primary">
      
    <CInput type={"text"} name={"searchCriteria"} design="form-control inputHeader" placeholder="find product you like" onChange={handleChange}/>

      <Surfer path={"/"} destiny={"Home"} />
    { user.name === ""?  <Surfer path={"/login"} destiny={"Login"} /> : 
    (<div className="profile-surfers">
    <Surfer path={"/profile"} destiny={user.name}>

    </Surfer>
      <div onClick={handleLogout}>
      <Surfer path={"/"} destiny={"Log Out"} />
      </div>
      </div>
     )

    }
    </div>
  );
} 
export default Header;