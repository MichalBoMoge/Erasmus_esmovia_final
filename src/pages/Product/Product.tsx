import { useContext } from "react"
import { myContext, initialProd } from "../../app/ProviderContextComponent"
import "./Product.css"
import { useNavigate } from "react-router-dom"
import Stars from "../../common/Stars/Starts"

function Product() {
    const { user,products, setUser,addProduct } = useContext(myContext)
    var StarsNr: number = Math.round(user.selected.rating.rate)
    let price = user.selected.price
    function formatPrice(price: number): string {
        return price.toFixed(2);
      }
      const renderStars = () =>{
        const stars = [];
        for(let i =0; i < StarsNr; i++)
            {
                stars.push(<Stars/>);
            }
            return stars
    }

    const navigate = useNavigate()
    const getBack = () => {
        setUser({
            selected: initialProd
        })
        navigate("/")
    }

    const handleAddProduct = () =>{
        addProduct({...user.selected, id: products.length + 1})
        {user.token ===""?navigate("/login"):navigate("/profile")}
        

    }

    return (
        <div className="product-site-design d-flex justify-content-center align-items-center">
            <div className="product-holder  w-75 d-flex flex-row align-items-center">
                <div className="product-image">
                    <img className="img-fluid img-thumbnail" src={user.selected.image} />
                </div>
                <div className="product-desc p-4 d-flex flex-column justify-content-center">
                    <h1 className="mb-5">{user.selected.title}</h1>
                    <p className="dsc mb-5">{user.selected.description}</p>
                    <div className="d-flex flex-row align-items-center justify-content-center">
                        <h1 className="price">{formatPrice(price)}€</h1>
                        <button className="cart-btn btn btn-warning" onClick={handleAddProduct}>Add to Cart</button>
                        
                    </div>
                    <div className="d-flex flex-row justify-content-center align-items-end stars-cont-prod mb-2">
                {renderStars()}
                <h5>{user.selected.rating.rate.toFixed(1)}/5 ({user.selected.rating.count} opinions)</h5>
                </div>
                    <button className="btn btn-primary get-back" onClick={getBack}>back to home page</button>
                </div>

            </div>

        </div>
    )

}

export default Product