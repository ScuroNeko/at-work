import {FC, HTMLAttributes} from "react";
import './Category.css';

type Props = HTMLAttributes<HTMLElement> & {
    active?: boolean,
    small?: boolean,
}

const Category: FC<Props> = ({ children, active, small, style, ...restProps }) => (
    <div
        className={active === true ? 'Category' : 'Category Inactive'}
        {...restProps}
        style={{ fontSize: small ? 16 : 24, ...style }}
    >
        {children}
    </div>
);

export default Category;