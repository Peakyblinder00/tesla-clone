import "./modelS.css"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectFade, Autoplay, Navigation, Pagination } from "swiper"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/effect-fade"
import "swiper/css/autoplay"
import "swiper/css/pagination"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect, useRef } from "react"
import Performance from "../../images/modelSimages/performance.jpg"
import Performance2 from "../../images/modelSimages/performance2.jpg"
import GridVid from "../../assets/grid.mp4"
import Vid1 from "../../video/modelSvideos/vid1.mp4"
import Vid2 from "../../video/modelSvideos/vid2.mp4"
import Vid3 from "../../video/modelSvideos/vid3.mp4"
import Vid4 from "../../video/modelSvideos/vid4.mp4"
import Vid5 from "../../video/modelSvideos/vid5.mp4"
import Vid6 from "../../video/modelSvideos/vid6.mp4"
import Vid7 from "../../video/modelSvideos/vid7.mp4"
import Vid8 from "../../video/modelSvideos/vid8.mp4"
import Vid9 from "../../video/modelSvideos/vid9.mp4"
import Vid10 from "../../video/modelSvideos/10.mp4"
import Map1 from "../../images/modelSimages/map1.jpg"
import Map2 from "../../images/modelSimages/map2.jpg"
import Map3 from "../../images/modelSimages/map3.jpg"
import Map4 from "../../images/modelSimages/map4.jpg"





gsap.registerPlugin(ScrollTrigger)
const ModelS = () => {



    const modelT = useRef(null)
    const modelT2 = useRef(null)
    const textRef = useRef(null)
    const textRef2 = useRef(null)
    const textRef3 = useRef(null)
    const textRef4 = useRef(null)
    const textRef5 = useRef(null)
    const interior = useRef(null)
    const card1 = useRef(null)
    const card2 = useRef(null)
    const card3 = useRef(null)
    const textcard = useRef(null)
    const textcard2 = useRef(null)
    const textcard3 = useRef(null)
    const ttyy = useRef(null)
    const ttyy2 = useRef(null)
    const ttyy3 = useRef(null)
    const yyi = useRef(null)
    const yyi2 = useRef(null)
    const yyi3 = useRef(null)
    const yyi4 = useRef(null)
    const ui = useRef(null)
    const iio = useRef(null)
    const yt = useRef(null)
    const mu = useRef(null)
    const za = useRef(null)
    const ff = useRef(null)
    const ar = useRef(null)
    const ab = useRef(null)
    const du = useRef(null)
    const la = useRef(null)
    const zi = useRef(null)
    const zov = useRef(null)
    const as = useRef(null)
    const hulk = useRef(null)
    const bl = useRef(null)
    const ac = useRef(null)
    const kwi = useRef(null)
    const dow = useRef(null)
    const hawk = useRef(null)
    const eye = useRef(null)
    const spider = useRef(null)
    const man = useRef(null)
    const mys = useRef(null)
    const inna = useRef(null)
    const line = useRef(null)
    const circle = useRef(null)
    const venom = useRef(null)
    const morbius = useRef(null)
    const guardian = useRef(null)
    const galaxy = useRef(null)
    const groot = useRef(null)
    const jet = useRef(null)
    const kwil = useRef(null)
    const gamora = useRef(null)
    const idfc = useRef(null)
    const black = useRef(null)
    const bear = useRef(null)
    const yyii = useRef(null)
    const yyii2 = useRef(null)
    const yyii3 = useRef(null)
    const yyii4 = useRef(null)
    const man2 = useRef(null)
    const mys2 = useRef(null)
    const hen = useRef(null)
    const dependent = useRef(null)

    useEffect(() => {
        window.scrollTo(0, 0)
        const ji = modelT.current;
        gsap.fromTo(ji, { y: 0, opacity: 0 }, { y: -40, delay: 1, duration: .5, opacity: 1 })
        const jj = modelT2.current;
        gsap.fromTo(jj, { y: 0, opacity: 0 }, { y: -40, delay: 1.5, duration: .2, opacity: 1 })
        const el = textRef.current;
        gsap.fromTo(el, { y: 0, opacity: 0 }, { y: -60, delay: 1, opacity: 1 })
        const el2 = textRef2.current;
        gsap.fromTo(el2, { y: 0, opacity: 0 }, { y: -60, delay: 1.3, opacity: 1 })
        const el3 = textRef3.current;
        gsap.fromTo(el3, { y: 0, opacity: 0 }, { y: -60, delay: 1.6, opacity: 1 })
        const el4 = textRef4.current;
        gsap.fromTo(el4, { y: 0, opacity: 0 }, { y: -60, delay: 1.9, opacity: 1 })
        const el5 = textRef5.current;
        gsap.fromTo(el5, { y: 0, opacity: 0 }, { y: -60, delay: 2, opacity: 1 })
        const fy = interior.current;
        gsap.fromTo(fy, { y: 0, opacity: 0 }, {
            y: -40, opacity: 1, delay: .5, scrollTrigger: {
                trigger: fy,
                toggleActions: "restart none none reverse",
                start: "top bottom"
            }
        })
        const ll = card1.current;
        gsap.fromTo(ll, { y: 50, opacity: 0 }, {
            y: 0, opacity: 1, delay: .6, scrollTrigger: {
                trigger: ll,
                toggleActions: "restart none none reverse",
                start: "top bottom"
            }
        })
        const lf = card2.current;
        gsap.fromTo(lf, { y: 50, opacity: 0 }, {
            y: 0, opacity: 1, delay: .6, scrollTrigger: {
                trigger: lf,
                toggleActions: "restart none none reverse",
                start: "top bottom"
            }
        })
        const lg = card3.current;
        gsap.fromTo(lg, { y: 50, opacity: 0 }, {
            y: 0, opacity: 1, delay: .6, scrollTrigger: {
                trigger: lg,
                toggleActions: "restart none none reverse",
                start: "top bottom"
            }
        })
        const lh = textcard.current;
        gsap.fromTo(lh, { y: 40, opacity: 0 }, {
            y: 0, opacity: 1, delay: .2, scrollTrigger: {
                trigger: lh,
                toggleActions: "restart none none reverse",
                start: "top bottom"
            }
        })
        const lk = textcard2.current;
        gsap.fromTo(lk, { y: 40, opacity: 0 }, {
            y: 0, opacity: 1, delay: .2, scrollTrigger: {
                trigger: lk,
                toggleActions: "restart none none reverse",
                start: "top bottom"
            }
        })
        const lm = textcard3.current;
        gsap.fromTo(lm, { y: 40, opacity: 0 }, {
            y: 0, opacity: 1, delay: .2, scrollTrigger: {
                trigger: lm,
                toggleActions: "restart none none reverse",
                start: "top bottom"
            }
        })
        const ln = ttyy.current;
        gsap.fromTo(ln, { y: 0, opacity: 0 }, {
            y: -50, opacity: 1, delay: .1, scrollTrigger: {
                trigger: ln,
                toggleActions: "restart none none reverse",
                start: "top bottom"
            }
        })
        const lq = ttyy2.current;
        gsap.fromTo(lq, { y: 0, opacity: 0 }, {
            y: -50, opacity: 1, delay: .3, scrollTrigger: {
                trigger: lq,
                toggleActions: "restart none none reverse",
                start: "top bottom"
            }
        })
        const lw = ttyy3.current;
        gsap.fromTo(lw, { y: 0, opacity: 0 }, {
            y: -50, opacity: 1, delay: .5, scrollTrigger: {
                trigger: lw,
                toggleActions: "restart none none reverse",
                start: "top bottom"
            }
        })
        const lr = yyi.current;
        gsap.fromTo(lr, { y: 0, opacity: 0 }, {
            y: -80, opacity: 1, delay: .1, scrollTrigger: {
                trigger: lr,
                toggleActions: "restart none none reverse",
                start: "top bottom"
            }
        })
        const ty = yyi2.current;
        gsap.fromTo(ty, { y: 0, opacity: 0 }, {
            y: -77, opacity: 1, delay: .3, scrollTrigger: {
                trigger: ty,
                toggleActions: "restart none none reverse",
                start: "top bottom"
            }
        })
        const tu = yyi3.current;
        gsap.fromTo(tu, { y: 0, opacity: 0 }, {
            y: -50, opacity: 1, delay: .5, scrollTrigger: {
                trigger: tu,
                toggleActions: "restart none none reverse",
                start: "top bottom"
            }
        })
        const ti = yyi4.current;
        gsap.fromTo(ti, { y: 0, opacity: 0 }, {
            y: -80, opacity: 1, delay: .2, scrollTrigger: {
                trigger: ti,
                toggleActions: "restart none none reverse",
                start: "top bottom"
            }
        })
        const bh = ui.current;
        gsap.fromTo(bh, { y: 140, opacity: 0 }, {
            y: 100, opacity: 1, scrollTrigger: {
                trigger: bh,
                toggleActions: "restart none none reverse",
                start: "top bottom"
            }
        })
        const ljk = iio.current;
        gsap.fromTo(ljk, { y: 0, opacity: 0 }, {
            y: -80, opacity: 1, scrollTrigger: {
                trigger: ljk,
                toggleActions: "restart none none reverse",
                start: "top bottom"
            }
        })
        const hgh = yt.current;
        gsap.fromTo(hgh, { y: 10, opacity: 0 }, {
            y: -50, opacity: 1, delay: .5, scrollTrigger: {
                trigger: hgh,
                toggleActions: "restart none none reverse",
                start: "top bottom"
            }
        })
        const chu = mu.current;
        gsap.fromTo(chu, { y: 0, opacity: 0 }, {
            y: -150, opacity: 1, scrollTrigger: {
                trigger: chu,
                toggleActions: "restart none none reverse",
                start: "top bottom"
            }
        })
        const mo = za.current;
        gsap.fromTo(mo, { y: 0, opacity: 0 }, {
            y: -140, opacity: 1, delay: .3, scrollTrigger: {
                trigger: mo,
                toggleActions: "restart none none reverse",
                start: "top bottom"
            }
        })
        const lii = ff.current;
        gsap.fromTo(lii, { y: 0, opacity: 0 }, {
            y: -100, opacity: 1, delay: .6, scrollTrigger: {
                trigger: lii,
                toggleActions: "restart none none reverse",
                start: "top bottom"
            }
        })
        const od = ar.current;
        gsap.fromTo(od, { y: 0, opacity: 0 }, {
            y: -150, opacity: 1, scrollTrigger: {
                trigger: od,
                toggleActions: "restart none none reverse",
                start: "top bottom"
            }
        })
        const cap = ab.current;
        gsap.fromTo(cap, { y: 0, opacity: 0 }, {
            y: -70, opacity: 1, scrollTrigger: {
                trigger: cap,
                toggleActions: "restart none none reverse",
                start: "top bottom"
            }
        })
        const tain = du.current;
        gsap.fromTo(tain, { y: 0, opacity: 0 }, {
            y: -70, opacity: 1, delay: .1, scrollTrigger: {
                trigger: tain,
                toggleActions: "restart none none reverse",
                start: "top bottom"
            }
        })
        const ame = la.current;
        gsap.fromTo(ame, { y: 0, opacity: 0 }, {
            y: -70, opacity: 1, delay: .2, scrollTrigger: {
                trigger: ame,
                toggleActions: "restart none none reverse",
                start: "top bottom"
            }
        })
        const ri = zi.current;
        gsap.fromTo(ri, { y: 0, opacity: 0 }, {
            y: -70, opacity: 1, delay: .3, scrollTrigger: {
                trigger: ri,
                toggleActions: "restart none none reverse",
                start: "top bottom"
            }
        })
        const ca = zov.current;
        gsap.fromTo(ca, { y: 0, opacity: 0 }, {
            y: -70, opacity: 1, delay: .4, scrollTrigger: {
                trigger: ca,
                toggleActions: "restart none none reverse",
                start: "top bottom"
            }
        })
        const thor = as.current;
        gsap.fromTo(thor, { y: 0, opacity: 0 }, {
            y: -70, opacity: 1, delay: .5, scrollTrigger: {
                trigger: thor,
                toggleActions: "restart none none reverse",
                start: "top bottom"
            }
        })
        const yty = hulk.current;
        gsap.fromTo(yty, { y: 0, opacity: 0 }, {
            y: -60, opacity: 1, scrollTrigger: {
                trigger: yty,
                toggleActions: "restart none none reverse",
                start: "top bottom"
            }
        })
        const yyt = bl.current;
        gsap.fromTo(yyt, { y: 0, opacity: 0 }, {
            y: -60, opacity: 1, delay: .3, scrollTrigger: {
                trigger: yyt,
                toggleActions: "restart none none reverse",
                start: "top bottom"
            }
        })
        const yyt2 = ac.current;
        gsap.fromTo(yyt2, { y: 0, opacity: 0 }, {
            y: -60, opacity: 1, delay: .6, scrollTrigger: {
                trigger: yyt2,
                toggleActions: "restart none none reverse",
                start: "top bottom"
            }
        })
        const uiu = kwi.current;
        gsap.fromTo(uiu, { y: 60 }, {
            y: 0, scrollTrigger: {
                trigger: uiu,
                toggleActions: "restart none none reverse",
                start: "top bottom"
            }
        })
        const iuu = dow.current;
        gsap.fromTo(iuu, { y: 0, opacity: 0 }, {
            y: -100, opacity: 1, scrollTrigger: {
                trigger: iuu,
                toggleActions: "restart none none reverse",
                start: "top bottom"
            }
        })
        const ooi = hawk.current;
        gsap.fromTo(ooi, { y: 0, opacity: 0 }, {
            y: -95, opacity: 1, delay: .2, scrollTrigger: {
                trigger: ooi,
                toggleActions: "restart none none reverse",
                start: 'top bottom'
            }
        })
        const oio = eye.current;
        gsap.fromTo(oio, { y: 0, opacity: 0 }, {
            y: -65, opacity: 1, delay: .4, scrollTrigger: {
                trigger: oio,
                toggleActions: "restart none none reverse",
                start: "top bottom"
            }
        })
        const ssu = spider.current;
        gsap.fromTo(ssu, { y: 0, opacity: 0 }, {
            y: -40, opacity: 1, scrollTrigger: {
                trigger: ssu,
                toggleActions: "restart none none reverse",
                start: "top bottom"
            }
        })
        const ghgh = man.current;
        gsap.fromTo(ghgh, { y: 0, opacity: 0 }, {
            y: -60, opacity: 1, scrollTrigger: {
                trigger: ghgh,
                toggleActions: "restart none none reverse",
                start: "top bottom"
            }
        })
        const tjtj = mys.current;
        gsap.fromTo(tjtj, { y: 0, opacity: 0 }, {
            y: -40, opacity: 1, delay: .3, scrollTrigger: {
                trigger: tjtj,
                toggleActions: "restart none none reverse",
                start: "top bottom"
            }
        })
        const track = inna.current;
        gsap.fromTo(track, { y: 0, opacity: 0 }, {
            y: -40, opacity: 1, scrollTrigger: {
                trigger: track,
                toggleActions: "restart none none reverse",
                start: "top bottom"
            }
        })
        const lnn = line.current;
        gsap.fromTo(lnn, { height: 0 }, {
            height: 180, delay: .5, scrollTrigger: {
                trigger: lnn,
                toggleActions: "restart none none reverse",
                start: "top bottom"
            }
        })
        const gui = circle.current;
        gsap.fromTo(gui, { y: 0, opacity: 0 }, {
            y: -108, opacity: 1, delay: .3, scrollTrigger: {
                trigger: gui,
                toggleActions: "restart none none reverse",
                start: "center bottom"
            }
        })
        const qwer = venom.current;
        gsap.fromTo(qwer, { height: 0 }, {
            height: 108, delay: .6, scrollTrigger: {
                trigger: qwer,
                toggleActions: "restart none none reverse",
                start: "center bottom"
            }
        })
        const qwerty = morbius.current;
        gsap.fromTo(qwerty, { opacity: 0, y: 0 }, {
            y: -70, opacity: 1, delay: .4, scrollTrigger: {
                trigger: qwerty,
                toggleActions: "restart none none reverse",
                start: "center bottom"
            }
        })
        const tyui = guardian.current;
        gsap.fromTo(tyui, { height: 0 }, {
            height: 100, delay: .3, scrollTrigger: {
                trigger: tyui,
                toggleActions: "restart none none reverse",
                start: "top bottom"
            }
        })
        const opop = galaxy.current;
        gsap.fromTo(opop, { y: 0, opacity: 0 }, {
            y: 57, opacity: 1, delay: .3, scrollTrigger: {
                trigger: opop,
                toggleActions: "restart none none reverse",
                start: "top bottom"
            }
        })
        const asdf = groot.current;
        gsap.fromTo(asdf, { y: 0, opacity: 0 }, {
            y: -100, opacity: 1, scrollTrigger: {
                trigger: asdf,
                toggleActions: "restart none none reverse",
                start: "top bottom"
            }
        })
        const sdfg = jet.current;
        gsap.fromTo(sdfg, { y: 0, opacity: 0 }, {
            y: -97, opacity: 1, delay: .3, scrollTrigger: {
                trigger: sdfg,
                toggleActions: "restart none none reverse",
                start: "top bottom"
            }
        })
        const dfgh = kwil.current;
        gsap.fromTo(dfgh, { y: 0, opacity: 0 }, {
            y: -70, opacity: 1, delay: .5, scrollTrigger: {
                trigger: dfgh,
                toggleActions: "restart none none reverse",
                start: "top bottom"
            }
        })
        const lkj = gamora.current;
        gsap.fromTo(lkj, { y: 0, opacity: 0 }, {
            y: -40, opacity: 1, delay: .5, scrollTrigger: {
                trigger: lkj,
                toggleActions: "restart none none reverse",
                start: "top bottom"
            }
        })
        const atall = idfc.current;
        gsap.fromTo(atall, { y: 0, opacity: 0 }, {
            y: -100, opacity: 1, delay: .1, scrollTrigger: {
                trigger: atall,
                toggleActions: "restart none none reverse",
                start: "top bottom"
            }
        })
        const godzilla = black.current;
        gsap.fromTo(godzilla, { y: 0, opacity: 0 }, {
            y: -70, opacity: 1, delay: .3, scrollTrigger: {
                trigger: godzilla,
                toggleActions: "restart none none reverse",
                start: "top bottom"
            }
        })
        const bruclee = bear.current;
        gsap.fromTo(bruclee, { y: 0, opacity: 0 }, {
            y: -50, opacity: 1, delay: .6, scrollTrigger: {
                trigger: bruclee,
                toggleActions: "restart none none reverse",
                start: "top bottom"
            }
        })
        const lrr = yyii.current;
        gsap.fromTo(lrr, { y: 0, opacity: 0 }, {
            y: -80, opacity: 1, delay: .1, scrollTrigger: {
                trigger: lrr,
                toggleActions: "restart none none reverse",
                start: "top bottom"
            }
        })
        const tyy = yyii2.current;
        gsap.fromTo(tyy, { y: 0, opacity: 0 }, {
            y: -77, opacity: 1, delay: .3, scrollTrigger: {
                trigger: tyy,
                toggleActions: "restart none none reverse",
                start: "top bottom"
            }
        })
        const tuu = yyii3.current;
        gsap.fromTo(tuu, { y: 0, opacity: 0 }, {
            y: -50, opacity: 1, delay: .5, scrollTrigger: {
                trigger: tuu,
                toggleActions: "restart none none reverse",
                start: "top bottom"
            }
        })
        const tii = yyii4.current;
        gsap.fromTo(tii, { y: 0, opacity: 0 }, {
            y: -80, opacity: 1, delay: .2, scrollTrigger: {
                trigger: tii,
                toggleActions: "restart none none reverse",
                start: "top bottom"
            }
        })
        const ghghg = man2.current;
        gsap.fromTo(ghghg, { y: 0, opacity: 0 }, {
            y: -60, opacity: 1, scrollTrigger: {
                trigger: ghghg,
                toggleActions: "restart none none reverse",
                start: "top bottom"
            }
        })
        const tjtjt = mys2.current;
        gsap.fromTo(tjtjt, { y: 0, opacity: 0 }, {
            y: -40, opacity: 1, delay: .3, scrollTrigger: {
                trigger: tjtjt,
                toggleActions: "restart none none reverse",
                start: "top bottom"
            }
        })
        const juju = hen.current;
        gsap.fromTo(juju, {y: 0, opacity:0}, {
            y: -40, opacity:1, delay: .5, scrollTrigger:{
                trigger: juju,
                toggleActions: "restart none none reverse",
                start: "top bottom"
            }
        })
        const kio = dependent.current;
        gsap.fromTo(kio, {y: 30, opacity:0}, {
            y: 0, opacity:1, delay: .5, scrollTrigger:{
                trigger: kio,
                toggleActions: "restart none none reverse",
                start: "top bottom"
            }
        })
    }, [])
    return (
        <div className="modelS">
            <div className="modelS-page">
                <div className="car-model-wrapper">
                    <p ref={modelT} className="page-model">Model S</p>
                    <p ref={modelT2} className="page-model-feature">Plaid</p>
                </div>
                <div className="features-box">
                    <div ref={textRef} className="box-div1">
                        <p className="features-of-car">396mi</p>
                        <p className="bottom-feature">Range (EPA est.)</p>
                    </div>
                    <div ref={textRef2} className="box-div2">
                        <p className="features-of-car">1.99s</p>
                        <p className="bottom-feature">0-60 mph<sup>*</sup></p>
                    </div>
                    <div ref={textRef3} className="box-div3">
                        <p className="features-of-car">200 mph</p>
                        <p className="bottom-feature">Top Speed<sup>+</sup></p>
                    </div>
                    <div ref={textRef4} className="box-div4">
                        <p className="features-of-car">1,020hp</p>
                        <p className="bottom-feature">Peak Power</p>
                    </div>
                    <button ref={textRef5} className="order-now-btn">order now</button>
                </div>
            </div>
            <div className="modelS-body-page">
                <p ref={interior} className="future-interior">Interior of the Future</p>
            </div>
            <div className="modelS-body-page2"></div>
            <div className="video-carousel-modelS">
                <Swiper
                    modules={[Autoplay, EffectFade, Pagination]}
                    effect={"fade"}
                    loop={true}
                    autoplay={{ delay: 5000 }}
                    className="video-swiper"
                    pagination={{ clickable: true }}
                >
                    <SwiperSlide className="video-carousel-swiperSlide"><video loop muted autoPlay src={Vid1}></video></SwiperSlide>
                    <SwiperSlide className="video-carousel-swiperSlide"><video loop muted autoPlay src={Vid2}></video></SwiperSlide>
                    <SwiperSlide className="video-carousel-swiperSlide"><video loop muted autoPlay src={Vid3}></video></SwiperSlide>
                    <SwiperSlide className="video-carousel-swiperSlide"><video loop muted autoPlay src={Vid4}></video></SwiperSlide>
                    <SwiperSlide className="video-carousel-swiperSlide"><video loop muted autoPlay src={Vid5}></video></SwiperSlide>
                </Swiper>
            </div>
            <div className="modelS-body-page3">
                <div className="card-box">
                    <div ref={card1} className="left-side"></div>
                    <div ref={textcard} className="right-side">
                        <p className="card-inner-th">Stay Connected</p>
                        <p className="card-inner-text">Instantly connect multi-device Bluetooth, or fast charge device with wireless and 36-watt USB-C charging.</p>
                    </div>
                </div>
                <div className="card-box">
                    <div ref={textcard2} className="left-side2">
                        <p className="card-inner-th">Immersive Sound</p>
                        <p className="card-inner-text">A 22-speakers , 960-watt audio system with Active Noise Reduction offers immersive listening and studio-grade sound quality.</p>
                    </div>
                    <div ref={card2} className="right-side2">
                        <video src={GridVid} autoPlay loop muted />
                    </div>
                </div>
                <div className="card-box">
                    <div ref={card3} className="left-side3"></div>
                    <div ref={textcard3} className="right-side3">
                        <p className="card-inner-th">Room for Evrything</p>
                        <p className="card-inner-text">With front and rear trunks and fold-flat seats you can fit your bike without taking the wheel off and your luggage too.</p>
                    </div>
                </div>
            </div>
            <div className="modelS-body-page4">
                <div className="peakPower-of-modelS">
                    <div ref={ttyy} className="box-div1">
                        <p className="features-of-car">1,020 hp</p>
                        <p className="bottom-feature">Peak Power</p>
                    </div>
                    <div ref={ttyy2} className="box-div1">
                        <p className="features-of-car">9.23 s</p>
                        <p className="bottom-feature">@155mph 1/4 mile</p>
                    </div>
                    <div ref={ttyy3} className="box-div1">
                        <p className="features-of-car">1.99 s</p>
                        <p className="bottom-feature">0-60 mph<sup>*</sup></p>
                    </div>
                </div>
            </div>
            <div className="modelS-body-page5">
                <div className="advertisment-wrapper">
                    <div className="advertisment-div">
                        <p ref={yyi} className="how-appearence">Plaid</p>
                        <p ref={yyi2} className="how-type">Beyond Ludicrous</p>
                        <button ref={yyi3} className="order-btn03">Order Now</button>
                    </div>
                    <div ref={yyi4} className="advertisment-text">
                        <p className="adds-text-des">Model S Plaid has the quickest acceleration of any vehicle in production. Updated battery architecture for all Model S trims enables back-to-back track runs without performance degradation.</p>
                    </div>
                </div>
            </div>
            <div className="modelS-body-page6">
                <div className="all-wrapper">
                    <div className="modelS-page-text-text">
                        <p ref={iio} className="electric-power">Electric Powertrain</p>
                        <p ref={yt} className="powertrain-text">Model S platfroms unite powertrain and battery technologies for unrivaled performance range and efficiency. New module and pack thermal architecture allows faster charging and gives you more power and endurance in all conditions.</p>
                    </div>
                    <div className="engine-carousel">
                        <Swiper
                            modules={[Autoplay, EffectFade, Navigation]}
                            className="mySwiper"
                            navigation={false}
                            effect={"fade"}
                            autoplay={{ delay: 3000 }}
                            loop={true}
                        >
                            <SwiperSlide className="image-swiper"><img src={Performance} alt="" /></SwiperSlide>
                            <SwiperSlide className="image-swiper"><img src={Performance2} alt="" /></SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="engine-description-btn">
                        <div className="engine-description-box-left">
                            <div className="line-line"></div>
                            <p className="type-of-modelS">Model S</p>
                            <p className="explanation-of-modelS">Dual Motor All-Wheel Drive unlocks more range than any other vehicle in our current lineup, with insane power and maximal power.</p>
                            <div className="featuresOf-car-modelS">
                                <div className="text-wrapper-box">
                                    <p className="efficiency-fea">3.1 s</p>
                                    <p className="description-features">0-60 mph</p>
                                </div>
                                <div className="text-wrapper-box">
                                    <p className="efficiency-fea">405 mi</p>
                                    <p className="description-features">Range (EPA est.)</p>
                                </div>
                                <div className="text-wrapper-box">
                                    <p className="efficiency-fea">670 hp</p>
                                    <p className="description-features">Peak Power</p>
                                </div>
                            </div>
                        </div>
                        <div className="engine-description-box-right">
                            <div className="line-line"></div>
                            <p className="type-of-modelS">Model S Plaid</p>
                            <p className="explanation-of-modelS">Maintain, 1,000+ horsepower all the way to 200 mph with Tri-Motor All-Wheel Drive, featuring torque vectoring and three independent carbon-sleeved rotors.</p>
                            <div className="featuresOf-car-modelS">
                                <div className="text-wrapper-box">
                                    <p className="efficiency-fea">1.99 s*</p>
                                    <p className="description-features">0-60 mph</p>
                                </div>
                                <div className="text-wrapper-box">
                                    <p className="efficiency-fea">396 mi</p>
                                    <p className="description-features">Range (EPA est.)</p>
                                </div>
                                <div className="text-wrapper-box">
                                    <p className="efficiency-fea">1,020 hp</p>
                                    <p className="description-features">Peak Power</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p ref={ui} className="bottom-des-text1">* With rollout subtracted</p>
                </div>
            </div>
            <div className="modelS-body-page7"></div>
            <div className="modelS-body-page8">
                <div className="advertisment-wrapper">
                    <div className="advertisment-div">
                        <p ref={mu} className="how-appearence2">Exterior</p>
                        <p ref={za} className="how-type2">Designed for Efficiency</p>
                        <button ref={ff} className="order-now-btn02">Order Now</button>
                    </div>
                    <div ref={ar} className="advertisment-text">
                        <p className="adds-text-des02">With a drag coefficient of just .208 Cd, the lowest on the planet, Model S is built for speed, endurance and range. Improved aerodynamics and a wider chassis offer more responsive performance so you can take corners quicker and with more confidence.</p>
                    </div>
                </div>
            </div>
            <div className="modelS-body-page9">
                <div className="exterior-wrapper-main">
                    <div className="exterior-main-box">
                        <div ref={ab} className="left-exterior-side">
                            <p className="card-inner-th">Relentless Performance</p>
                            <p className="card-inner-text">Staggered, performance wheels and tires keep the car planted and help transfer maximum power down to the road.</p>
                        </div>
                        <div ref={du} className="right-exterior-side-first"></div>
                    </div>
                </div>
                <div className="exterior-wrapper-main">
                    <div className="exterior-main-box">
                        <div ref={la} className="left-exterior-side2"></div>
                        <div ref={zi} className="right-exterior-side2">
                            <p className="card-inner-th">Optimized Aerodynamics</p>
                            <p className="card-inner-text">Attention to detail on all exterior surfaces makes Model S the most aerodynamic production car on Earth.</p>
                        </div>
                    </div>
                </div>
                <div className="exterior-wrapper-main">
                    <div className="exterior-main-box">
                        <div ref={zov} className="left-exterior-side">
                            <p className="card-inner-th">Refined Styling</p>
                            <p className="card-inner-text">An iconic silhouette meets refreshed, elegant proportions.</p>
                        </div>
                        <div ref={as} className="right-exterior-side-third"></div>
                    </div>
                </div>
            </div>
            <div className="modelS-body-page10">
                <div className="left-video-wrapper-box">
                    <video loop muted autoPlay src={Vid6}></video>
                    <div className="features-position-box">
                        <div ref={hulk} className="features-position-inner-box">
                            <p className="features-of-car">405 mi</p>
                            <p className="bottom-feature">Go anywhere with up to 405 miles of estimated range on a single charge</p>
                        </div>
                        <div ref={bl} className="features-position-inner-box">
                            <p className="features-of-car">15 min</p>
                            <p className="bottom-feature">Recharge up to 200 miles in 15 minutes at Supercharger locations</p>
                        </div>
                        <div ref={ac} className="features-position-inner-box">
                            <p className="features-of-car">35,000 +</p>
                            <p className="bottom-feature">Superchargers placed along popular routes</p>
                        </div>
                    </div>
                </div>
                <div ref={kwi} className="right-text-wrapper-box">
                    <div className="page10-text-wrapper">
                        <p ref={dow} className="how-appearence">Range</p>
                        <p ref={hawk} className="how-type">Go Anywhere</p>
                        <p ref={eye} className="adds-text-des">With up to 405 miles of estimated range and access to the world’s largest and most powerful fast charging network, you’ll spend less time plugged in and more time on the road.</p>
                    </div>
                    <button ref={spider} className="order-btn04">Order now</button>
                </div>
            </div>
            <div className="modelS-body-page11">
                <div className="inner-wrapper-box-b">
                    <p ref={man} className="how-type">Freedom to Travel</p>
                    <p ref={mys} className="adds-text-des">Enter a destination on your touchscreen and Trip Planner automatically calculate your route with Superchargers along the way.</p>
                </div>
            </div>
            <div className="modelS-body-page12">
                <div className="swiper-carousel-container">
                    <Swiper
                        modules={[Autoplay, EffectFade]}
                        effect={"fade"}
                        autoplay={{ delay: 5000 }}
                        loop={true}
                        className="map-swiper"
                    >
                        <SwiperSlide className="destination-map"><img src={Map1} alt="" /></SwiperSlide>
                        <SwiperSlide className="destination-map"><img src={Map2} alt="" /></SwiperSlide>
                        <SwiperSlide className="destination-map"><img src={Map3} alt="" /></SwiperSlide>
                        <SwiperSlide className="destination-map"><img src={Map4} alt="" /></SwiperSlide>
                    </Swiper>
                </div>
                <div className="destination-wrapper">
                    <div className="destination-inner-info-wrapper">
                        <div className="line-line"></div>
                        <p className="type-of-modelS">San Francisco to Los Angelas</p>
                        <p className="measure-des">383 miles</p>
                    </div>
                    <div className="destination-inner-info-wrapper">
                        <div className="line-line"></div>
                        <p className="type-of-modelS">Berkely to Lake Tahoe</p>
                        <p className="measure-des">178 miles</p>
                    </div>
                    <div className="destination-inner-info-wrapper">
                        <div className="line-line"></div>
                        <div className="line-line"></div>
                        <p className="type-of-modelS">Manhattan to Boston</p>
                        <p className="measure-des">211 miles</p>
                    </div>
                    <div className="destination-inner-info-wrapper">
                        <div className="line-line"></div>
                        <p className="type-of-modelS">Fort Lauderdale to Orlando</p>
                        <p className="measure-des">195 miles</p>
                    </div>
                </div>
                <button ref={inna} className="order-btn04">learn more</button>
            </div>
            <div className="modelS-body-page13">
                <div className="all-time-low">
                    <div className="all-time-low-text-wrapper">
                        <p ref={groot} className="how-appearence">Safety</p>
                        <p ref={jet} className="how-type">High Impact <br /> Protection</p>
                        <p ref={kwil} className="adds-text-des">Model S is built from the ground up as an electric vehicle, with a high-strength architecture and floor-mounted battery pack for incredible occupant protection and low rollover risk. Every new Model S includes Tesla’s latest active safety features, such as Automatic Emergency Braking, at no extra cost.</p>
                    </div>
                    <button ref={gamora} className="order-btn04">order now</button>
                </div>
                <div className="all-time-low2">
                    <div className="skelaton-info-div1">
                        <div ref={line} className="inner-skelaton-div1"></div>
                        <div ref={circle} className="skelaton-text-wrapper-box">
                            <p className="skelaton-text-inner">Font-Impact Protection</p>
                        </div>
                    </div>
                    <div className="skelaton-info-div2">
                        <div ref={venom} className="inner-skelaton-div1"></div>
                        <div ref={morbius} className="skelaton-text-wrapper-box2">
                            <p className="skelaton-text-inner">Side-Impact Protection</p>
                        </div>
                    </div>
                    <div className="skelaton-info-div3">
                        <div ref={guardian} className="inner-skelaton-div2"></div>
                        <div ref={galaxy} className="skelaton-text-wrapper-box3">
                            <p className="skelaton-text-inner">Very Low Rollover Risk</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modelS-body-page14">
                <div ref={idfc} className="page14-text-wrapper-box">
                    <p className="page14-bold-text">360 &#176;</p>
                    <p className="page14-text-inner">Rear, side and forward-facing cameras provide maximum visibility</p>
                </div>
                <div ref={black} className="page14-text-wrapper-box">
                    <p className="page14-bold-text">250 m</p>
                    <p className="page14-text-inner">Powerful visual processing at up to 250 meters of range</p>
                </div>
                <div ref={bear} className="page14-text-wrapper-box">
                    <div className="camera-icon">
                        <div className="inner-part-of-camera">
                            <div className="white-dot-camera"></div>
                            <div className="white-dot-camera2"></div>
                        </div>
                    </div>
                    <p className="page14-text-inner">Tesla Vision detects nearby cars, helps prevent potential collisions and assists with parking</p>
                </div>
            </div>
            <div className="modelS-body-page5">
                <div className="advertisment-wrapper">
                    <div className="advertisment-div">
                        <p ref={yyii} className="how-appearence">Autoplay</p>
                        <p ref={yyii2} className="how-type">Future of Driving</p>
                        <button ref={yyii3} className="order-btn03">Order Now</button>
                    </div>
                    <div ref={yyii4} className="advertisment-text">
                        <p className="adds-text-des">Autopilot enables your car to steer, accelerate and brake automatically within its lane under your active supervision, assisting with the most burdensome parts of driving. With over-the-air software updates, the latest enhancements are available instantly.</p>
                    </div>
                </div>
            </div>
            <div className="modelS-body-page11">
                <div className="inner-wrapper-box-b">
                    <p ref={man2} className="how-type">Features</p>
                    <p ref={mys2} className="adds-text-des">Enhanced Autopilot and Full Self-Driving capability introduce additional features and improve existing functionality to make your car more capable over time, including:</p>
                </div>
            </div>
            <div className="modelS-body-page18">
                <div className="swiper-video-container2">
                    <Swiper
                        modules={[Autoplay, EffectFade]}
                        effect={"fade"}
                        loop={true}
                        autoplay={{ delay: 10000 }}
                        className="my-swiper002"
                    >
                        <SwiperSlide className="my-swiper002-append"><video autoPlay loop muted src={Vid7}></video></SwiperSlide>
                        <SwiperSlide className="my-swiper002-append"><video autoPlay loop muted src={Vid8}></video></SwiperSlide>
                        <SwiperSlide className="my-swiper002-append"><video autoPlay loop muted src={Vid9}></video></SwiperSlide>
                        <SwiperSlide className="my-swiper002-append"><video autoPlay loop muted src={Vid10}></video></SwiperSlide>
                    </Swiper>
                </div>
                <div className="destination-wrapper">
                    <div className="destination-inner-info-wrapper2">
                        <div className="line-line"></div>
                        <p className="type-of-modelS">Navigate on Autopilot</p>
                        <p style={{ marginTop: "20px" }} className="explanation-of-modelS">Active guidance from on-ramp to off-ramp</p>
                    </div>
                    <div className="destination-inner-info-wrapper2">
                        <div className="line-line"></div>
                        <p className="type-of-modelS">Auto Lane Change</p>
                        <p style={{ marginTop: "20px" }} className="explanation-of-modelS">Automatically change lanes while driving on the highway </p>
                    </div>
                    <div className="destination-inner-info-wrapper2">
                        <div className="line-line"></div>
                        <div className="line-line"></div>
                        <p className="type-of-modelS">Summon</p>
                        <p style={{ marginTop: "20px" }} className="explanation-of-modelS">Automatically retrieve your car</p>
                    </div>
                    <div className="destination-inner-info-wrapper2">
                        <div className="line-line"></div>
                        <p className="type-of-modelS">Autopark</p>
                        <p style={{ marginTop: "20px" }} className="explanation-of-modelS">Parallel and perpendicular parking with a single touch</p>
                    </div>
                </div>
            </div>
            <div className="modelS-body-page19">
                <div className="page19-modelS-black"></div>
                <div ref={hen} className="page19-modelS-black-text">
                    <div className="specs-wrapper">
                        <div className="modelS-specS-text">
                            <p className="page19-modelS-specs-text01">Model S <span>Specs</span></p>
                        </div>
                        <div className="modelS-page19-features-main">
                            <div className="modelS-page19-features-left-box">
                                <button className="modelS-page19-btn">Model S Plaid</button>
                                <div className="modelS-page19-feature-box-info">
                                    <div className="line-modelS-page19"></div>
                                    <p className="page19-left-text01">Range (EPA est.)</p>
                                    <p className="page19-left-def-text">396 mi</p>
                                </div>
                                <div className="modelS-page19-feature-box-info">
                                    <div className="line-modelS-page19"></div>
                                    <p className="page19-left-text01">1/4 mile</p>
                                    <p className="page19-left-def-text">9.23@155 mph trap speed</p>
                                </div>
                                <div className="modelS-page19-feature-box-info">
                                    <div className="line-modelS-page19"></div>
                                    <p className="page19-left-text01">Peak Power</p>
                                    <p className="page19-left-def-text">1,020 hp</p>
                                </div>
                                <div className="modelS-page19-feature-box-info">
                                    <div className="line-modelS-page19"></div>
                                    <p className="page19-left-text01">Wheels</p>
                                    <p className="page19-left-def-text">19" or 21"</p>
                                </div>
                                <div className="modelS-page19-feature-box-info">
                                    <div className="line-modelS-page19"></div>
                                    <p className="page19-left-text01">Cargo</p>
                                    <p className="page19-left-def-text">28 cu ft</p>
                                </div>
                                <div className="modelS-page19-feature-box-info">
                                    <div className="line-modelS-page19"></div>
                                    <p className="page19-left-text01">Weight</p>
                                    <p className="page19-left-def-text">4,766 lbs</p>
                                </div>
                            </div>
                            <div className="modelS-page19-features-right-box">
                                <button className="modelS-page19-btn">Model S</button>
                                <div className="modelS-page19-feature-box-info">
                                    <div className="line-modelS-page19"></div>
                                    <p className="page19-left-text01">*Accelaration</p>
                                    <p className="page19-left-def-text">1.99 s 0-60 mph</p>
                                    <i className="page19-left-def-text">with rolluot subtracked</i>
                                </div>
                                <div className="modelS-page19-feature-box-info">
                                    <div className="line-modelS-page19"></div>
                                    <p className="page19-left-text01"><sup>+</sup>Top Speed</p>
                                    <p className="page19-left-def-text">200 mph</p>
                                    <i className="page19-left-def-text">when equiped with paid hardware upgrades</i>
                                </div>
                                <div className="modelS-page19-feature-box-info">
                                    <div className="line-modelS-page19"></div>
                                    <p className="page19-left-text01">Drag Coefficient</p>
                                    <p className="page19-left-def-text">0.208 <i>Cd</i></p>
                                </div>
                                <div className="modelS-page19-feature-box-info">
                                    <div className="line-modelS-page19"></div>
                                    <p className="page19-left-text01">Powertrain</p>
                                    <p className="page19-left-def-text">Tri Motor</p>
                                </div>
                                <div className="modelS-page19-feature-box-info">
                                    <div className="line-modelS-page19"></div>
                                    <p className="page19-left-text01">Supercharging Max</p>
                                    <p className="page19-left-def-text">250 kW</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modelS-body-page20">
                <div className="left-page20-wrapper">
                    <div className="all-page20-box">
                    <p className="how-type002">Model S</p>
                    <div ref={dependent} className="page20-btn-wrapper">
                        <button className="order-btn04">order now</button>
                        <button className="order-btn04"> compare</button>
                    </div>
                    </div>
                </div>
                <div className="right-page20-wrapper"></div>
            </div>
            <div className="modelS-footer">
                <div className="modelS-footer-text">
                    <p className="footer-modelS-text-with-link">Certain high data usage vehicle features require at least Standard Connectivity, including maps, navigation and voice commands. Access to features that use cellular data and third-party licenses are subject to change. <span>Learn more about Standard Connectivity and any limitations</span>.</p>
                </div>
                <div className="modelS-footer-text-nav">
                    <p className="footer-text-models-nav">Tesla © 2022</p>
                    <p className="footer-text-models-nav">Privacy & Legal</p>
                    <p className="footer-text-models-nav">Vehicle Recalls</p>
                    <p className="footer-text-models-nav">Contact</p>
                    <p className="footer-text-models-nav">Careers</p>
                    <p className="footer-text-models-nav">News</p>
                    <p className="footer-text-models-nav">Engage</p>
                    <p className="footer-text-models-nav">Locations</p>

                </div>
            </div>
        </div>
    )
}

export default ModelS