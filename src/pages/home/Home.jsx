import React, { memo, useEffect, useState } from "react";
import axios from "../../api";
import Product from '../../components/product/Product';
import Herocontent from "../../components/hero/Herocontent";
import Catalog from "../../components/catalog/Catalog";
import Section from "../../components/section/Section";
import Corusel from "../../components/corusel/Corusel";
import Skeleton from '../../components/skeleton/Skeleton';
import EastIcon from '@mui/icons-material/East';
import { Link } from "react-router-dom";


const Home = () => {
    const [data, setData] = useState([]);
    const [count, setCount] = useState(8);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        setLoading(true);
        axios.get(`/products?limit=${count}`)
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.log("Error fetching data:", error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [count]);

    const handleSeeMore = () => {
        setCount((prevCount) => prevCount + 4);
    };

    return (
        <>
            <Herocontent />
            <div className="catalog__title container">
                <p className='catalog__title__p'>Каталог</p>
                <Link to={"/catalog"} className='catalog__title__button'>Весь каталог <EastIcon /> </Link>
            </div>
            <Catalog />
            <Section />
            {loading ? (
                <Skeleton count={count} />
            ) : (
                <Product data={data} onSeeMore={handleSeeMore} />
            )}
            <Corusel />
        </>
    );
};

export default memo(Home);
