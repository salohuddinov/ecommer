import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from 'react-router-dom';
import axios from "../../api";
import { toggleToWishes } from "../../context/wishlistSlice";
import { addToCart, incCart, decCart, removeFromCart } from '../../context/cartSlice';
import { API_URL } from '../../static';
import SingleBtm from '../../components/singlebtm/SingleBtm'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import icon1 from '../../images/icon1.png';
import icon2 from '../../images/icon2.png';
import icon3 from '../../images/icon3.png';
import icon4 from '../../images/icon4.png';
import icon5 from '../../images/icon5.png';

function Single() {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [isAddedToCart, setIsAddedToCart] = useState(false);
    const dispatch = useDispatch();
    const wishes = useSelector((state) => state.wishlist.value);
    const { id } = useParams();
    const discountRate = 0.1;
    const oldPrice = product ? product.price / (1 - discountRate) : 0;

    const handleDecrement = () => {
        if (quantity <= 1) {
            setQuantity(0);
            setIsAddedToCart(false);
            dispatch(removeFromCart(product));
            localStorage.removeItem(`cart_${product.id}`);
        } else {
            const newQuantity = quantity - 1;
            setQuantity(newQuantity);
            dispatch(decCart(product));
            localStorage.setItem(`cart_${product.id}`, JSON.stringify({ ...product, quantity: newQuantity }));
        }
    };

    const handleAddToCart = () => {
        setQuantity(1);
        setIsAddedToCart(true);
        dispatch(addToCart({ ...product, quantity: 1 }));
        localStorage.setItem(`cart_${product.id}`, JSON.stringify({ ...product, quantity: 1 }));
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    useEffect(() => {
        setLoading(true);
        axios
            .get(`${API_URL}/${id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err))
            .finally(() => setLoading(false));
    }, [id]);

    useEffect(() => {
        const savedProduct = localStorage.getItem(`cart_${id}`);
        if (savedProduct) {
            const { quantity } = JSON.parse(savedProduct);
            setQuantity(quantity);
            setIsAddedToCart(true);
        }
    }, [id]);

    if (loading) {
        return (
            <div className="loading">
                <div className="loader">
                    <div className="load-inner load-one"></div>
                    <div className="load-inner load-two"></div>
                    <div className="load-inner load-three"></div>
                    <span className="text">Loading...</span>
                </div>
            </div>
        );
    }

    return (
        <div className="container">
            <div className="naviget">
                <div className="naviget__item">
                    <Link to={"/"} className='naviget__item__p'>Главная</Link>
                    <NavigateNextIcon className='naviget__item__activ' />
                </div>
            </div>
            <div className='singleproduct'>
                <img className='single__img' src={product?.image} alt="product" />
                <div className="single__right">
                    <h2 className='single__right__h2'>{product?.title}</h2>
                    <div className="starwrapper">
                        <p className='starwrapper__scott'>Scott: ({product?.category})</p>
                        <div className="starwrapper__centr">
                            <p className='starwrapper__centr__p'>Артикул : 7655-188</p>
                            <div className="starwrapper__centr__icons">
                                {[icon1, icon2, icon3, icon4, icon5].map((icon, index) => (
                                    <button key={index} className='starwrapper__centr__icons__button'>
                                        <img src={icon} alt="icon" />
                                    </button>
                                ))}
                            </div>
                        </div>
                        <p className='starwrapper__p'>В наличии</p>
                    </div>
                    <div className="price">
                        <p className='price__p'>{product?.price} ₽</p>
                        <p className='price__old'>{oldPrice.toFixed(2)}₽</p>
                    </div>
                    <p className="aboutproduct">{product?.desc}</p>
                    <form className='element'>
                        {isAddedToCart && quantity > 0 ? (
                            <div className='kenzo'>
                                <button type='button' className='button__span' onClick={handleDecrement}>-</button>
                                <button type='button' className='quaintity'>{quantity}</button>
                                <button type='button' className='button__span' onClick={() => {
                                    const newQuantity = quantity + 1;
                                    setQuantity(newQuantity);
                                    dispatch(incCart(product));
                                    localStorage.setItem(`cart_${product.id}`, JSON.stringify({ ...product, quantity: newQuantity }));
                                }}>+</button>
                            </div>
                        ) : (
                            <button type='button' className='element__button' onClick={handleAddToCart}>В корзину</button>
                        )}
                        <button type='button' className='span__icons' onClick={() => dispatch(toggleToWishes(product))}>
                            {wishes.some((w) => w.id === product?.id) ? (
                                <FavoriteIcon />
                            ) : (
                                <FavoriteBorderIcon />
                            )}
                        </button>
                    </form>
                </div>
            </div>
            <div className="single__bottm">
                <p className='catalog__title__p'>Популярные товары</p>
                <SingleBtm />
            </div>
        </div>
    );
}

export default Single;
