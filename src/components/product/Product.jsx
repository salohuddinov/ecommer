import React, { memo } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleToWishes } from "../../context/wishlistSlice";
import { addToCart } from "../../context/cartSlice";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import EastIcon from '@mui/icons-material/East';

const Product = ({ data, onSeeMore }) => {
    const dispatch = useDispatch();
    const wishes = useSelector((state) => state.wishlist.value);
    const cart = useSelector((state) => state.cart.value);

    return (
        <div className="container">
            <div className="catalog__title">
                <p className='catalog__title__p'>Популярные товары</p>
                <Link to={"/allproduct"} className='catalog__title__button'>
                    Все товары <EastIcon />
                </Link>
            </div>
            <div className="category">
                <p className="category__p">Светильники</p>
                <p className="category__p">Люстры</p>
                <p className="category__p">Лампы</p>
                <p className="category__p">Настольные лампы</p>
                <p className="category__p">Ночники</p>
                <p className="category__p">Подсветка</p>
                <p className="category__p">Уличное освещение</p>
                <p className="category__p">Мебельные установки</p>
            </div>
            <div className="product">
                <div className="product__wrapper">
                    {data?.map((product) => {
                        const discountRate = 0.1;
                        const oldPrice = product.price / (1 - discountRate);
                        return (
                            <div key={product.id} className="card">
                                <button className='card__like__button' onClick={() => dispatch(toggleToWishes(product))}>
                                    {wishes.some((w) => w.id === product.id) ? (
                                        <FavoriteIcon />
                                    ) : (
                                        <FavoriteBorderIcon />
                                    )}
                                </button>
                                <img className='card__image' src={product.image} alt={product.title} />
                                <Link to={`/single/${product.id}`}>
                                    <h4 className='card__title__h4'>{product.title}</h4>
                                </Link>
                                <div className="card__costm">
                                    <div className="card__costm__left">
                                        <s className="card__costm__left__oldprice">{oldPrice.toFixed(2)} ₽</s>
                                        <p className="card__costm__left__price">{product.price} ₽</p>
                                    </div>
                                    <button
                                        className='card__costm__right'
                                        onClick={() => dispatch(addToCart(product))}
                                    >
                                        {cart.some((c) => c.id === product.id) ? (
                                            <ShoppingCartRoundedIcon className="card__costm__right__icon" />
                                        ) : (
                                            <ShoppingCartOutlinedIcon className="card__costm__right__icon" />
                                        )}
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <button className="see-more-button" onClick={onSeeMore}>See More</button>
            </div>
        </div>
    );
};

export default memo(Product);
