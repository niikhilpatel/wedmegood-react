import React from 'react'
import './Swiper.css'
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';    
import 'swiper/css/navigation';
import { Navigation,Autoplay } from 'swiper/modules';

const Swiper3 = () => {
    return (
        <>
            <section>
                <div class="second-page-section">
                    <div class="container">
                        <div class="second-page">
                            <div class="second-page-heading">
                            Fake Wedding Stories
                            </div>
                            <Swiper
                                spaceBetween={20}
                                slidesPerView={3}
                                loop={true}
                                modules={[Navigation,Autoplay]}
                                autoplay={{
                                    delay: 2000,
                                    pauseOnMouseEnter: true
                                }}
                            >
                                <SwiperSlide>
                                    <div class="swiper-section-container-11">
                                        <div class="slider-content">
                                            <div class="slider-item">
                                                <div class="slider-head">Lorem, Ipsum</div>
                                                <div class="slider-para">Lorem ipsum dolor sit amet consectetur adipisicing
                                                    elit.
                                                    Expedita similique saepe, reiciendis aperiam illo ipsa!</div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div class="swiper-section-container-12">
                                        <div class="slider-content">
                                            <div class="slider-item">
                                                <div class="slider-head">Lorem, Ipsum</div>
                                                <div class="slider-para">Lorem ipsum dolor sit amet consectetur adipisicing
                                                    elit.
                                                    Expedita similique saepe, reiciendis aperiam illo ipsa!</div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div class="swiper-section-container-13">
                                        <div class="slider-content">
                                            <div class="slider-item">
                                                <div class="slider-head">Lorem, Ipsum</div>
                                                <div class="slider-para">Lorem ipsum dolor sit amet consectetur adipisicing
                                                    elit.
                                                    Expedita similique saepe, reiciendis aperiam illo ipsa!</div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div class="swiper-section-container-14">
                                        <div class="slider-content">
                                            <div class="slider-item">
                                                <div class="slider-head">Lorem, Ipsum</div>
                                                <div class="slider-para">Lorem ipsum dolor sit amet consectetur adipisicing
                                                    elit.
                                                    Expedita similique saepe, reiciendis aperiam illo ipsa!</div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div class="swiper-section-container-15">
                                        <div class="slider-content">
                                            <div class="slider-item">
                                                <div class="slider-head">Lorem, Ipsum</div>
                                                <div class="slider-para">Lorem ipsum dolor sit amet consectetur adipisicing
                                                    elit.
                                                    Expedita similique saepe, reiciendis aperiam illo ipsa!</div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                

                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Swiper3
