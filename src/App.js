import {Navbar, NavbarBrand} from 'reactstrap';
import Main from "./components/MainComponent";
import './App.css';
import {Component} from "react";
import {BrowserRouter} from "react-router-dom"
import {Provider} from "react-redux"; //чтобы стор был доступен в любом компоненте
import {ConfigureStore} from "./redux/configureStore";

const store = ConfigureStore();

class App extends Component{
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div>
                        <Main/>
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
