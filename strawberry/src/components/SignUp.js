import { useEffect, useRef, useState } from "react";
import Form from "./Form";

const SignUp = () => {

    const [formOpen, setFormOpen] = useState(false);

    const formRef = useRef();

    useEffect(() => {
        document.addEventListener("click", (formClick) => {
            if (!formRef.current.contains(formClick.target)) {
                setFormOpen(false);
            }
        });
    });

    return (
        <div ref={formRef}>
            <h2 className="title--signup">Want a 7 days free trial?</h2>
            <button className="btn--signup" onClick={() => setFormOpen(formOpen => !formOpen)}>Yes please!</button>
            {formOpen && (<Form></Form>)}
        </div>
    );
};

export default SignUp;