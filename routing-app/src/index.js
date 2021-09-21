import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import './stylesheets/style.css';
// import NotFound from './Components/NotFound';
import Sidebar from './Components/Sidebar';

import {BrowserRouter , Route} from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter>
        {/* <Route path="/" > 
             <Sidebar /> 
        </Route> */}
        <App />
    </BrowserRouter>

    , document.getElementById('root')
)