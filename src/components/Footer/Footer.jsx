import React from "react";
import "./Footer.css";

const Footer = () => {
  const listProductTags = [
    {
      id: 1,
      tagName: "Beans",
    },
    {
      id: 2,
      tagName: "Carrots",
    },
    {
      id: 3,
      tagName: "Apples",
    },
    {
      id: 4,
      tagName: "Garlic",
    },
    {
      id: 5,
      tagName: "Mushrooms",
    },
    {
      id: 6,
      tagName: "Tomatoes",
    },
    {
      id: 7,
      tagName: "Chilli peppers",
    },
    {
      id: 8,
      tagName: "Brocoli",
    },
    {
      id: 9,
      tagName: "Watermelons",
    },
    {
      id: 10,
      tagName: "Cherries",
    },
    {
      id: 11,
      tagName: "Meat",
    },
    {
      id: 12,
      tagName: "Seo tag",
    },
    {
      id: 13,
      tagName: "Fish",
    },
    {
      id: 14,
      tagName: "Seo tag",
    },
    {
      id: 15,
      tagName: "Fresh food",
    },
    {
      id: 16,
      tagName: "Lemons",
    },
    {
      id: 17,
      tagName: "Beans",
    },
    {
      id: 18,
      tagName: "Carrots",
    },
    {
      id: 19,
      tagName: "Apples",
    },
    {
      id: 20,
      tagName: "Garlic",
    },
    {
      id: 21,
      tagName: "Mushrooms",
    },
    {
      id: 22,
      tagName: "Tomatoes",
    },
    {
      id: 23,
      tagName: "Chilli peppers",
    },
    {
      id: 24,
      tagName: "Brocoli",
    },
    {
      id: 25,
      tagName: "Watermelons",
    },
    {
      id: 26,
      tagName: "Cherries",
    },
    {
      id: 27,
      tagName: "Meat",
    },
    {
      id: 28,
      tagName: "Seo tag",
    },
    {
      id: 29,
      tagName: "Fish",
    },
    {
      id: 30,
      tagName: "Seo tag",
    },
    {
      id: 31,
      tagName: "Fresh food",
    },
    {
      id: 32,
      tagName: "Lemons",
    },
  ];
  return (
    <footer className="foot-content">
      <div className="f-content-container">
        <div className="f-catalog">
          <h2>Get in touch</h2>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Press Releases</li>
            <li>Blog</li>
          </ul>
        </div>

        <div className="f-catalog">
          <h2>Get in touch</h2>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Press Releases</li>
            <li>Blog</li>
          </ul>
        </div>

        <div className="f-catalog">
          <h2>Get in touch</h2>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Press Releases</li>
            <li>Blog</li>
          </ul>
        </div>

        <div className="f-catalog">
          <h2>Get in touch</h2>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Press Releases</li>
            <li>Blog</li>
          </ul>
        </div>
      </div>
      <div className="f-product-tags-container">
        <h2>Product tags</h2>
        <div class="f-product-tags">
          {listProductTags.map((item) => (
            <span>{item.tagName}</span>
          ))}
        </div>
      </div>
      <div class="f-copyright">Copyright © 2020 petrbilek.com</div>
    </footer>
  );
};

export default Footer;
