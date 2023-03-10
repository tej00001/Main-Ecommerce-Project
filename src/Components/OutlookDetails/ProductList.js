import classes from "./ProductList.module.css";
import { Button } from "react-bootstrap";
import CartContext from "../Context/Cart-Context";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ProductContext from "../Context/store-context";

const ProductList = (props) => {
  const CartCntx = useContext(CartContext);
  const productCtx = useContext(ProductContext);

  const CartHandler = (id, title, imageUrl, price, quantity) => {
    const ItemList = {
      id,
      title,
      imageUrl,
      price,
      quantity: 1,
    };

    let CurrentItem = false; //CurrentItem nothing but exixsting item
    const ModifiedCart = CartCntx.cartList.map((item) => {
      if (item.title === ItemList.title) {
        item.quantity += 1;
        CurrentItem = true;
        // Update the quantity of an existing item in the cart in the Crud Crud API
        const emailStoredInLocalStorage = localStorage.getItem("email");
        const userEmail = emailStoredInLocalStorage
          ? emailStoredInLocalStorage.replace(/[^\w\s]/gi, "")
          : "";
        fetch(
          `https://crudcrud.com/api/6e8b95e674374db1ad2cd3b844180e83/${userEmail}/${item._id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              id: id,
              title: title,
              price: price,
              imageUrl: imageUrl,
              quantity: item.quantity,
            }),
          }
        )
          .then((response) => {
            if (!response.ok) {
              throw new Error("Failed to update item in cart");
            }
          })
          .catch((error) => console.error(error));
      }
      return item;
    });

    if (!CurrentItem) {
      ModifiedCart.push(ItemList);
      // Add a new item to the cart in the Crud Crud API
      const emailStoredInLocalStorage = localStorage.getItem("email");
      const userEmail = emailStoredInLocalStorage
        ? emailStoredInLocalStorage.replace(/[^\w\s]/gi, "")
        : "";
      fetch(
        `https://crudcrud.com/api/6e8b95e674374db1ad2cd3b844180e83/${userEmail}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(ItemList),
        }
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to add item to cart");
          }
        })
        .catch((error) => console.error(error));
    }

    CartCntx.setCartList(ModifiedCart);
  };

  const ProductDetailHandler = (props) => {
    const ProductDetail = {
      title: props.title,
      imageUrl: props.imageUrl,
      price: props.price,
      rating: 4.2,
      detail: "Best album of the year",
    };
    productCtx.changeDetail(ProductDetail);
  };
  return (
    <div className={classes.div}>
      <header>{props.title} </header>
      <Link to={"/STORE/:id"}>
        <img
          src={props.imageUrl}
          alt={props.title}
          onClick={ProductDetailHandler.bind(null, props)}
        />
      </Link>

      <span>
        <ul>Rs{props.price}</ul>
        <Button
          className="btn-info"
          onClick={() =>
            CartHandler(
              props.id,
              props.title,
              props.imageUrl,
              props.price,
              props.quantity
            )
          }
        >
          ADD TO CART
        </Button>
      </span>
    </div>
  );
};
export default ProductList;
