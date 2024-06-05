import React from 'react'
import EastIcon from '@mui/icons-material/East';
import farme from '../../images/frame.png'
import farme1 from '../../images/frame1.png'
import farme2 from '../../images/frame2.png'
import farme3 from '../../images/frame3.png'


function Section() {
    return (
        <>
            <div className="container">
                <div className="section">
                    <div className="catalog__title">
                        <p className='catalog__title__p'>Почему NORNLIGHT?</p>
                        <button className='catalog__title__button'>Весь каталог <EastIcon /> </button>
                    </div>
                    <div className="section__wrapper">
                        <div className="section__wrapper__card">
                            <button className='section__wrapper__card__img'><img src={farme} alt="jshjbsa" /></button>
                            <div className="section__wrapper__card__title">
                                <h3 className='section__wrapper__card__title__h3'>Только <br /> проверенные <br /> бренды</h3>
                                <p className='section__wrapper__card__title__p'>Бренды, проверенные временем и качеством</p>
                            </div>
                        </div>
                        <div className="section__wrapper__card">
                            <button className='section__wrapper__card__img'><img src={farme1} alt="jshjbsa" /></button>
                            <div className="section__wrapper__card__title">
                                <h3 className='section__wrapper__card__title__h3'>Самые низкие <br /> цены</h3>
                                <p className='section__wrapper__card__title__p'>Ниже не будет нигде</p>
                            </div>
                        </div>
                        <div className="section__wrapper__card">
                            <button className='section__wrapper__card__img'><img src={farme3} alt="jshjbsa" /></button>
                            <div className="section__wrapper__card__title">
                                <h3 className='section__wrapper__card__title__h3'>Быстрая доствка</h3>
                                <p className='section__wrapper__card__title__p'>Доставляем по всей РФ <br />за 1-10 дней</p>
                            </div>
                        </div>
                        <div className="section__wrapper__card">
                            <button className='section__wrapper__card__img'><img src={farme2} alt="jshjbsa" /></button>
                            <div className="section__wrapper__card__title">
                                <h3 className='section__wrapper__card__title__h3'>Большой ассортимент</h3>
                                <p className='section__wrapper__card__title__p'>Более 1000 товаров</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section