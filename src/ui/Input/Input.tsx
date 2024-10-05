import {InputHTMLAttributes, FC} from "react";
import './Input.css'

const Input: FC<InputHTMLAttributes<HTMLInputElement>> = ({ type, ...restProps}) => (
    <input className="Input" type={type} {...restProps} />
);

export default Input;