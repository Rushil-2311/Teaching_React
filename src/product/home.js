// import React from "react";
// import { CartState } from "../product/context";

// const Home = ({ data1 }) => {
//   const { cart, setCart ,number , setNumber } = CartState();
//   return (
//     <>
//       <div id={data1.id} className="data">
//         {data1.product_name}
//         <br />
//         {data1.category}
//         <br />
//         {data1.created_at}
//         <br />
//         <img src={data1.prodcut_image} alt="error" />
//         <br />
//         {data1.user_rating}
//         <br />
//         {data1.product_description}
//         <br />
//         {cart.includes(data1) ? (
//           <button
//             onClick={() => {
//               setCart(cart.filter((c) => c.id !== data1.id));
//               setNumber(number-1)
//             }}
//           >
//             Remove From Cart
//           </button>
//         ) : (
//           <button
//             onClick={() => {
//               setCart([...cart, data1])
//               setNumber(number+1)
//             }}
//           >
//             ADD TO CART
//           </button>
//         )}
//       </div>
//     </>
//   );
// };

// export default Home;
