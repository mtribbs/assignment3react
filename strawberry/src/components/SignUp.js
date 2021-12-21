import { useEffect, useRef, useState } from "react";
import Form from "./Form";

const SignUp = () => {

    const [formOpen, setFormOpen] = useState(false);

    return (
        <div>
            <h2 className="title--signup">Want a 7 days free trial?</h2>
            <button className="btn--signup">Yes please!</button>
        </div>
    );
};

export default SignUp;