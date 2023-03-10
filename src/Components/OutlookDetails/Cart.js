import { useContext, useState, useEffect } from "react";
import { Button, Modal, ModalBody, Table } from "react-bootstrap";
import classes from "./Cart.module.css";
import CartContext from "../Context/Cart-Context";
import AuthContext from "../Pages/auth.context";

const CartItem = (props) => {
  const CartCntx = useContext(CartContext);
  const authCtx = useContext(AuthContext);
  const [showItems, setShowItems] = useState(false);

  let Count = 0;
  CartCntx.cartList.map((item) => {
    Count += item.quantity;
    console.log(Count);
    return item;
  });

  const ShowHandler = () => {
    setShowItems(true);
  };

  const handleClose = () => {
    setShowItems(false);
  };
  // const RemoveCartHandler = (id, title, imageUrl, price) => {
  //   let ModifiedCart = [];
  //     let CurrentItem=false
  //       CartCntx.cartList.map((item) => {
  //           if (item.quantity > 1) {
  //             CurrentItem=true;
  //             item.quantity -= 1;
  //             ModifiedCart.push(item);
  //           }
  //         else {
  //           ModifiedCart.pop(item);
  //         }

  //       return item
  //       });
  //       CartCntx.setCartList(ModifiedCart);

  // const emailStoredInLocalStorage = localStorage.getItem('email');
  // const userEmail = emailStoredInLocalStorage ? emailStoredInLocalStorage.replace(/[^\w\s]/gi, '') : "";

  //       // fetch(`https://crudcrud.com/api/7c47997b54404841a5961e37ed78a913/${userEmail}${id}
  //       // `, {

  //       //     method: 'DELETE'
  //       //   })
  //       //   .then(response => {
  //       //     if (response.ok) {
  //       //       console.log('Cart item deleted');
  //       //     } else {
  //       //       console.error('Error deleting cart item');
  //       //     }
  //       //   })
  //       //   .catch(error => {
  //       //     console.error(error);
  //       //   });

  //       }
  useEffect(() => {
    const emailStoredInLocalStorage = localStorage.getItem("email");
    const userEmail = emailStoredInLocalStorage
      ? emailStoredInLocalStorage.replace(/[^\w\s]/gi, "")
      : "";

    console.log(authCtx.isLoggedIn);
    fetch(
      `https://crudcrud.com/api/6e8b95e674374db1ad2cd3b844180e83/${userEmail}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch cart items");
        }
        return response.json();
      })
      .then((data) => {
        // restore cart items data
        CartCntx.setCartList(data);
        console.log(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <Button
        className="justify-content-end me-4 btn btn-dark btn-outline-warning text-white"
        onClick={ShowHandler}
      >
        Cart-
        {Count}
      </Button>
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

                  <Button
                    className="btn-dark btn-outline-danger"
                    //          onClick={() =>
                    //   RemoveCartHandler(props.id, props.title, props.imageUrl, props.price)
                    // }
                  >
                    Remove
                  </Button>
                </tr>
              ))}
            </tbody>
          </Table>
          <Button className="justify-content-right btn-light btn-outline-success">
            PURCHASE
          </Button>
        </ModalBody>
      </Modal>
    </>
  );
};
export default CartItem;
