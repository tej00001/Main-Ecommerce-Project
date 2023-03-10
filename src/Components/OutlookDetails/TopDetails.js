import React, { useContext, useState } from "react";
import { Container, Button, Modal, ModalBody, Table } from "react-bootstrap";
import classes from "./TopDetails.module.css";
import ProductList from "./ProductList";
import CartContext from "../Context/Cart-Context";

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
  const CartCntx = useContext(CartContext);
  const [showItems, setShowItems] = useState(false);

  const ProductsDetails = productsArr.map((item) => (
    <ProductList
      key={item.id}
      title={item.title}
      imageUrl={item.imageUrl}
      price={item.price}
    />
  ));
  const ShowHandler = () => {
    setShowItems(true);
  };

  const handleClose = () => {
    setShowItems(false);
  };

  return (
    <>
      <div className={classes.title}>
        <h1>Music</h1>
        <span className={classes.products}>{ProductsDetails}</span>
      </div>
      <Container className={classes.button}>
        <Button className="btn-dark btn-outline-warning " onClick={ShowHandler}>
          See the Cart
        </Button>
      </Container>
      <Modal show={showItems} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title className={classes.cart}>CartList</Modal.Title>
          <Button onClick={handleClose} variant="dark-dark btn-outline-danger">
            X
          </Button>
        </Modal.Header>
        <ModalBody>
          <Table>
            <thead>
              <tr>
                <th>ITEM</th>
                <th>PRICE</th>
                <th>QUANTITY</th>
              </tr>
            </thead>
            <tbody>
              {CartCntx.cartList.map((item, id) => (
                <tr key={id}>
                  <td>
                    <img
                      className={classes.img}
                      src={item.imageUrl}
                      alt={item.title}
                    ></img>
                    {item.title}
                  </td>
                  <td>{item.price}.00</td>
                  <td className={classes.quantity}>{item.quantity}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </ModalBody>
      </Modal>
    </>
  );
};

export default TopDetails;
