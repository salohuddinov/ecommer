// import React, {  } from 'react';
import React, { memo, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import rasm1 from '../../images/rasm1.png'
import rasm2 from '../../images/rasm2.png'
import rasm3 from '../../images/rasm3.png'
import rasm4 from '../../images/rasm4.png'
import EastIcon from '@mui/icons-material/East';
import img1 from '../../images/img1.png'
import img2 from '../../images/img2.png'
import img3 from '../../images/img3.png'
import upp from '../../images/up.png'


function Corusel() {
    return (
        <>
            <div className="container">
                <div className="catalog__title">
                    <p className='catalog__title__p'>Только проверенные бренды</p>
                </div>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    freeMode={true}
                    loop={true}
                    modules={[Pagination, Navigation]}
                    className='swiper'
                >
                    <SwiperSlide>
                        <div className="corisel__item">
                            <img className='corisel__item__img' src={rasm1} alt="jsj" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="corisel__item">
                            <img className='corisel__item__img' src={rasm2} alt="jsj" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="corisel__item">
                            <img className='corisel__item__img' src={rasm3} alt="jsj" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="corisel__item">
                            <img className='corisel__item__img' src={rasm4} alt="jsj" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="corisel__item">
                            <img className='corisel__item__img' src={rasm1} alt="jsj" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="corisel__item">
                            <img className='corisel__item__img' src={rasm3} alt="jsj" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="corisel__item">
                            <img className='corisel__item__img' src={rasm2} alt="jsj" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="corisel__item">
                            <img className='corisel__item__img' src={rasm4} alt="jsj" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="corisel__item">
                            <img className='corisel__item__img' src={rasm1} alt="jsj" />
                        </div>
                    </SwiperSlide>
                </Swiper>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    freeMode={true}
                    loop={true}
                    modules={[Pagination, Navigation]}
                    className='swiper__md'
                >
                    <SwiperSlide>
                        <div className="corisel__item">
                            <img className='corisel__item__img' src={rasm1} alt="jsj" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="corisel__item">
                            <img className='corisel__item__img' src={rasm2} alt="jsj" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="corisel__item">
                            <img className='corisel__item__img' src={rasm3} alt="jsj" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="corisel__item">
                            <img className='corisel__item__img' src={rasm4} alt="jsj" />
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className="catalog__title">
                    <p className='catalog__title__p'>Блог</p>
                    <button className='catalog__title__button'>Перейти в блог <EastIcon /> </button>
                </div>
                <div className="blog">
                    <div className="blog__wrapper">
                        <div className="blog__wrapper__card">
                            <img className='blog__wrapper__card__img' src={img1} alt="blog__wrapper__card" />
                            <div className="blog__wrapper__card__title">
                                <p className='blog__wrapper__card__title__p'> Как правильно освещать дом снаружи?</p>
                                <img className='blog__wrapper__card__title__img' src={upp} alt="blog__wrapper__card" />
                            </div>
                            <p className='blog__wrapper__card__time'>01.01.2024</p>
                        </div>
                        <div className="blog__wrapper__card">
                            <img className='blog__wrapper__card__img' src={img2} alt="blog__wrapper__card" />
                            <div className="blog__wrapper__card__title">
                                <p className='blog__wrapper__card__title__p'> Как правильно освещать дом снаружи?</p>
                                <img className='blog__wrapper__card__title__img' src={upp} alt="blog__wrapper__card" />
                            </div>
                            <p className='blog__wrapper__card__time'>01.01.2024</p>
                        </div>
                        <div className="blog__wrapper__card">
                            <img className='blog__wrapper__card__img' src={img3} alt="blog__wrapper__card" />
                            <div className="blog__wrapper__card__title">
                                <p className='blog__wrapper__card__title__p'> Как правильно освещать дом снаружи?</p>
                                <img className='blog__wrapper__card__title__img' src={upp} alt="blog__wrapper__card" />
                            </div>
                            <p className='blog__wrapper__card__time'>01.01.2024</p>
                        </div>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            freeMode={true}
                            loop={true}
                            modules={[Pagination, Navigation]}
                            className='blog__wrapper__md'
                        >
                            <SwiperSlide>
                                <div className="blog__wrapper__md__card">
                                    <img className='blog__wrapper__md__card__img' src={img1} alt="blog__wrapper__card" />
                                    <div className="blog__wrapper__md__card__title">
                                        <p className='blog__wrapper__md__card__title__p'> Как правильно освещать дом снаружи?</p>
                                        <img className='blog__wrapper__md__card__title__img' src={upp} alt="blog__wrapper__card" />
                                    </div>
                                    <p className='blog__wrapper__md__card__time'>01.01.2024</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="blog__wrapper__md__card">
                                    <img className='blog__wrapper__md__card__img' src={img2} alt="blog__wrapper__card" />
                                    <div className="blog__wrapper__md__card__title">
                                        <p className='blog__wrapper__md__card__title__p'> Как правильно освещать дом снаружи?</p>
                                        <img className='blog__wrapper__md__card__title__img' src={upp} alt="blog__wrapper__card" />
                                    </div>
                                    <p className='blog__wrapper__md__card__time'>01.01.2024</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="blog__wrapper__md__card">
                                    <img className='blog__wrapper__md__card__img' src={img3} alt="blog__wrapper__card" />
                                    <div className="blog__wrapper__md__card__title">
                                        <p className='blog__wrapper__md__card__title__p'> Как правильно освещать дом снаружи?</p>
                                        <img className='blog__wrapper__md__card__title__img' src={upp} alt="blog__wrapper__card" />
                                    </div>
                                    <p className='blog__wrapper__md__card__time'>01.01.2024</p>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
                <div className="blog__bottm">
                    <p className='blog__bottm__p555'>Блог</p>
                    <p className='blog__bottm__p'>Производство светильников</p>
                    <p className='blog__bottm__pp'>Интернет-магазин NORNLIGHT предлагает широкий ассортимент светильников для освещения вашего дома или офиса. У нас вы найдете разнообразные модели светильников, от современных и стильных до классических и элегантных. Мы предлагаем качественные и надежные светильники от лучших производителей, которые подарят вам комфорт и уют.
                        <br />
                        <br />
                        Покупая светильники в нашем интернет-магазине, вы получаете отличное соотношение цены и качества. Мы осуществляем доставку по всей России, чтобы каждый клиент мог насладиться прекрасным светом и удобством покупки онлайн. Обратитесь к нам сегодня и превратите ваш дом в оазис тепла и света с NORNLIGHT!
                    </p>
                </div>
            </div>
        </>
    )
}

export default memo(Corusel)