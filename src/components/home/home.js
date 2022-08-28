import "./home.css"
import { Link } from "react-router-dom"
import useScrollSnap from "react-use-scroll-snap"
import { useRef, useState, useEffect, useContext } from "react"
import gsap from "gsap"

const Home = () => {
    const [offset, setOffset] = useState(0);
    const [modelCar, setModelCar] = useState("")
    const [buttonText, setButtonText] = useState("")
    const [text, setText] = useState("")
    const ak47 = useRef(null)
    const m16 = useRef(null)
    const smg = useRef(null)
    const pistol = useRef(null)


    // const [opacityS, setOpacity] = useState("1")

    useEffect(() => {
        window.scrollTo(0, 0)
        const nuj = ak47.current;
        gsap.fromTo(nuj, {y: 40, opacity: 0},{y:0, opacity: 1, duration: .7})
        const nujj = m16.current;
        gsap.fromTo(nujj, {y: 40, opacity: 0},{y:0, opacity: 1, duration: .3, delay: .4})
        const jjnnn = smg.current;
        gsap.fromTo(jjnnn, {x: -50, opacity: 0},{x:0, opacity: 1, duration: .8, delay: .4})
        const lil = pistol.current;
        gsap.fromTo(lil, {x: 50, opacity: 0},{x:0, opacity: 1, duration: .8, delay: .4})
        const onScroll = () => setOffset(window.pageYOffset);
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        const scrollY = () => {
            if (offset < 450) {
                setModelCar("Model 3")
                setButtonText("custom order")
                setText("existing inventory")
            }
            else if (offset < 1100) {
                setModelCar("Model Y")
                setButtonText("custom order")
                setText("existing inventory")
            }
            else if(offset < 1750){
                setModelCar("Model S")
                setButtonText("custom order")
                setText("existing inventory")
            }
            else if(offset < 2400){
                setModelCar("Model X")
                setButtonText("custom order")
                setText("existing inventory")
            }
            else if(offset < 3050){
                setModelCar("Solor Panels")
                setButtonText("order now")
                setText("learn more")
            }
            else if(offset < 3700){
                setModelCar("Solor Roof")
                setButtonText("order now")
                setText("learn more")
            }
            else {
                setModelCar("Accesories")
            }
        }
        scrollY()
    }, [offset])
    // console.log(offset)

    const scrollRef = useRef();
    useScrollSnap({ ref: scrollRef, duration: 100, delay: 50 });
    return (
        <div className="home-page">
            <div className="brand-top">
                <Link className="impact" to="/impact">Read Tesla's 2021 Impact Report</Link>
            </div>
            <div className="model-wrapper-box">
                <p ref={ak47} className="modelP">{modelCar}</p>
                <p ref={m16} className="deliver">Order Online for <Link className="support-page-path" to="/support">Touchles Delivery</Link></p>
            </div>
            <div className="button-box">
                <button ref={smg} className="custom-btn">{buttonText}</button>
                <button ref={pistol} className="inventory-btn">{text}</button>
            </div>
            <section ref={scrollRef}>
                <div className="model3-home-page"></div>
                <div className="modelY-home-page"></div>
                <div className="modelS-home-page"></div>
                <div className="modelX-home-page"></div>
                <div className="solorPanels-home-page"></div>
                <div className="solorRoof-home-page"></div>
            </section>
        </div>
    )
}

export default Home

