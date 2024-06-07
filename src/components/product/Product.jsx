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
import PropTypes from 'prop-types';

const Product = ({ data }) => {
    const dispatch = useDispatch();
    const wishes = useSelector((state) => state.wishlist.value);
    const cart = useSelector((state) => state.cart.value);

    return (
        <div className="container">
            <div className="catalog__title">
                <p className='catalog__title__p'>Популярные товары</p>
                <button className='catalog__title__button'>
                    Весь каталог <EastIcon />
                </button>
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
                    {data?.map((product) => (
                        <div key={product.id} className="card">
                            <button
                                className='card__like__button'
                                onClick={() => dispatch(toggleToWishes(product))}
                            >
                                {wishes.some((w) => w.id === product.id) ? (
                                    <FavoriteIcon />
                                ) : (
                                    <FavoriteBorderIcon />
                                )}
                            </button>
                            <img
                                className='card__image'
                                src={product.thumbnail}
                                alt={product.title}
                            />
                            <Link to={`/single/${product.id}`}>
                                <h4 className='card__title__h4'>{product.title}</h4>
                            </Link>
                            <div className="card__costm">
                                <div className="card__costm__left">
                                    <p className="card__costm__left__old">{product.discountPercentage} ₽</p>
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
                    ))}
                </div>
            </div>
        </div>
    );
};

Product.propTypes = {
    data: PropTypes.array.isRequired,
};

export default memo(Product);
