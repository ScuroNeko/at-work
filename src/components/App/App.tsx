import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Main from "../../pages/Main/Main";
import Edit from "../../pages/Edit/Edit";
import Header from "../Header/Header";
import './App.css';
import {Provider} from "react-redux";
import store from '../../store/store'

const App = () => {
    const router = createBrowserRouter([{
        path: "/",
        element: <Main/>
    }, {
        path: "/edit",
        element: <Edit/>
    }]);

    return (<Provider store={store}>
        <Header />

        <div className="Container">
            <RouterProvider router={router}/>
        </div>
    </Provider>);
}

export default App;