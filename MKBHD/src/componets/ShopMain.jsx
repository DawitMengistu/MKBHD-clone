import React, { useState, useContext } from "react";
// import NavBar from './NavBar.jsx';
import shopList from "./shopelist.js";
import { ThemeContext } from "./NavBar.jsx";
import Card from "./Card.jsx";
function ShopeMain() {
    let [matteBlack, calMatteBlack] = useState(0);
    let marginCounter = -100;
    const darkTheme = useContext(ThemeContext)
    React.useEffect(() => {
        const interval = setInterval(() => {
            marginCounter -= 3;
            if (marginCounter < -12100) marginCounter = 0;
            calMatteBlack(marginCounter);
        }, 15);

        return () => {

            clearInterval(interval);
        };
    }, []);

    //     const interval = setInterval(calMatteBlackk, 2000);
    // function calMatteBlackk() {
    //     marginCounter+=1;
    //     calMatteBlack(marginCounter);
    //     console.log(marginCounter)
    //     clearInterval(interval);
    //}
    function handleClick(id) {
        console.log(id);
    }
    function createCard(item) {
        return (
        <Card 
        key = {item.id}
        id = {item.id}
        name={item.itemName}
        imgUrl= {item.imgUrl}
        price = {item.price}
        onCliped = {handleClick}
        />
        );
    }
    return (
        <div className={!darkTheme ? "section-two-container  bg-light-sec-two" : "section-two-container  bg-dark-sec-two"}  >
            <div  className={!darkTheme ? "section-two  bg-light-sec-two" : "section-two  bg-dark-sec-two"} >
                <div className="shop-card-container">
                    {shopList.map(createCard)}
                </div>
            </div>
            <div className="italic-button-container" >
                <div className="italic-button all-products-container ">
                    <div className="icon-text all-products">
                        <div className="italic-text">BROWSE ALL PRODUCTS</div>
                    </div>
                </div>
            </div>
            <div className="wave-form-container">
                <div className="wave-form-img">
                    <img src="../src/assets/wave.webp" alt="" />
                </div>
                <div className="wave-form-detail">
                    <div className="wave-text">WAVEFORM PODCAST</div>
                    <p> A tech podcast for the gadget lovers and tech heads among us. Marques and co-host Andrew Manganelli dive deep into tech, YouTube, video production and more. New episodes every week! </p>
                    <div className="italic-button-container listen-container">
                        <div className="italic-button listen">
                            <div className="icon-text all-products">
                                <div className="italic-text">LISTEN NOW</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={!darkTheme ? "everything-matte-black-container card-light" : "everything-matte-black-container card-dark"}>
                <br /><br />
                <div className={!darkTheme ? "everything-matte-black dark-text" : "everything-matte-black light-text"} style={{ marginLeft: matteBlack }}>
                    MatteblackeverythingMatteblackeverythingMatteblackeverythingMatteblackeverythingMatteblackeverythingMatteblackeverythingMatteblackeverythingMatteblackeverythingMatteblackeverythingMatteblackeverythingMatteblackeverythingMatteblackeverythingMatteblackeverythingMatteblackeverythingMatteblackeverythingMatteblackeverythingMatteblackeverythingMatteblackeverything
                </div>
                <div className="logo-container footer-logo">
                    <div className="logo-menu">
                        <img src={!darkTheme ? "../src/assets/logo-dark.png" : "../src/assets/logo-light.png"} alt="" />
                    </div>
                </div>
                <div className="footer-container">
                    <div className="footer">
                        <ul>
                            <li className={darkTheme ? "light-text  hover-red" : "dark-text  hover-red"}>Shop</li>
                            <li className={darkTheme ? "light-text  hover-red" : "dark-text  hover-red"}>MKBHD</li>
                            <li className={darkTheme ? "light-text  hover-red" : "dark-text  hover-red"}>The Studio</li>
                            <li className={darkTheme ? "light-text  hover-red" : "dark-text  hover-red"}>Podcast</li>
                            <li className={darkTheme ? "light-text  hover-red" : "dark-text  hover-red"}>AutoFocus</li>
                        </ul>
                    </div>
                </div>
            </div>


        </div>
    );
}


// function card(shopDetail) {
//     return (
//         <div className="card-cliped">
//             <div className="card">
//                 <img src={shopDetail.imgUrl} alt="" />
//             </div>
//             <div className="shop-detail">
//                 <div className="shop-name">
//                     CHEVRON HOODIE
//                 </div>
//                 <div className="shopt-price">
//                     $65.00
//                 </div>
//             </div>
//         </div>
//     );
// }

export default ShopeMain;