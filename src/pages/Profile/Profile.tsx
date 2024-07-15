import { useContext } from "react"
import "./Profile.css"
import { myContext } from "../../app/ProviderContextComponent"
import ProfileCard from "../../common/ProfileCard/ProfileCard"
import { ProductInt } from "../../interfaces"

function Profile()
{   

    const {products} = useContext(myContext)
    console.log(products)

    var sum: number = 0;
    products.forEach(function (product:ProductInt){
      sum += product.price;
    });
  return(
    <div className="bg-secondary profile-design"><h1>Your Profile</h1>
    {products?.length > 0 ? (
        <div className="container">
                <h2>products in cart : {products.length}</h2>

          {products.map((product:ProductInt) => {
            return <ProfileCard key={product.id} product={product} />
            
          })}
          <h1>Total value:{sum.toFixed(2)}€</h1>
        </div>
      ) : (
        <div><h2>You have no products</h2></div>
      )}
    </div>
    )

}

export default Profile