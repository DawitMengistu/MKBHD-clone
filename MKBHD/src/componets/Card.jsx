import React, { useContext} from "react";
import { ThemeContext } from "./NavBar.jsx";

function Card(shopDetail) {
    const darkTheme = useContext(ThemeContext)
    function handleClick() {
        shopDetail.onCliped(shopDetail.imgUrl);
    }
    return (
        <div onClick={handleClick} className={!darkTheme ? "card-cliped card-light" : "card-cliped"}>
            <div  className="card">
                <img src={shopDetail.imgUrl} alt="" />
            </div>
            <div className="shop-detail">
                <div className={darkTheme ? "shope-name light-text": "shope-name dark-text"}>
                {shopDetail.name}
                </div>
                <div className={darkTheme ? "shope-price light-text": "shope-price dark-text"}>
                {shopDetail.price}
                </div>
            </div>
        </div>
    );
}



export default Card;