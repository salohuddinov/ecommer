import React, { memo } from 'react'
import { Link } from 'react-router-dom'

const HeaderTop = () => {
    return (
        <>
            <div className="container">
                <div className="headertop">
                    <div className="header__left">
                        <Link className='header__left__p' to={"/compan"}>О компании</Link>
                        <Link className='header__left__p' to={"/dostafka"}>Доставка и оплата</Link>
                        <Link className='header__left__p' to={"/возврат"}>Возврат</Link>
                        <Link className='header__left__p' to={"/garant"}>Гарантии</Link>
                        <Link className='header__left__p' to={"/contact"}>Контакты</Link>
                        <Link className='header__left__p' to={"/blog"}>Блог</Link>
                    </div>
                    <div className="header__right">
                        <p className='header__right__coll'>8 (800) 890-46-56</p>
                        <p className='header__right__p'>Заказать звонок</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default memo(HeaderTop)