import React from "react";
import "./NavLeftContent.css";

const NavLeftContent = () => {
  return (
    <div className="l-nav-content-banner">
      <h2>Category menu</h2>
      <ul>
        <li>Bakery</li>
        <li>Fruit and vegetables</li>
        <li>Meat and fish</li>
        <li>Drinks</li>
        <li>Kitchen</li>
      </ul>
      <button>
        More categories{" "}
        <img src="/icons/black_right_arrow.svg" alt="black_right_arrow" />
      </button>
    </div>
  );
};

export default NavLeftContent;
