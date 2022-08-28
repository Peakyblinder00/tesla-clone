import "./sidebar.css";
import { useContext } from "react";
import { SidebarContext } from "../../context/useContext"
import { XLg } from "react-bootstrap-icons"
import {Link} from "react-router-dom"


function Sidebar() {

    const { active, setActive } = useContext(SidebarContext)

    return (
        <div style={{ right: `${active ? "0" : "-300px"}`, opacity: `${active ? "1" : "0"}` }} className="side-bar">
            <div className="cancel-btn-wrapper">
                <div onClick={() => setActive(!active)} className="cancel-btn-box">
                    <XLg />
                </div>
            </div>
            <ul className="menu-collection">
                <Link to="/modelS" className="item-menu-added">Model S</Link>
                <Link to="/model3" className="item-menu-added">Model 3</Link>
                <Link to="/modelX" className="item-menu-added">Model X</Link>
                <Link to="/modelY" className="item-menu-added">Model Y</Link>
                <Link to="/solorRoof" className="item-menu-added">Solor Roof</Link>
                <Link to="/solorPanels" className="item-menu-added">Solor Panels</Link>
                <li className="item-menu">Existing Enventory</li>
                <li className="item-menu">Used Inventory</li>
                <li className="item-menu">Trade-In</li>
                <li className="item-menu">Test Drive</li>
                <li className="item-menu">Insurance</li>
                <li className="item-menu">Cypertruck</li>
                <li className="item-menu">Roadster</li>
                <li className="item-menu">Semi</li>
                <li className="item-menu">Charging</li>
                <li className="item-menu">Powerwall</li>
                <li className="item-menu">Commercial Energy</li>
                <li className="item-menu">Utilities</li>
                <li className="item-menu">Find Us</li>
                <li className="item-menu">Support</li>
                <Link to="/shop" className="item-menu-added">Shop</Link>
                <Link to="/account" className="item-menu-added">Account</Link>
                <li className="item-menu">More</li>
            </ul>
        </div>
    )
}

export default Sidebar