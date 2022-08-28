// import "./carouselMs.css";
// import { Swiper, SwiperSlide } from "swiper/react"
// import { EffectFade, Autoplay, Pagination, Navigation } from "swiper"
// import "swiper/css"
// import "swiper/css/bundle"
// import "swiper/css/a11y"
// import "swiper/css/autoplay"
// import "swiper/css/navigation"
// import "swiper/css/effect-fade"
// import "swiper/css/pagination"
// import Vid1 from "../../video/modelSvideos/vid1.mp4"
// import Vid2 from "../../video/modelSvideos/vid2.mp4"
// import Vid3 from "../../video/modelSvideos/vid3.mp4"
// import Vid4 from "../../video/modelSvideos/vid4.mp4"
// import Vid5 from "../../video/modelSvideos/vid5.mp4"

// const ModelSCarousel = () => {
//     return (
//         <div className="wrapper-carousel-box">
//             <Swiper
//                 modules={[EffectFade, Autoplay, Pagination, Navigation]}
//                 effect={"fade"}
//                 speed={800}
//                 autoplay
//                 pagination={{clickable: true}}
//                 slidesPerView={1}
//                 loop
//                 className="mySwiper"
//             >
//                 <SwiperSlide className="slide-video" >
//                     <video autoPlay loop><source src={require("../../video/modelSvideos/vid1.mp4")} /></video>
//                 </SwiperSlide>
//                 <SwiperSlide className="slide-video">
//                     <video autoPlay loop src={Vid2}></video>
//                 </SwiperSlide>
//                 <SwiperSlide className="slide-video">
//                     <video autoPlay loop src={Vid3}></video>
//                 </SwiperSlide>
//                 <SwiperSlide className="slide-video">
//                     <video autoPlay loop src={Vid5}></video>
//                 </SwiperSlide>
//             </Swiper>
//         </div>
//     )
// }

// export default ModelSCarousel