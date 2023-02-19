import { useContext, useState } from "react";
import { Button, Modal, ModalBody, Table } from "react-bootstrap";
import classes from "./Cart.module.css";
import CartContext from "../Context/Cart-Context";

const CartItem = () => {
  const cartcntx = useContext(CartContext);

  const [showItems, setShowItems] = useState(false);

  let Count = 0;
  cartcntx.cartList.map((item) => {
    Count += item.quantity;
    return item;
  });

  const ShowHandler = () => {
    setShowItems(true);
  };

  const handleClose = () => {
    setShowItems(false);
  };

  return (
    <>
      <Button
        className="justify-content-end me-4 btn btn-dark btn-outline-warning text-white"
        onClick={ShowHandler}
      >
        Cart
        <span className={classes.span}>
          {Count}
        </span>
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
              {cartcntx.cartList.map((item, id) => (
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

                  <Button className="btn-dark btn-outline-danger">
                    Remove
                  </Button>
                </tr>
              ))}
            </tbody>
          </Table>
          <Button className="justify-content-right btn-light btn-outline-success">PURCHASE</Button>
        </ModalBody>
      </Modal>
    </>
  );
};
export default CartItem;
