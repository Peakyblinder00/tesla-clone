import "./impactNavbar.css"
import { useState, useEffect } from "react"
import { useLocation, Link } from "react-router-dom"
import { BsGlobe2 } from "react-icons/bs"

const ImpactNav = () => {

    const Loacation = useLocation()
    const [way, setWay] = useState("flex")
    const [bg, setBg] = useState("transparent")
    const [sum, setSum] = useState(0)
    const [textColor, setTextColor] = useState("#fff")

    useEffect(() => {
        const onScroll = () => setSum(window.pageYOffset);
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        const changeFunc = () => {
            if (sum > 10) {
                setBg("#fff")
                setTextColor("#393c41")
            }
            else {
                setBg("transparent")
                setTextColor("#fff")
            }
        }
        changeFunc()
    }, [sum])

    useEffect(() => {
        const Fun = () => {
            if (Loacation.pathname.includes("/impact")) {
                setWay("flex")
            }
            else if (Loacation.pathname.includes("/product")) {
                setWay("flex")
            }
            else {
                setWay("none")
            }
        }
        Fun()
    })

    return (
        <div style={{ display: way, backgroundColor: bg }} className="impact-page-navbar">
            <div className="brand-wrapper">
                <Link className="homePage-path-impact" to="/"><svg style={{ fill: textColor }} xmlns="http://www.w3.org/2000/svg" height="800" width="1200" viewBox="-41.8008 -9.08425 362.2736 54.5055"><path d="M238.077 14.382v21.912h7.027V21.705h25.575v14.589h7.022V14.42l-39.624-.038m6.244-7.088h27.02c3.753-.746 6.544-4.058 7.331-7.262h-41.681c.779 3.205 3.611 6.516 7.33 7.262m-27.526 29.014c3.543-1.502 5.449-4.1 6.179-7.14h-31.517l.02-29.118-7.065.02v36.238h32.383M131.874 7.196h24.954c3.762-1.093 6.921-3.959 7.691-7.136h-39.64v21.415h32.444v7.515l-25.449.02c-3.988 1.112-7.37 3.79-9.057 7.327l2.062-.038h39.415V14.355h-32.42V7.196m-61.603.069h27.011c3.758-.749 6.551-4.058 7.334-7.265H62.937c.778 3.207 3.612 6.516 7.334 7.265m0 14.322h27.011c3.758-.741 6.551-4.053 7.334-7.262H62.937c.778 3.21 3.612 6.521 7.334 7.262m0 14.717h27.011c3.758-.747 6.551-4.058 7.334-7.263H62.937c.778 3.206 3.612 6.516 7.334 7.263M0 .088c.812 3.167 3.554 6.404 7.316 7.215h11.37l.58.229v28.691h7.1V7.532l.645-.229h11.38c3.804-.98 6.487-4.048 7.285-7.215v-.07H0v.07" /></svg></Link>
                <div style={{ backgroundColor: textColor }} className="stick"></div>
                <Link style={{ color: textColor }} className="impactPage-path" to="/impact">Impact</Link>
            </div>
            <ul className="collection01">
                <Link style={{ color: textColor }} className="impact-item" to="/people">People</Link>
                <Link style={{ color: textColor }} className="impact-item" to="/environment">Environment</Link>
                <Link style={{ color: textColor }} className="impact-item" to="/supplyChain">Supply Chain</Link>
                <Link style={{ color: textColor }} className="impact-item" to="/product">Product</Link>
                <li className="impact-item">
                    <div className="language-button">
                        <BsGlobe2 style={{ color: textColor }} />
                        <p style={{ color: textColor }}>US</p>
                    </div>
                </li>
                <div className="move2"></div>
            </ul>
        </div>
    )
}

export default ImpactNav