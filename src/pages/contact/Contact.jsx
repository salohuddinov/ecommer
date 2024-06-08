import React from 'react'
import { Link } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Ifrem from '../../components/ifrem/Ifrem';

const Contact = () => {
    return (
        <>
            <div className="container">
                <div className="naviget">
                    <div className="naviget__left">
                        <div className="naviget__item">
                            <Link to={"/"} className='naviget__item__p'>Главная</Link>
                            <NavigateNextIcon className='naviget__item__activ' />
                            <p className='naviget__item__activ'>Контакты</p>
                        </div>
                        <p className='naviget__p'>Контакты</p>
                    </div>
                    <div className="naviget__right">
                        <p className='naviget__right__coll'>8 (800) 890-46-56</p>
                        <p className='naviget__right__p'>Пн-Пт: 10:00 до 19:00 <br /> Сб-Вс: заказ через корзину <br /> Телефоны: </p>
                    </div>
                </div>
            </div>
            <Ifrem />
        </>
    )
}

export default Contact