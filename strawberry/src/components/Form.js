

const Form = () => {
    return (
        <form className="form">
            <p>Register below for a 7 days free trial!</p>
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
            <input type="submit" value="Submit" className="btn--submit"/>
        </form>
    );
};

export default Form;