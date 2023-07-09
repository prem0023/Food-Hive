import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const store = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const getTotalPrice = store.reduce(
    (preValue, currValue) => preValue + currValue[1] / 100,
    0
  );

  return (
    <div className=" mt-16 mx-40 ">
      <h1 className="font-bold font-sans text-3xl m-10">Items in your Cart</h1>
      <ul className="m-12">
        {store.map((item, index) => {
          return (
            <li
              className=" flex justify-between p-2 text-lg border-b"
              key={index}
            >
              <div>{item[0]}</div>
              <div>{item[1] / 100}</div>
            </li>
          );
        })}
      </ul>
      <div className="flex justify-between m-12 p-2 font-bold text-lg">
        <div> Total</div>
        <div>{getTotalPrice}</div>
      </div>
      <div className="flex justify-end m-16">
        <button
          className=" bg-red-600 font-bold text-xl w-28 h-10 rounded-md "
          onClick={() => {
            dispatch(clearCart());
          }}
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
