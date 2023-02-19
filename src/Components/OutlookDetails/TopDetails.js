import React from "react";
import { Card } from "react-bootstrap";
import classes from "./TopDetails.module.css";
import ProductList from "./ProductList";

const productsArr = [
  {
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const TopDetails = () => {
  const ProductsDetails = productsArr.map((item) => (
    <ProductList
      title={item.title}
      imageUrl={item.imageUrl}
      price={item.price}
    />
  ));

  return (
    <>
      <div className={classes.title}>
        <Card className="shadow-lg">
          <p>The Generics</p>
        </Card>
        <h1>Music</h1>
        <span className={classes.products}>{ProductsDetails}</span>
      </div>
    </>
  );
};

export default TopDetails;