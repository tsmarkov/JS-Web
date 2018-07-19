import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'

// import './App.css';
import './style/header.css'
import './style/menu.css'
import './style/post.css'
import './style/site.css'
import './style/submit.css'
import './style/comments.css'

ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('root'))
registerServiceWorker();
