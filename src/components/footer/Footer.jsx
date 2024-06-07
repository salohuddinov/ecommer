import React, { memo } from 'react'
import logo from '../../images/logo.svg'
import footer from '../../images/footer.png'
import wk from '../../images/wk.png'
import { Link } from 'react-router-dom'


function Footer() {
    return (
        <>
            <div className="footerbg">
                <div className="container">
                    <div className="footer">
                        <div className="footer__card">
                            <Link to={"/"}><img className='footer__card__img' src={logo} alt="footer__card" /></Link>
                            <p className='footer__card__coll'>8 (800) 890-46-56</p>
                            <img className='footer__card__img2' src={footer} alt="footer__card" />
                            <p className='footer__card__politka'>Политика конфидециальности</p>
                            <p className='footer__card__politka'>Пользовательское соглашение</p>
                            <div className="footer__card__icon">
                                <img src={wk} alt="dnsjbdh" />
                                <img src={wk} alt="dnsjbdh" />
                                <img src={wk} alt="dnsjbdh" />
                            </div>
                        </div>
                        <div className="footer__card">
                            <p className='footer__card__title'>Покупателям</p>
                            <p className='footer__card__lorem'>О компании</p>
                            <p className='footer__card__lorem'>Доставка и оплата</p>
                            <p className='footer__card__lorem'>Возврат</p>
                            <p className='footer__card__lorem'>Гарантии</p>
                            <p className='footer__card__lorem'>Контакты</p>
                            <p className='footer__card__lorem'>Блог</p>
                        </div>
                        <div className="footer__card">
                            <p className='footer__card__title'>Товары</p>
                            <p className='footer__card__lorem'>Люстры</p>
                            <p className='footer__card__lorem'>Светильники</p>
                            <p className='footer__card__lorem'>Бра</p>
                            <p className='footer__card__lorem'>Торшеры</p>
                            <p className='footer__card__lorem'>Комплектуюшие</p>
                            <p className='footer__card__lorem'>Настольные лампы</p>
                        </div>
                        <div className="footer__card">
                            <p className='footer__card__lorem'>Споты</p>
                            <p className='footer__card__lorem'>Трековые светильники</p>
                            <p className='footer__card__lorem'>Уличные светильники</p>
                            <p className='footer__card__lorem'>Технические светильники</p>
                            <p className='footer__card__lorem'>Светодиодные ленты</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default memo(Footer)