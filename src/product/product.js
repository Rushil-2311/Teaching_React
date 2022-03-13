import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { data } from "../MOCK_DATA.js";
import { CartState } from "../product/context";
import { AiOutlineShoppingCart } from "react-icons/ai";
// import Cart from "../product/cart.js";
import Home from "../product/home.js";

const Product = () => {
  const [item, setItem] = useState([...data]);
  const [data1, setData1] = useState({
    product_name: "",
    category: "",
    created_at: "",
    prodcut_image: "",
    user_rating: "",
    product_description: "",
  });
  const [toggleitem, settoggleItem] = useState(false);
  const [search, setsearch] = useState("");
  const { cart, setCart, number , setNumber } = CartState();


  const searchData = useMemo(() => {
    if (!search) return item;

    return item.filter((findItem) => {
      return findItem.product_name.toLowerCase().includes(search.toLowerCase());
    });
  }, [search, item]);

  const inputEvent = (event) => {
    setData1({
      ...data1,
      [event.target.name]: event.target.value,
    });
  };

  const getData = (event) => {
    event.preventDefault();
    setItem((oldItem) => {
      return [...oldItem, data1];
    });

    setData1({
      product_name: "",
      category: "",
      created_at: "",
      prodcut_image: "",
      user_rating: "",
      product_description: "",
    });

    // console.log(setData1({
    //     product_name: "",
    //     category: "",
    //     created_at: "",
    //     prodcut_image: "",
    //     user_rating: "",
    //     product_description: "",
    //   }));
  };

  const loadMore = () => {
    settoggleItem(true);
  };

  const sortByName = () => {
    const sorted = [...item].sort((a, b) => {
      return a.product_name > b.product_name ? 1 : -1;
    });
    setItem(sorted);
    settoggleItem(true);
  };
  const sortByRating = () => {
    const sorted = [...item].sort((a, b) => {
      return a.user_rating > b.user_rating ? 1 : -1;
    });
    setItem(sorted);
    settoggleItem(true);
  };

  return (
    <>
      <form onSubmit={getData}>
        <input
          type="text"
          placeholder="Search a data"
          className="search"
          onChange={(e) => {
            setsearch(e.target.value);
          }}
          value={search}
        />
        <Link to="/cart">
          <AiOutlineShoppingCart /> {number}
        </Link>

        <div className="submit">
          <input
            type="text"
            placeholder="product name"
            name="product_name"
            onChange={inputEvent}
            value={data1.product_name}
            required
          />
          <input
            type="text"
            placeholder="category"
            name="category"
            onChange={inputEvent}
            value={data1.category}
            required
          />
          <input
            type="text"
            placeholder="created at"
            name="created_at"
            onChange={inputEvent}
            value={data1.created_at}
            required
          />
          <input
            type="text"
            placeholder="product image"
            name="prodcut_image"
            onChange={inputEvent}
            value={data1.prodcut_image}
            required
          />
          <input
            type="text"
            placeholder="user rating"
            name="user_rating"
            onChange={inputEvent}
            value={data1.user_rating}
            required
          />
          <input
            type="text"
            placeholder="product description"
            name="product_description"
            onChange={inputEvent}
            value={data1.product_description}
            required
          />
          <div className="show">
            <button>Click for Submit</button>
            <button onClick={loadMore}> Load All The Data </button>
            <button onClick={sortByName}> Sort By Product Name </button>
            <button onClick={sortByRating}> Sort By User Rating </button>
          </div>
        </div>
      </form>

      {toggleitem ? (
        <div className="data1">
          {searchData?.map((data1) => {
            return <Home data1={data1} key={data1.id} />;
          })}
        </div>
      ) : null}
    </>
  );
};

export default Product;
