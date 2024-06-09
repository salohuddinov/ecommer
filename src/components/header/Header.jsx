import React, { memo, useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import HeaderTop from '../headertop/HeaderTop';
import logo from '../../images/logo.svg';
import ant from '../../images/ant.svg';
import like from '../../images/like.svg';
import cart from '../../images/cart.svg';
import menu from '../../images/menu.svg';
import humburger from '../../images/humburger.png';
import cros from '../../images/cros.png';
import searrch from '../../images/search.svg';
import { RiMenu2Fill } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";

const Header = () => {
    const [data, setData] = useState([]);
    const [navShrink, setNavShrink] = useState(false);
    const [search, setSearch] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);

    const wishes = useSelector((state) => state.wishlist.value);
    const carts = useSelector((state) => state.cart.value);

    useEffect(() => {
        axios.get("https://6634b1ce9bb0df2359a26949.mockapi.io/api/products")
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, []);

    const handleSearch = (data) => {
        return data.filter(product =>
            product.title.toLowerCase().includes(searchValue.toLowerCase().trim())
        );
    };

    const handleNavShrink = () => {
        if (window.scrollY > 0) {
            setNavShrink(true);
        } else {
            setNavShrink(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleNavShrink);
        return () => {
            window.removeEventListener('scroll', handleNavShrink);
        };
    }, []);

    useEffect(() => {
        setSearchValue("");
    }, [location]);

    const handleMenuClick = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <HeaderTop />
            <header style={{ top: search ? "48px" : "0" }} className={`header ${navShrink ? "nav__shrink" : ""}`} id='header'>
                <nav className="nav container">
                    <NavLink to="/">
                        <img className="nav__logo" src={logo} alt="Logo" />
                    </NavLink>
                    <div className="nav__actions">
                        <button className='nav__actions__button'>
                            <NavLink to="/catalog" className="nav__actions__button">
                                <img src={menu} alt="Menu" />
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
                                <img src={searrch} alt="Search" />
                            </button>
                            {searchValue.trim() && (
                                <ul className='serch__const'>
                                    {handleSearch(data).length ? (
                                        handleSearch(data).map(product => (
                                            <div className="serch__const__div" key={product.id}>
                                                <Link to={`/single/${product.id}`}>
                                                    <h4 className='serch__const__div__h4'>{product.title}</h4>
                                                </Link>
                                                <img className='serch__const__div__img' src={product.image} alt={product.title} />
                                            </div>
                                        ))
                                    ) : (
                                        <p className='empty'>Malumot topilmad</p>
                                    )}
                                </ul>
                            )}
                        </div>
                    </div>
                    <div className="nav__right">
                        <Link to="/wishlist" className='nav__button'>
                            <div className="nav__wishlist__link">
                                <img className='nav__wishlist__link__icon' src={like} alt="Wishlist" />
                                {wishes.length > 0 && <span className='sup__p'>{wishes.length}</span>}
                            </div>
                            <p className='nav__button__p'>Избранное</p>
                        </Link>
                        <Link className='nav__button'>
                            <div className="nav__wishlist__link">
                                <img className='nav__wishlist__link__icon' src={ant} alt="Compare" />
                                <p className='nav__button__p'>Сравнение</p>
                            </div>
                        </Link>
                        <Link to="/cart" className='nav__button'>
                            <div className="nav__wishlist__link">
                                <img className='nav__wishlist__link__icon' src={cart} alt="Cart" />
                                {carts.length > 0 && <span className='sup__p'>{carts.length}</span>}
                                <p className='nav__button__p'>Корзина</p>
                            </div>
                        </Link>
                    </div>
                </nav>
            </header>
            <div className="navbar__responsive">
                <div className="nav__items">
                    <button className="menu" onClick={handleMenuClick}>
                        {menuOpen ? (
                            <img src={cros} alt="Close" style={{ marginLeft: 25 }} />
                        ) : (
                            <img src={humburger} className="menu-icon" alt="Menu" />
                        )}
                    </button>
                    {menuOpen ? (
                        <div className="empty__line"></div>
                    ) : (
                        <img width={150} src={logo} alt="Logo" />
                    )}
                    <div className="nav__right">
                        {menuOpen && <img width={19} src={ant} alt="Compare" />}
                        <Link to="/wishlist" className='nav__button'>
                            <div className="nav__wishlist__link">
                                <img className='nav__wishlist__link__icon' src={like} alt="Wishlist" />
                                {wishes.length > 0 && <span className='sup__p'>{wishes.length}</span>}
                            </div>
                        </Link>
                        <Link to="/cart" className='nav__button'>
                            <div className="nav__wishlist__link">
                                <img className='nav__wishlist__link__icon' src={cart} alt="Cart" />
                                {carts.length > 0 && <span className='sup__p'>{carts.length}</span>}
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="nav__search">
                    <input type="text" placeholder="Поиск по товарам" />
                    <CiSearch className="search__icon" />
                </div>
                <div className={`sidebar ${menuOpen ? "show" : ""}`}>
                    <ul className="nav__infos">
                        <li className="nav__info">О компании</li>
                        <li className="nav__info">Доставка и оплата</li>
                        <li className="nav__info">Возврат</li>
                        <li className="nav__info">Гарантии</li>
                        <li className="nav__info">Контакты</li>
                        <li className="nav__info">Блог</li>
                    </ul>
                    <div className="name">
                        <button className="menu__button">
                            <RiMenu2Fill className="menu-icon" />
                            Каталог
                        </button>
                        <br />
                        <p>8 (800) 890-46-56</p>
                        <li>Заказать звонок</li>
                    </div>
                </div>
            </div>
        </>
    );
}

export default memo(Header);
