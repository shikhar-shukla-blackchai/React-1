import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemList from "./ItemList";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
    console.log("dispatch", dispatch(clearCart()));
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold" onClick={handleClearCart}>
        Cart
      </h1>

      <div className="w-6/12 m-auto">
        <button
          className="p-2 m-2 bg-black rounded-lg text-white"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && <h1>Eat something before you die ☠☠</h1>}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
