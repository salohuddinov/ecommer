import React, { memo } from 'react'

const HeaderTop = () => {
    return (
        <>
            <div className="container">
                <div className="headertop">
                    <div className="header__left">
                        <p className='header__left__p'>О компании</p>
                        <p className='header__left__p'>Доставка и оплата</p>
                        <p className='header__left__p'>Возврат</p>
                        <p className='header__left__p'>Гарантии</p>
                        <p className='header__left__p'>Контакты</p>
                        <p className='header__left__p'>Блог</p>
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