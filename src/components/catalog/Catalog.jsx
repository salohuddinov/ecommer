import React, { memo } from 'react'
import catalog1 from '../../images/catalog1.png'
import catalog2 from '../../images/catalog2.png'
import catalog3 from '../../images/catalog3.png'
import catalog4 from '../../images/catalog4.png'
import catalog5 from '../../images/catalog5.png'
import catalog6 from '../../images/catalog6.png'
import EastIcon from '@mui/icons-material/East';

function Catalog() {
    return (
        <>
            <div className="container">
                <div className="catalog__title">
                    <p className='catalog__title__p'>Каталог</p>
                    <button className='catalog__title__button'>Весь каталог <EastIcon /> </button>
                </div>
                <div className="catalog__wrapper">
                    <div className="catalog__wrapper__card">
                        <div className="catalog__wrapper__card__left">
                            <p className='catalog__wrapper__card__left__p'>Люстры</p>
                            <button className='catalog__wrapper__card__left__button'>От 540₽ <EastIcon /> </button>
                        </div>
                        <img className='catalog__wrapper__card__right' src={catalog1} alt="" />
                    </div>
                    <div className="catalog__wrapper__card">
                        <div className="catalog__wrapper__card__left">
                            <p className='catalog__wrapper__card__left__p'>Светильники</p>
                            <button className='catalog__wrapper__card__left__button'>От 540₽ <EastIcon /> </button>
                        </div>
                        <img className='catalog__wrapper__card__right' src={catalog2} alt="" />
                    </div>
                    <div className="catalog__wrapper__card">
                        <div className="catalog__wrapper__card__left">
                            <p className='catalog__wrapper__card__left__p'>Бра</p>
                            <button className='catalog__wrapper__card__left__button'>От 540₽ <EastIcon /> </button>
                        </div>
                        <img className='catalog__wrapper__card__right' src={catalog3} alt="" />
                    </div>
                    <div className="catalog__wrapper__card">
                        <div className="catalog__wrapper__card__left">
                            <p className='catalog__wrapper__card__left__p'>Торшеры</p>
                            <button className='catalog__wrapper__card__left__button'>От 540₽ <EastIcon /> </button>
                        </div>
                        <img className='catalog__wrapper__card__right' src={catalog4} alt="" />
                    </div>
                    <div className="catalog__wrapper__card">
                        <div className="catalog__wrapper__card__left">
                            <p className='catalog__wrapper__card__left__p'>Настольные лампы</p>
                            <button className='catalog__wrapper__card__left__button'>От 540₽ <EastIcon /> </button>
                        </div>
                        <img className='catalog__wrapper__card__right' src={catalog5} alt="" />
                    </div>
                    <div className="catalog__wrapper__card">
                        <div className="catalog__wrapper__card__left">
                            <p className='catalog__wrapper__card__left__p'>Споты</p>
                            <button className='catalog__wrapper__card__left__button'>От 540₽ <EastIcon /> </button>
                        </div>
                        <img className='catalog__wrapper__card__right' src={catalog6} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Catalog