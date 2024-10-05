import { ButtonHTMLAttributes, FC } from "react";
import './Button.css';

const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = (restProps) => {
    const { className, children, ...props } = restProps;

    return (
        <button className={'Button'} {...props}>
            {children}
        </button>
    );
}

export default Button;