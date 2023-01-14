import React, { useEffect } from "react";
import BlogItem from "../BlogItem/BlogItem";
import NavLeftContent from "../NavLeftContent/NavLeftContent";
import ProductItem from "../ProductItem/ProductItem";
import "./HomePage.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../store/productActions";

const HomePage = () => {

  const BASE_URL = "https://63bffa650cc56e5fb0e3afaa.mockapi.io/listProduct"
  const dispatch = useDispatch();
  const listProduct = useSelector((state) => state.product);

  const fetchProductItems = async () => {
    dispatch(fetchProduct(BASE_URL))
  };

  useEffect(() => {
    fetchProductItems();
  }, [])

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <img src="/icons/slick_prev_arrow.svg" alt="slick_prev_arrow" />,
    nextArrow: <img src="/icons/slick_next_arrow.svg" alt="slick_next_arrow" />,
  };
  return (
    <>
      <>
        <div className="m-banner">
          <NavLeftContent />
          <div className="list-banner">
            <img src="/images/Banner.png" alt="banner" />
            <img src="/images/Banner.png" alt="banner" />
            {/* <img src="/images/Banner.png" alt="banner" /> */}
          </div>
        </div>
        <div className="m-list-product">
          <div className="wrap__list-nav-content">
            <NavLeftContent />
            <NavLeftContent />
          </div>
          <div className="list-product">
            {listProduct.map((item, index) => (
              <ProductItem
                title={item.title}
                spaceForProduct={item.spaceForProduct}
                price={item.price}
                discount={item.discount}
                image={item.image}
                id={item.id}
                key={index}
              />
            ))}

          </div>
        </div>
        <div>
          <div className="m-list-blog">
            <h1>Our customers says</h1>
            <button>
              Button{" "}
              <img src="/icons/black_right_arrow.svg" alt="black_right_arrow" />
            </button>
          </div>
          <div className="slick-list-blog">
            <Slider {...settings} className="slick_carousel">
              <BlogItem />
              <BlogItem />
              <BlogItem />
              <BlogItem />
              <BlogItem />
              <BlogItem />
            </Slider>
          </div>
        </div>
        <div>
          <div className="m-list-blog">
            <h1>Section Headline</h1>
            <button>
              Button{" "}
              <img src="/icons/black_right_arrow.svg" alt="black_right_arrow" />
            </button>
          </div>
          <div className="m-section-headline">
            {listProduct.map((item, index) => (
              <ProductItem
                title={item.title}
                spaceForProduct={item.spaceForProduct}
                price={item.price}
                discount={item.discount}
                image={item.image}
                id={item.id}
                key={index}
              />
            ))}
          </div>
        </div>
      </>
    </>
  );
};

export default HomePage;
