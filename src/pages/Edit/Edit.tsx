import './Edit.css';
import React, {useEffect, useState} from "react";
import close from './close.svg'
import ok from './ok.svg'
import Category from "../../ui/Category/Category";
import Button from "../../ui/Button/Button";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import Input from "../../ui/Input/Input";
import {saveUser} from "../../store/userSlice";
import {useNavigate} from "react-router-dom";
import back from './back.svg';

const Edit = () => {
    const [popup, setPopup] = useState(false);
    const storeUser = useAppSelector(state => state.users.userToEdit);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [name, setName] = useState(storeUser?.name ?? '');
    const [username, setUsername] = useState(storeUser?.username ?? '');
    const [email, setEmail] = useState(storeUser?.email ?? '');
    const [address, setAddress] = useState(storeUser?.address ?? {city: ''});
    const [phone, setPhone] = useState(storeUser?.phone ?? '');
    const [company, setCompany] = useState(storeUser?.company ?? {name: ''});

    useEffect(() => {
        if(storeUser === null) navigate('/');
    }, [])

    const setCity = (city: string) => {
        setAddress(Object.assign({}, address, { city }));
    }
    const setCompanyName = (name: string) => {
        setCompany(Object.assign({}, company, { name }));
    }

    const save = () => {
        if(name.length === 0 || username.length === 0 || email.length === 0 || address.city.length === 0 || phone.length === 0 || company.name.length === 0) return;
        const newUser = Object.assign({}, storeUser!!, { name, username, email, address, phone, company });
        console.log(storeUser!!, newUser);
        dispatch(saveUser(newUser));
        setPopup(true);
        setTimeout(() => {
            setPopup(false);
        }, 4000);
    }

    return (<>
        <div className="EditBack" onClick={() => navigate('/')}>
            <img src={back} alt="" style={{ marginRight: 8 }}/>
            <span>Назад</span>
        </div>

        <div className='Edit'>
        {popup && <div className="PopupContainer">
                <div className="Popup">
                    <img src={close} onClick={() => setPopup(false)} alt="" className='PopupClose'/>

                    <img src={ok} alt="" className="PopupImage"/>
                    <span className="PopupText">Изменения сохранены!</span>
                </div>
            </div>}


            <div className="UserEditCard">
                <div className='UserEditCard_Image'/>

                <Category active small>Данные профиля</Category>
                <Category small>Рабочее пространство</Category>
                <Category small>Приватность</Category>
                <Category small style={{marginBottom: 0}}>Безопасность</Category>
            </div>

            <div className="UserEdit">
                <Category active>Данные профиля</Category>

                <div className="UserEdit_Inputs">
                    <div className="InputBlock">
                        <span className="InputTitle">Имя</span>
                        <Input value={name} onChange={e => setName(e.currentTarget.value)}/>
                    </div>

                    <div className="InputBlock">
                        <span className="InputTitle">Никнейм</span>
                        <Input value={username} onChange={e => setUsername(e.currentTarget.value)}/>
                    </div>

                    <div className="InputBlock">
                        <span className="InputTitle">Почта</span>
                        <Input value={email} onChange={e => setEmail(e.currentTarget.value)}/>
                    </div>

                    <div className="InputBlock">
                        <span className="InputTitle">Город</span>
                        <Input value={address.city} onChange={e => setCity(e.currentTarget.value)}/>
                    </div>

                    <div className="InputBlock">
                        <span className="InputTitle">Телефон</span>
                        <Input value={phone} onChange={e => setPhone(e.currentTarget.value)}/>
                    </div>

                    <div className="InputBlock">
                        <span className="InputTitle">Название компании</span>
                        <Input value={company.name} onChange={e => setCompanyName(e.currentTarget.value)}/>
                    </div>
                </div>

                <Button onClick={save}>Сохранить</Button>
            </div>
        </div>
    </>)
}

export default Edit;