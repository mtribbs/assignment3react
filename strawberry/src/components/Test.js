import {useState} from "react";
import DropDown from "./DropDown";


const Test = () => {
    
    const [openModal, setOpenModal] = useState(false);

    return (
        <div className="menu">
            <div>
               
            </div>
            <button className="menu__btn" onClick={() => {setOpenModal(true);}}>Open</button>
            {openModal && <DropDown></DropDown>}
            
        </div>
    );
};

export default Test;