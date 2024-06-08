import React, { memo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import img1 from '../../images/img1.png';
import img2 from '../../images/img2.png';
import img3 from '../../images/img3.png';
import upp from '../../images/up.png';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <div className="container">
            <div className="naviget">
                <div className="naviget__left">
                    <div className="naviget__left__info">
                        <div className="naviget__item">
                            <Link to={"/"} className='naviget__item__p'>Главная</Link>
                            <NavigateNextIcon className='naviget__item__activ' />
                            <p className='naviget__item__activ'>Блог</p>
                        </div>
                        <p className='naviget__p'>Блог</p>
                    </div>
                </div>
            </div>
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
            <br />
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
            <br />
            <br />
        </div>
    );
};

export default memo(Blog);
