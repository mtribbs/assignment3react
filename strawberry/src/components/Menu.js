import { useEffect, useRef, useState } from "react";
import DropDown from "./DropDown";



const Menu = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const menuRef = useRef();

    useEffect(() => {
        document.addEventListener("click", (menuClick) => {
            if (!menuRef.current.contains(menuClick.target)) {
                setMenuOpen(false);
            }
        });
    });

    return (
        <div ref={menuRef} className="menu">
            <button className="menu__btn" onClick={() => setMenuOpen(menuOpen => !menuOpen)}>Menu</button>
            {menuOpen && (<DropDown></DropDown>)}            
        </div>
    );
}

export default Menu;