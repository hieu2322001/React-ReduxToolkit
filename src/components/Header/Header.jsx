import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {

  
  const listCategory = [
    {
      id: 1,
      category: "Bakery",
    },
    {
      id: 2,
      category: "Fruit and vegetables",
    },
    {
      id: 3,
      category: "Meat and fish",
    },
    {
      id: 4,
      category: "Drinks",
    },
    {
      id: 5,
      category: "Kitchen",
    },
    {
      id: 6,
      category: "Special nutrition",
    },
    {
      id: 7,
      category: "Baby",
    },
    {
      id: 8,
      category: "Pharmacy",
    },
  ];
  return (
    <div className="navbar">
      <header className="navbar-header">
        <div className="l-nabar-header">
          <p>Chat with us</p>
          <p>+420 336 775 664</p>
          <p>info@freshnesecom.com</p>
        </div>
        <div className="r-navbar-header">
          <p>Blog</p>
          <p>About Us</p>
          <p>Careers</p>
        </div>
      </header>

      <div className="nav-head-content">
        <Link to="/">
          <img src="/icons/Freshnesecom.svg" alt="Freshnesecom" />
        </Link>

        <div className="nav-h-search">
          <div className="n-wrap__logo">
            <div className="nav-h-logo">
              <img src="/icons/all_categories.svg" alt="all_categories" />
              <img src="/icons/down_green_arrow.svg" alt="down_green_arrow" />
            </div>
          </div>
          <input type="text" placeholder="Search Products, categories ..." />
          <img src="/icons/Layer.svg" alt="Layer" className="nav_search_icon" />
        </div>

        <div className="nav-head-user">
          <img src="/icons/ic-actions-user.svg" alt="ic-actions-user" />
          <Link to="/cart">
            <img
              src="/icons/ic-ecommerce-basket.svg"
              alt="ic-ecommerce-basket"
            />
          </Link>
        </div>
      </div>

      <div className="nav-head-category">
        <ul className="nav__list-category">
          {listCategory.map((item) => (
            <li>
              {item.category}
              <img
                src="/icons/down_green_arrow.svg"
                alt="down_green_arrow"
              />{" "}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
