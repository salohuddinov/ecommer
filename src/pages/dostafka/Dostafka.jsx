import React from 'react'
import { Link } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Ifrem from '../../components/ifrem/Ifrem';

const Dostafka = () => {
    return (
        <>
            <div className="container">
                <div className="naviget">
                    <div className="naviget__left">
                        <div className="naviget__item">
                            <Link to={"/"} className='naviget__item__p'>Главная</Link>
                            <NavigateNextIcon className='naviget__item__activ' />
                            <p className='naviget__item__activ'>Доставка и оплата</p>
                        </div>
                        <p className='naviget__p'>Доставка и оплата</p>
                    </div>
                    <div className="naviget__right">
                        <p className='naviget__right__title'>Доставка</p>
                        <p className='naviget__right__text'>Мы осуществляем доставку со склада по Москве и Московской области собственной курьерской службой. Транспортными компаниями нашу продукцию мы доставляем по всей территории РФ, а так же по всем странам СНГ. Сроки доставки: 4—6 недель</p>
                        <p className='naviget__right__title'>Курьерская доставка</p>
                        <p className='naviget__right__text'>БЕСПЛАТНО доставим в приделах МКАД любой заказ от 5 000 ₽.Заказы свыше 30 000 ₽ имеют бесплатную доставку, включительно 15 км от МКАД</p>
                        <p className='naviget__right__title'>Самовывоз</p>
                        <p className='naviget__right__text'>Любой заказ можно забрать самостоятельно по адресу:г. Москва, Дмитровское шоссе д.100с2</p>
                    </div>
                </div>
            </div>
            <Ifrem />
        </>
    )
}

export default Dostafka