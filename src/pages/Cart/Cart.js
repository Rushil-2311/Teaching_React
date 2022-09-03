import SingleProduct from "../../components/SingleProduct";
import "./cart.css";

const CartPage = ({ cart, setcart }) => {
  return (
    <>
      <div className="main__cart">
        <span className="title"> My cart</span>
        <p style={{ color: "black" }}> total items : {cart.length} </p>
      </div>
      {cart.map((data) => (
        <SingleProduct
          data={data}
          key={data.id}
          cart={cart}
          setCart={setcart}
        />
      ))}
    </>
  );
};

export default CartPage;
