import React, { memo, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from "../../api";
import Product from '../../components/product/Product';
import { incCart, decCart, removeFromCart } from '../../context/cartSlice';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import not from '../../images/empty.png'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Link } from 'react-router-dom';

const BOT_TOKEN = "7060301731:AAFUiEIF-Hs_s5zEwb_kulUMJGkpLLC2dxw";
const CHAT_ID = "-1002035416931";


const Cart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    axios
      .get("/products")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cart.forEach((product) => {
      totalPrice += product.price * product.quantity;
    });
    return totalPrice;
  };
  let cart = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();

  const handleDecrement = (el) => {
    if (el.quantity <= 1) {
      dispatch(removeFromCart(el));
    } else {
      dispatch(decCart(el));
    }
  };
  const [name, setName] = useState("");
  const [adres, setAdres] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  let total = 0;

  let itemss = cart?.map((el, index) => {
    const subtotal = el.price * el.quantity;
    total += subtotal;
  });



  const handleOrder = (e) => {
    e.preventDefault()
    if (!name.trim() || !email.trim()) {
      return toast.warn("Malumot to'liq emas")
    }
    e.preventDefault()
    if (!phone.trim() || !phone.trim()) {
      return toast.warn("Malumot to'liq emas")
    }
    let text = "Buyurtma %0A%0A";
    text += ` ФИО: ${name} %0A`;
    text += `Telefon raqami: ${phone} %0A`;
    text += `Email: ${email} %0A`;
    text += `Adres: ${adres} %0A`;

    cart.forEach((product) => {
      text += `${product.title} %0A`;
      text += `Narxi: ${product.price} %0A`;
      text += `Soni: ${product.quantity} %0A`;
      text += `Jami: ${product.price * product.quantity} %0A`;
      text += `%0A%0A`;
    });
    text += `Jami narxi: ${calculateTotalPrice()}`;
    let url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}`;
    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
    setName("");
    setAdres("");
    setEmail("");
    setPhone("");
    cart.forEach((product) => {
      dispatch(removeFromCart(product));
    });
  };


  let cartItems = cart?.map((el) => (
    <div key={el.id} className='carts__top__items'>
      <div className="carts__top__items__left">
        <img className='carts__top__items__left__img' src={el.image} width={100} alt={el.brand} />
        <div className="carts__top__items__left__text">
          <p className='carts__top__items__left__text__title'>{el.title}</p>
          <p className='carts__top__items__left__text__price'>{el.price.toFixed(1)} ₽</p>
        </div>
      </div>
      <p className='carts__top__items__p'>Светильник RADUGA COMBO XS Промышленное освещение; 50Вт; 230В; S4; XS;</p>
      <p className='carts__top__items__ollprice'>{(el.price * el.quantity).toFixed(1)} ₽</p>
      <div className="carts__top__items__right">
        <div className="carts__top__items__right__sort">
          <button className='carts__top__items__right__sort__button' onClick={() => handleDecrement(el)}> - </button>
          <div className="carts__top__items__right__sort__quaint">
            <p className='carts__top__items__right__sort__quaint__p'>{el.quantity}</p>
          </div>
          <button className='carts__top__items__right__sort__button' onClick={() => dispatch(incCart(el))}> + </button>
        </div>
        <button className='carts__top__items__right__button' onClick={() => dispatch(removeFromCart(el))}> <DeleteForeverIcon /> </button>
      </div>
    </div>
  ));

  const cartItemtop = (
    <div className="carts__top__info">
      <div className="carts__top__info__left">
        <p className='carts__top__info__left__p'>Фото</p>
        <p className='carts__top__info__left__p'>Товары</p>
      </div>
      <p className='carts__top__info__left__p'>Описание</p>
      <div className="carts__top__info__right">
        <p className='carts__top__info__left__p'>Артикул</p>
        <p className='carts__top__info__left__p'>Количество</p>
      </div>
    </div>
  );

  const cardContent =
    (<form className='checkout__form' action="">
      <p className='checkout__form__p'>Оформление</p>
      <div className="checkout__form__intro">
        <input required onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder='ФИО' />
        <input required onChange={(e) => setPhone(e.target.value)} value={phone} type="text" placeholder='телефон' />
        <input required onChange={(e) => setEmail(e.target.value)} value={email} type="text" placeholder='Электронная почта' />
      </div>
      <div className="checkout__form__adrec">
        <p className='checkout__form__p'>Доставка</p>
        <input className='checkout__form__adrec__input' required onChange={(e) => setAdres(e.target.value)} value={adres} type="text" placeholder='Адрес доставки' />
        <textarea className='checkout__form__adrec__text' placeholder='Address for Delivery' required></textarea>
      </div>
    </form>
    );
  const oplata = (
    <div className="oplata">
      <p className='checkout__form__p'>Оплата</p>
      <div className="oplata__top">
        <p className='oplata__top__p'>Товары................................................{total.toFixed(1)} ₽</p>
        <p className='oplata__top__p'>Доставка..............................................580₽</p>
      </div>
      <p className='oplata__price'>{total.toFixed(1)} ₽</p>
      <div className="oplata__cupit">
        <button className='oplata__cupit__button' onClick={handleOrder}>Купить</button>
        <p className='oplata__cupit__p'>Я согласен наобработку моих персональных данных</p>
      </div>
    </div>
  )
  let cartContent;
  if (cartItems.length === 0) {
    cartContent = (<img className="not__found container" src={not} alt="" />
    );
  } else {
    cartContent = <div className="carts"><div className="carts__top">{cartItemtop} {cartItems}</div> {cardContent}{oplata}</div>;
  }

  return (
    <div className="container">
      <div className="naviget">
        <div className="naviget__left">
          <div className="naviget__left__info">
            <div className="naviget__item">
              <Link to={"/"} className='naviget__item__p'>Главная</Link>
              <NavigateNextIcon className='naviget__item__p' />
              <Link to={"/catalog"} className='naviget__item__p'>Каталог</Link>
              <NavigateNextIcon className='naviget__item__activ' />
              <p className='naviget__item__activ'>Корзина</p>
            </div>
            <p className='naviget__p'>Корзина</p>
          </div>
        </div>
      </div>
      <div className="cart">
        {cartContent}
      </div>
      <Product data={data.slice(0, 4)} />
    </div>
  );
}

export default memo(Cart);
