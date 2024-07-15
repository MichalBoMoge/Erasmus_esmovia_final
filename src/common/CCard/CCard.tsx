import "./CCard.css"
import { CCardInt } from "../../interfaces";
import 'bootstrap/dist/css/bootstrap.min.css';
import Stars from "../Stars/Starts";

const CCard: React.FC<CCardInt> = ({ product, selectProduct }) => {
  var StarsNr: number = Math.round(product.rating.rate)
  let price = product.price
  function formatPrice(price: number): string {
    return price.toFixed(2);
  }
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < StarsNr; i++) {
      stars.push(<Stars />);
    }
    return stars
  }


  return (
    <div className="karta col-sm-15 mr-2 col-md-4 col-lg-3 card d-flex justify-content-center align-items-center mb-4 ">
      <img className="card-img-top" src={product.image} alt="Card image cap"></img>
      <h5 className="card-title">{product.title}</h5>
      <p className="h3 text-danger">{formatPrice(price)}€</p>
      <div className="d-flex flex-row align-items-center">
      <div className="d-flex flex-row stars-cont mb-2">
        {renderStars()
        }
      </div>
      <h5 className="ml-2">{product.rating.rate.toFixed(1)}/5</h5>
      </div>
      <button className="btn btn-primary" onClick={selectProduct}>Buy now</button>
    </div>


  )
}

export default CCard