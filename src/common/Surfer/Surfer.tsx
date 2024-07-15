import "./Surfer.css"
import { SurferInt } from "../../interfaces";
import { useNavigate } from "react-router-dom";

const Surfer : React.FC<SurferInt> = ({path, destiny}) => {

    const navigate = useNavigate()

    return (
        <div className="surfer-design" onClick={()=>navigate(path)}>
            {destiny}
        </div>
    )
}

export default Surfer;