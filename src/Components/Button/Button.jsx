import "./button.scss"

const TypeButton = {
    google:'google-sign-in',
    inverted:'inverted'
}

const Button = ({children, buttonType, ...otherProps}) => { 
    return  <button className={`button-container ${TypeButton[buttonType]}`} {...otherProps}> 
                {children}
            </button>
    
}
 
export default Button;
