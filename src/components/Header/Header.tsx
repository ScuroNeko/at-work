import './Header.css';
import logo from './logo.svg'
import Favorite from './Favorite.svg';
import Notification from './Notification.svg';

const Header = () => {
        return (
        <div className={'Header_Wrapper'}>
            <div className={'Header'}>
                <a href="/">
                    <img src={logo} alt="" className="Logo"/>
                </a>

                <div className="UserInfo">
                    <div className="Buttons">
                        <img src={Favorite} alt="" className="UserInfo_Icon"/>
                        <img src={Notification} alt="" className="UserInfo_Icon"/>
                    </div>
                    <div className="User">
                        <img className='User_Icon' src="./user-icon.png" alt=""/>
                        <span className="User_Name">Ivan1234</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;