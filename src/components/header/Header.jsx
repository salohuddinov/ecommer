import React, { memo, useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import HeaderTop from '../headertop/HeaderTop';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import logo from '../../images/logo.svg'
import ant from '../../images/ant.svg'
import like from '../../images/like.svg'
import cart from '../../images/cart.svg'
import menu from '../../images/menu.svg'
import searrch from '../../images/search.svg'



export default memo(function Header() {
    const [data, setData] = useState([]);
    const [navShrink, setNavShrink] = useState(false);
    const [search, setSearch] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const location = useLocation();

    // Redux dan wishes va carts holatini olish
    const wishes = useSelector((state) => state.wishlist.value);
    const carts = useSelector((state) => state.cart.value);

    useEffect(() => {
        axios
            .get("https://dummyjson.com/products")
            .then(res => setData(res.data.products))
            .catch(err => console.log(err));
    }, []);

    let handleSearch = (data) => {
        return data?.filter(product => product.title.toLowerCase().includes(searchValue.toLowerCase().trim()));
    }

    const handleNavShrink = () => {
        if (window.scrollY > 0) {
            setNavShrink(true);
        } else {
            setNavShrink(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleNavShrink);
        return () => {
            window.removeEventListener('scroll', handleNavShrink);
        };
    }, []);

    useEffect(() => {
        setSearchValue("");
    }, [location]);

    return (
        <>
            <HeaderTop />
            <header style={search ? { top: "48px" } : { top: "0" }} className={`header ${navShrink ? "nav__shrink" : ""}`} id='header'>
                <nav className="nav container">
                    <NavLink to={"/"} >
                        <img className="nav__logo" src={logo} alt="" />
                    </NavLink>
                    <div className="nav__actions">
                        <button className='nav__actions__button'>
                            <NavLink to={"#"} className="nav__actions__button">
                                <img src={menu} alt="jdsjb" />
                                <p className='nav__actions__button__p'>Каталог</p>
                            </NavLink>
                        </button>
                        <div className='nav__search__box'>
                            <input
                                type="search"
                                value={searchValue}
                                onChange={(e) => setSearchValue(e.target.value)}
                                className="nav__search__input"
                                placeholder="Поиск по товарам"
                            />
                            <button className='nav__input__button'>
                                <img src={searrch} alt="jdsjbdj" />
                            </button>
                            <ul className='serch__const'>
                                {
                                    searchValue.trim() ?
                                        handleSearch(data).length ?
                                            handleSearch(data)?.map(product => (
                                                <div className="serch__const__div" key={product.id}>
                                                    <Link to={`/single/${product.id}`}>
                                                        <h4 className='serch__const__div__h4'>{product.title}</h4>
                                                    </Link>
                                                    <img className='serch__const__div__img' src={product.thumbnail} alt={product.title} />
                                                </div>
                                            ))
                                            :
                                            <p className='empty'>Malumot topilmad</p>
                                        :
                                        <></>
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="nav__right">
                        <Link to={"/wishlist"} className='nav__button'>
                            <div className="nav__wishlist__link">
                                <img className='nav__wishlist__link__icon' src={like} alt="jsjsbjs" />
                                {wishes.length > 0 ? (
                                    <span className='sup__p'>{wishes.length}</span>
                                ) : (
                                    <></>
                                )}
                            </div>
                            <p className='nav__button__p'>Избранное</p>
                        </Link>
                        <Link className='nav__button' to={"/admin"}>
                            <div className="nav__wishlist__link">
                                <img className='nav__wishlist__link__icon' src={ant} alt="" />
                                <p className='nav__button__p'>Сравнение</p>
                            </div>
                        </Link>
                        <Link to={"/cart"} className='nav__button'>
                            <div className="nav__wishlist__link">
                                <img className='nav__wishlist__link__icon' src={cart} alt="jsbah" />
                                {carts.length > 0 ? (
                                    <span className='sup__p'>{carts.length}</span>
                                ) : (
                                    <></>
                                )}
                                <p className='nav__button__p'>Корзина</p>
                            </div>
                        </Link>
                    </div>
                </nav>
            </header >
        </>
    );
}
)