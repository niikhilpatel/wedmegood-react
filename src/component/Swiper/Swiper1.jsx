import React from 'react'
import './Swiper.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation,Autoplay } from 'swiper/modules';

const Swiper1 = () => {
    return (
        <>
            <section>
                <div class="second-page-section">
                    <div class="container">
                        <div class="second-page">
                            <div class="second-page-heading">
                                Popular Venue Searches
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
                                    <div class="swiper-section-container-1">
                                        <div class="slider-content">
                                            <div class="slider-item">
                                                <div class="slider-head">Mumbai Vanue</div>
                                                <div class="slider-para">Lorem ipsum dolor sit amet consectetur adipisicing
                                                    elit.
                                                    Expedita similique saepe, reiciendis aperiam illo ipsa!</div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div class="swiper-section-container-2">
                                        <div class="slider-content">
                                            <div class="slider-item">
                                                <div class="slider-head">Bangalore Vanue</div>
                                                <div class="slider-para">Lorem ipsum dolor sit amet consectetur adipisicing
                                                    elit.
                                                    Expedita similique saepe, reiciendis aperiam illo ipsa!</div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div class="swiper-section-container-3">
                                        <div class="slider-content">
                                            <div class="slider-item">
                                                <div class="slider-head">Florida Vanue</div>
                                                <div class="slider-para">Lorem ipsum dolor sit amet consectetur adipisicing
                                                    elit.
                                                    Expedita similique saepe, reiciendis aperiam illo ipsa!</div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div class="swiper-section-container-4">
                                        <div class="slider-content">
                                            <div class="slider-item">
                                                <div class="slider-head">California Vanue</div>
                                                <div class="slider-para">Lorem ipsum dolor sit amet consectetur adipisicing
                                                    elit.
                                                    Expedita similique saepe, reiciendis aperiam illo ipsa!</div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div class="swiper-section-container-5">
                                        <div class="slider-content">
                                            <div class="slider-item">
                                                <div class="slider-head">francisco Vanue</div>
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

export default Swiper1





















// // import Swiper core and required modules
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
// // import "swiper/swiper-bundle.min.css"; // Swiper styles
// import "./Swiper.css"

// export default () => {
//     return (
//         <Swiper
//             // install Swiper modules
//             modules={[Navigation, Pagination, Scrollbar, A11y]}
//             spaceBetween={50}
//             slidesPerView={3}
//             navigation
//             pagination={{ clickable: true }}
//             scrollbar={{ draggable: true }}
//             onSwiper={(swiper) => console.log(swiper)}
//             onSlideChange={() => console.log('slide change')}
//         >
//             <SwiperSlide>
// //                 <img src="https://codexshub.github.io/WedMeGood/static/media/California.da3e3f6e3dc2b92f06e9.jpg" alt="Image 1"/>
// //             </SwiperSlide>
// //             <SwiperSlide>
// //                 <img src="https://codexshub.github.io/WedMeGood/static/media/California.da3e3f6e3dc2b92f06e9.jpg" alt="Image 2" />
// //             </SwiperSlide>
// //             <SwiperSlide>
// //                 <img src="https://codexshub.github.io/WedMeGood/static/media/Fransisco.dbff3c6154ff47c3b2a3.jpg" alt="Image 3" />
// //             </SwiperSlide>
// //             <SwiperSlide>
// //                 <img src="https://codexshub.github.io/WedMeGood/static/media/mumbai.bf1df833fe3b0126bd3f.jpg" alt="Image 4" />
// //             </SwiperSlide>
// //             <SwiperSlide>
// //                 <img src="https://codexshub.github.io/WedMeGood/static/media/California.da3e3f6e3dc2b92f06e9.jpg" alt="Image 5" />
// //             </SwiperSlide>
//             ...
//         </Swiper>
//     );
// };



// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/scss';
// import 'swiper/scss/navigation';
// import 'swiper/scss/pagination';


// // Import Swiper styles
// import 'swiper/css';

// export default () => {
//     return (
//         <Swiper
//             spaceBetween={50}
//             slidesPerView={3}
//             onSlideChange={() => console.log('slide change')}
//             onSwiper={(swiper) => console.log(swiper)}
//             style={ }
//         >
//             <SwiperSlide>
//                 <img src="https://codexshub.github.io/WedMeGood/static/media/California.da3e3f6e3dc2b92f06e9.jpg" alt="Image 1" style={{ width: "100%", }} />
//             </SwiperSlide>
//             <SwiperSlide>
//                 <img src="https://codexshub.github.io/WedMeGood/static/media/California.da3e3f6e3dc2b92f06e9.jpg" alt="Image 2" />
//             </SwiperSlide>
//             <SwiperSlide>
//                 <img src="https://codexshub.github.io/WedMeGood/static/media/Fransisco.dbff3c6154ff47c3b2a3.jpg" alt="Image 3" />
//             </SwiperSlide>
//             <SwiperSlide>
//                 <img src="ttps://codexshub.github.io/WedMeGood/static/media/mumbai.bf1df833fe3b0126bd3f.jpg" alt="Image 4" />
//             </SwiperSlide>
//             <SwiperSlide>
//                 <img src="https://codexshub.github.io/WedMeGood/static/media/California.da3e3f6e3dc2b92f06e9.jpg" alt="Image 5" />
//             </SwiperSlide>
//         </Swiper>
//     );
// };

