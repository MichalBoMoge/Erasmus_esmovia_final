import "./ProfileCard.css"
import { PCardInt } from "../../interfaces";
import 'bootstrap/dist/css/bootstrap.min.css';
import Stars from "../Stars/Starts";
import { useContext } from "react";
import { myContext } from "../../app/ProviderContextComponent";
const ProfileCard: React.FC<PCardInt> = ({ product }) => {
    const {removeProduct} = useContext(myContext)
    var StarsNr: number = Math.round(product.rating.rate)
    let price = product.price
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

    return (
        <div className="profile-card card w-100 d-flex flex-row mb-2">
            <div className="img-holder w-25">
                <img className="img-fluid img-thumbnail" src={product.image} alt="Card image cap"></img>
            </div>
            <div className="desc-holder w-75 d-flex flex-column align-items-start p-2 content">
                <h3 className="card-title">{product.title}</h3>
                <p className="par-desc">{product.description}</p>
                <p className="h3 text-danger">{formatPrice(price)}€</p>
                <div className="d-flex flex-row stars-cont mb-2">
                {renderStars()}{product.rating.rate.toFixed(1)}/5
                </div>
                <h5>{product.rating.rate.toFixed(1)}/5 ({product.rating.count} opinions)</h5>
                <button className="btn btn-danger rmv"onClick={() => removeProduct(product.id)}>Remove from cart</button>
            </div>
        </div>


    )
}

export default ProfileCard