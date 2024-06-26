import React, { memo } from 'react';
import heroimg from '../../images/hero.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Scrollbar } from 'swiper/modules';

function Herocontent() {
    return (
        <>
            <Swiper>
                <SwiperSlide>
                    <div className="container2">
                        <div className="herobg">
                            <div className="container">
                                <div className="hero">
                                    <div className="hero__left">
                                        <p className='hero__left__p'>Скидка 15% <br /> на все подвесные светильники</p>
                                        <button className='hero__left__button'>до 5 февраля</button>
                                    </div>
                                    <div className="hero__right">
                                        <img className='hero__right__img' src={heroimg} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="container2">
                        <div className="herobg">
                            <div className="container">
                                <div className="hero">
                                    <div className="hero__left">
                                        <p className='hero__left__p'>Скидка 15% <br /> на все подвесные светильники</p>
                                        <button className='hero__left__button'>до 5 февраля</button>
                                    </div>
                                    <div className="hero__right">
                                        <img className='hero__right__img' src={heroimg} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="container2">
                        <div className="herobg">
                            <div className="container">
                                <div className="hero">
                                    <div className="hero__left">
                                        <p className='hero__left__p'>Скидка 15% <br /> на все подвесные светильники</p>
                                        <button className='hero__left__button'>до 5 февраля</button>
                                    </div>
                                    <div className="hero__right">
                                        <img className='hero__right__img' src={heroimg} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="container2">
                        <div className="herobg">
                            <div className="container">
                                <div className="hero">
                                    <div className="hero__left">
                                        <p className='hero__left__p'>Скидка 15% <br /> на все подвесные светильники</p>
                                        <button className='hero__left__button'>до 5 февраля</button>
                                    </div>
                                    <div className="hero__right">
                                        <img className='hero__right__img' src={heroimg} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="container2">
                        <div className="herobg">
                            <div className="container">
                                <div className="hero">
                                    <div className="hero__left">
                                        <p className='hero__left__p'>Скидка 15% <br /> на все подвесные светильники</p>
                                        <button className='hero__left__button'>до 5 февраля</button>
                                    </div>
                                    <div className="hero__right">
                                        <img className='hero__right__img' src={heroimg} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="container2">
                        <div className="herobg">
                            <div className="container">
                                <div className="hero">
                                    <div className="hero__left">
                                        <p className='hero__left__p'>Скидка 15% <br /> на все подвесные светильники</p>
                                        <button className='hero__left__button'>до 5 февраля</button>
                                    </div>
                                    <div className="hero__right">
                                        <img className='hero__right__img' src={heroimg} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="container2">
                        <div className="herobg">
                            <div className="container">
                                <div className="hero">
                                    <div className="hero__left">
                                        <p className='hero__left__p'>Скидка 15% <br /> на все подвесные светильники</p>
                                        <button className='hero__left__button'>до 5 февраля</button>
                                    </div>
                                    <div className="hero__right">
                                        <img className='hero__right__img' src={heroimg} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="container2">
                        <div className="herobg">
                            <div className="container">
                                <div className="hero">
                                    <div className="hero__left">
                                        <p className='hero__left__p'>Скидка 15% <br /> на все подвесные светильники</p>
                                        <button className='hero__left__button'>до 5 февраля</button>
                                    </div>
                                    <div className="hero__right">
                                        <img className='hero__right__img' src={heroimg} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

        </>
    )
}

export default memo(Herocontent);