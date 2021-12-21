import { useState } from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Form = () => {
    const [formOpen, setFormOpen] = useState(true);

    return (
        <form className="form">
            <div className="btn--container">
            <button className="btn--exit" onClick={() => setFormOpen(false)}><FontAwesomeIcon icon={faTimes} /></button>
            </div>
            <h3 className="form__title">Register below for a 7 days free trial!</h3>
            <label className="form__label">
                First name:
                <input type="text" name="fname" />
            </label>
            <label className="form__label">
                Last name:
                <input type="text" name="lname" />
            </label>
            <label className="form__label">
                Email:
                <input type="email" name="email" />
            </label>
                <label>
                <input type="checkbox" />
                I agree to the <a href="">terms and conditions</a>
                </label>
            <input type="submit" value="Submit" className="btn--submit"/>
        </form>
    );
};

export default Form;