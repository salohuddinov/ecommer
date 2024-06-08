import React, { memo, useEffect, useState } from "react";
import axios from "../../api";
import Product from '../../components/product/Product'

const Allproduct = () => {
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
            <Product data={data} />
        </>
    )
}

export default Allproduct