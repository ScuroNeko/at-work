import {useEffect} from "react";
import Category from "../../ui/Category/Category";
import UserCard from "../../ui/UserCard/UserCard";
import './Main.css';
import {RootState} from "../../store/store";
import {setUsers} from "../../store/userSlice";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import Loading from "../../components/Loading/Loading";

const Main = () => {
    const users = useAppSelector((state: RootState) => state.users.users);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if(users.length > 0) return;
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then((u: UserType[]) => {
                dispatch(setUsers(u.map(user => {
                    user.archived = false;
                    return user;
                }).slice(0, 6)));
            });
    }, []);

    if(users.length === 0) return <Loading/>;

    return (
        <div className={'Main'}>
            <Category active>Активные</Category>
            <div className="UserList">
                {users.filter(u => !u.archived).map(u => <UserCard user={u} key={u.id} />)}
            </div>

            {users.filter(u => u.archived).length > 0 && (<>
                <Category active>Архив</Category>
                <div className="UserList">
                    {users.filter(u => u.archived).map(u => <UserCard user={u} />)}
                </div>
            </>)}
        </div>
    );
}

export default Main;