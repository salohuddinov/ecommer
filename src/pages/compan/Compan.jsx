import React from 'react'
import { Link } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const Compan = () => {
    return (
        <>
            <div className="container">
                <div className="naviget">
                    <div className="naviget__left">
                        <div className="naviget__left__info">
                            <div className="naviget__item">
                                <Link to={"/"} className='naviget__item__p'>Главная</Link>
                                <NavigateNextIcon className='naviget__item__activ' />
                                <p className='naviget__item__activ'>О компании</p>
                            </div>
                            <p className='naviget__p'>О компании</p>
                        </div>
                        <div className="naviget__left__card">
                            <div className="naviget__left__card__text">
                                <p className='naviget__left__card__text__p'>170+ </p>
                                <p className='naviget__left__card__text__pp'>Товаров</p>
                            </div>
                        </div>
                        <div className="naviget__left__card">
                            <div className="naviget__left__card__text">
                                <p className='naviget__left__card__text__p'>1000+  </p>
                                <p className='naviget__left__card__text__pp'>Довольных покупателей</p>
                            </div>
                        </div>
                        <div className="naviget__left__card">
                            <div className="naviget__left__card__text">
                                <p className='naviget__left__card__text__p'>170+ </p>
                                <p className='naviget__left__card__text__pp'>Товаров</p>
                            </div>
                        </div>
                    </div>
                    <div className="naviget__right">
                        <p className='naviget__right__title'>Обмен и возврат по желанию покупателя</p>
                        <p className='naviget__right__text'>Интернет-магазин NORNLIGHT предлагает широкий ассортимент
                            светильников для освещения вашего дома или офиса. У нас вы найдете разнообразные модели светильников,
                            от современных и стильных до классических и элегантных. Мы предлагаем качественные и надежные
                            <br />
                            <br />
                            светильники от лучших производителей, которые подарят вам комфорт и уют.Покупая светильники в нашем
                            интернет-магазине, вы получаете отличное соотношение цены и качества. Мы осуществляем доставку по всей
                            России, чтобы каждый клиент мог насладиться прекрасным светом и удобством покупки онлайн. Обратитесь
                            к нам сегодня и превратите ваш дом в оазис тепла и света с NORNLIGHT!Интернет-магазин NORNLIGHT предлагает
                            <br />
                            <br />
                            широкий ассортимент светильников для освещения вашего дома или офиса. У нас вы найдете разнообразные
                            модели светильников, от современных и стильных до классических и элегантных. Мы предлагаем качественные
                            и надежные светильники от лучших производителей, которые подарят вам комфорт и уют.Покупая светильники в
                            нашем интернет-магазине, вы получаете отличное соотношение цены и качества. Мы осуществляем доставку
                            по всей России, чтобы каждый клиент мог насладиться прекрасным светом и удобством покупки онлайн.
                            Обратитесь к нам сегодня и превратите ваш дом в оазис тепла и света с NORNLIGHT!</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Compan