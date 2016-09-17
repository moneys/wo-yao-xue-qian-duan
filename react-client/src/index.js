import React from "react";
import {render} from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import App from "./containers/App";
import demo from "./reducers/users";

let store = createStore(demo);

render(<Provider store={store}>
    <App/>
</Provider>, document.getElementById('app'));