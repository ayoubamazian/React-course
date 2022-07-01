import "./button.scss"

const TypeButton = {
    google:'google-sign-in',
    inverted:'inverted'
}

const Button = ({chidren, buttonType, ...otherProps}) => {
    return (
        <button className={`button-container ${TypeButton[buttonType]}`} {...otherProps}> 
            {chidren} 
        </button>
    );
}
 
export default Button;
