import React from "react";
import { Container, Button } from "react-bootstrap";
import classes from "./TopDetails.module.css";
import ProductList from "./ProductList";

const productsArr = [
  {
    id: "1",
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    id: "2",

    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    id: "3",

    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    id: "4",

    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const TopDetails = () => {
  const ProductsDetails = productsArr.map((item) => (
    <ProductList
      key={item.id}
      title={item.title}
      imageUrl={item.imageUrl}
      price={item.price}
    />
  ));

  return (
    <>
      <div className={classes.title}>
        <h1>Music</h1>
        <span className={classes.products}>{ProductsDetails}</span>
      </div>
      <Container className={classes.button}>
        <Button className="btn-dark btn-outline-warning ">See the Cart</Button>
      </Container>
    </>
  );
};

export default TopDetails;
