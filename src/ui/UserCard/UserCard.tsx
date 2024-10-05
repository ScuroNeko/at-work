import './UserCard.css';
import dropdownIcon from './Dropdown.svg';
import Dropdown from "../Dropdown/Dropdown";
import { useNavigate } from "react-router-dom";
import {useAppDispatch} from "../../store/hooks";
import {archiveUser, editUser, hideUser} from "../../store/userSlice";

const UserCard = ({ user }: { user: UserType }) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    return (
        <div className={user.archived ? 'UserCard Archived' : "UserCard"}>
            <img src='./user-icon.png' alt='' className="UserCard__Image"/>

            <div className="UserCard__Info">
                <div className="UserCard_Top">
                    <div className="UserCard_Name">
                    <span>{user.name}</span>
                        {user.archived ? (
                            <Dropdown content={[{
                                text: 'Активировать',
                                onClick: () => dispatch(archiveUser(user.id)),
                            }]}>
                                <img src={dropdownIcon} alt=""/>
                            </Dropdown>
                        ) : (<Dropdown
                            content={[{
                                text: 'Редактировать',
                                onClick: () => {
                                    navigate('/edit');
                                    dispatch(editUser(user));
                                },
                            }, {
                                text: 'Архивировать',
                                onClick: () => dispatch(archiveUser(user.id)),
                            }, {
                                text: 'Скрыть',
                                onClick: () => dispatch(hideUser(user.id))
                            }]}
                        >
                            <img src={dropdownIcon} alt=""/>
                        </Dropdown>)}
                    </div>
                    <div className="UserCard_Company">{user.company.name}</div>
                </div>

                <div className="UserCard_City">{user.address.city}</div>
            </div>
        </div>
    );
}

export default UserCard;