import "./Impact.css"
import { Link, useNavigate } from "react-router-dom"
import {BiCopyright} from "react-icons/bi"
import { useEffect } from "react"

const Impact = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="impact-page">
            <div className="impact-page-body">
                <div className="impact-banner-text">
                    <p className="banner-text">Exiting the Fossil Fuel Era</p>
                    <p className="banner-text-def">In 2021, Tesla customers helped accelerate the world's transition to sustainable energy by avoiding 8.4 million metric tons of CO<sub>2</sub>e emissions</p>
                </div>
                <button className="view-impact-report">view 2021 impact report</button>
            </div>
            <div className="impact-page-body2">
                <div className="body-text-wrapper">
                    <p className="paragraph-impact">Our Impact</p>
                    <p className="text-impact-body2">Our mission is to accelerate the world’s transition to sustainable energy. In pursuit of this goal, we build products that replace some of the planet’s biggest polluters—while trying to do the right thing along the way.</p>
                </div>
                <div className="flex-wrapper">
                    <div className="flex-box">
                        <div className="image-background"></div>
                        <p>People and Culture</p>
                        <Link to='people'>learn more</Link>
                    </div>
                    <div className="flex-box">
                        <div className="image-background2"></div>
                        <p>Enviromental Impact</p>
                        <Link to='environment'>learn more</Link>
                    </div>
                    <div className="flex-box">
                        <div className="image-background3"></div>
                        <p>Supply Chain</p>
                        <Link to='supply'>learn more</Link>
                    </div>
                    <div className="flex-box">
                        <div className="image-background4"></div>
                        <p>Product Impact</p>
                        <Link to='product'>learn more</Link>
                    </div>
                </div>
            </div>
            <div className="impact-body-page3">
                <div className="body3-text-wrapper">
                    <p className="body3-text">Help Us Improve</p>
                    <p className="body3-text-p">If you have suggestions about how we can improve, send ideas to ImpactReport@Tesla.com.</p>
                    <button>view 2021 impact report</button>
                </div>
            </div>
            <div className="footer-impact">
                <div className="footer-text-wrapper">
                    <div className="inner-footer-wrapper">
                        <p>2020 Impact Report</p>
                        <p>2019 Impact Report</p>
                        <p>2018 Impact Report</p>
                    </div>
                    <p>Corparate Govenance</p>
                </div>
                <div className="footer-bottom-nav">
                    <Link to="/about">Tesla <BiCopyright/> 2022</Link>
                    <Link to="/legal">Privacy & Legal</Link>
                    <Link to="/vin-recall">Vehicle Recalls</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/careers">Careers</Link>
                    <Link to="/blog">News</Link>
                    <Link to="/engage">Engage</Link>
                    <Link to="/findus">Locations</Link>
                </div>
            </div>
        </div>
    )
}

export default Impact