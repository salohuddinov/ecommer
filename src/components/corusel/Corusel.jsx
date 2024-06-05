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
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
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
                <div className="catalog__title">
                    <p className='catalog__title__p'>Блог</p>
                    <button className='catalog__title__button'>Весь каталог <EastIcon /> </button>
                </div>
            </div>
        </>
    )
}

export default memo(Corusel)