

const Form = () => {
    return (
        <form className="form">
            <p>Sign up for a free 7 days trial!</p>
            <label className="formlabel">
                First name:
                <input type="text" name="fname" />
            </label>
            <label className="formlabel">
                Last name:
                <input type="text" name="lname" />
            </label>
            <label className="formlabel">
                Email:
                <input type="email" name="email" />
            </label>
            <input type="submit" value="Submit" className="submitbtn"/>
        </form>
    );
};

export default Form;