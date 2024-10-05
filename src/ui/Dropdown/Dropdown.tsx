import {FC, ReactNode} from "react";
import './Dropdown.css';

type ContentElement = {
    text: string;
    onClick?: () => void;
};

type Props = {
    children: ReactNode;
    content: ContentElement[];
}

const Dropdown: FC<Props> = ({ children, content }: Props) => (
    <div className='Dropdown'>
        <span className="Dropdown_Button">{children}</span>
        <div className="Dropdown_Content">
            {content.map(el => (
                <span className='Dropdown_Element' key={el.text} onClick={el.onClick}>{el.text}</span>
            ))}
        </div>
    </div>
);

export default Dropdown;