import SingleProduct from "../../components/SingleProduct";

const CartPage = ({ cart, setcart }) => {
  return (
    <>
      <span> My cart</span>

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
