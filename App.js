import React from "react";
import ReactDOM from "react-dom/client";
import { jsx } from "react/jsx-runtime";

/**
 * Header
 *  - Logo
 *  - Nav items
 * Body
 *  - Search bar
 *  - Resturant Container
 *      -Resturant Card
 * Footer
 *  - Copyright
 *  - link
 *  - Address
 *  - Contact
 */

const Header = () => {
    return (
        <div className="header-container">
            <div className="logo">
                <img src="https://png.pngtree.com/template/20200610/ourmid/pngtree-food-delivery-logo-design-image_381319.jpg" alt="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>AboutUs</li>
                    <li>ContactUs</li>
                    <li>Cart</li>
                </ul>
            </div>

        </div>
    );
};


const RestaurantCard = () => {
    return (
        <div className="res-card">
            <div>
                <img src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg" alt="restaurant-image" />
            </div>
            <div className="res-info">
                <h2>Meghna Food <span>4.4/5.0</span></h2>
                <p>Finger Food<span>₹1000 for two</span></p>
                <p>GandhiNagar,Vns <span>2km</span></p>
            </div>
        </div>
    );
}

const Body = () => {
    return (
        <div className="body-container">
            <div className="search-bar">
                <input type="text" placeholder="Search Your Fav Restaurant" className="text-input" />
                <button className="search-btn">Search</button>
            </div>
            <div className="res-container">
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
            </div>
        </div>

    );
}

const AppLayout = () => {
    return (
        <div>
            <Header />
            <Body />
        </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
