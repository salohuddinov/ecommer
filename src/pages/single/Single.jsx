import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import axios from "../../api";
import { toggleToWishes } from "../../context/wishlistSlice";
import { addToCart } from "../../context/cartSlice";
import { API_URL } from '../../static'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import icon1 from '../../images/icon1.png'
import icon2 from '../../images/icon2.png'
import icon3 from '../../images/icon3.png'
import icon4 from '../../images/icon4.png'
import icon5 from '../../images/icon5.png'

function Single() {
    const [product, setProduct] = useState(null)
    const [loading, setLoding] = useState(false)
    const dispatch = useDispatch();
    const wishes = useSelector((state) => state.wishlist.value);
    const cart = useSelector((state) => state.cart.value);
    const { id } = useParams()

    const [data, setData] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
        axios
            .get("/products")
            .then((res) => setData(res.data.products))
            .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [id])

    useEffect(() => {
        window.scrollTo(0, 0)
        setLoding(true)
        axios
            .get(`${API_URL}/${id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err))
            .finally(() => setLoding(false))
    }, [])

    if (loading) {
        return <div className="loading">
            <div class="loader">
                <div class="load-inner load-one"></div>
                <div class="load-inner load-two"></div>
                <div class="load-inner load-three"></div>
                <span class="text">Loading...</span>
            </div>
        </div>
    };

    return (
        <>
            <div className="container">
                <div className='singleproduct'>
                    <img className='single__img' src={product?.thumbnail} alt="sg" />
                    <div className="single__right">
                        <h2 className='single__right__h2'>{product?.title}</h2>
                        <div className="starwrapper">
                            <p className='starwrapper__scott'>Scott: ({product?.rating} )</p>
                            <div className="starwrapper__centr">
                                <p className='starwrapper__centr__p'>Артикул : 7655-188</p>
                                <div className="starwrapper__centr__icons">
                                    <button className='starwrapper__centr__icons__button'>
                                        <img src={icon1} alt="dnkj" />
                                    </button>
                                    <button className='starwrapper__centr__icons__button'>
                                        <img src={icon2} alt="dnkj" />
                                    </button>
                                    <button className='starwrapper__centr__icons__button'>
                                        <img src={icon3} alt="dnkj" />
                                    </button>
                                    <button className='starwrapper__centr__icons__button'>
                                        <img src={icon4} alt="dnkj" />
                                    </button>
                                    <button className='starwrapper__centr__icons__button'>
                                        <img src={icon5} alt="dnkj" />
                                    </button>
                                </div>
                            </div>
                            <p className='starwrapper__p'>В наличии</p>
                        </div>
                        <div className="price">
                            <p className='price__p'>{product?.price} ₽</p>
                            <p className='price__old'>{product?.discountPercentage}₽</p>
                        </div>
                        <p className="aboutproduct">Профессиональный гоночный хардтейл для кросс-кантри уровня Чемпионата и Кубка Мира. Одна из самых легких рам среди гоночных хардтейлов для кросс-кантри.</p>
                        <form className='element'>
                            <div className='kenzo'>
                                <button type='button' className='button__span'>-</button>
                                <button type='button' className='quaintity'>2</button>
                                <button type='button' className='button__span'>+</button>
                            </div>
                            <button type='button' className='element__button' onClick={() => dispatch(addToCart(el))}>В корзину</button>
                            <button type='button' className='span__icons' onClick={() => dispatch(toggleToWishes(el))}><FavoriteBorderIcon /></button>
                        </form>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Single