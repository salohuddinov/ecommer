import React, { memo } from "react";
import { useEffect, useState } from "react";
import axios from "../../api";
import { useSelector } from "react-redux";
import Product from "../../components/product/Product";
import wish from '../../images/wishlist.png'

const Wishlist = () => {
  const wishes = useSelector((state) => state.wishlist.value);
  const [data, setData] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    axios
      .get("/products")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {wishes.length ? (
        <Product title="Wishlist" data={wishes} />
      ) : (
        <img className="not__found container" src={wish} alt="" />
      )}
      <br />
      <br />
      <br />
      <Product data={data.slice(0, 4)} />
    </>
  );
};

export default memo(Wishlist);
