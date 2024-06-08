import React from 'react'
import { Link } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const Garant = () => {
    return (
        <>
            <div className="container">
                <div className="naviget">
                    <div className="naviget__left">
                        <div className="naviget__item">
                            <Link to={"/"} className='naviget__item__p'>Главная</Link>
                            <NavigateNextIcon className='naviget__item__activ' />
                            <p className='naviget__item__activ'>Гарантии</p>
                        </div>
                        <p className='naviget__p'>Гарантии</p>
                    </div>
                    <div className="naviget__right">
                        <p className='naviget__right__title'>Обмен и возврат по желанию покупателя</p>
                        <p className='naviget__right__text'>Все товары в магазине «NornLight» имеют гарантию. Она заявляется производителем и имеет определенный срок действия на различные группы товаров.
                            Если ваше изделие вышло из строя в течение гарантийного срока вы можете обратиться к нам и получить бесплатный ремонт. Для этого нужно:
                            Предоставить чек, накладную или сообщить почту или номер телефона, указанные при оформлении заказа.
                            Привезти товар к нам на склад или отправить его транспортной компанией.
                            После товар отправляется на экспертизу и ремонт. Если ремонт невозможен, мы обменяем изделие на аналогичное либо вернем деньги за покупку.
                            Обращаем внимание, что «А-Свет» не является сервисным центром, а выполняет роль посредника между клиентом и поставщиком.
                            Поэтому сроки проведения ремонта могут отличаться для товаров различных брендов.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Garant