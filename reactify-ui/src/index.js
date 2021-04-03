import React from 'react';
import './index.css';
import App from './App';
import Home from './Home';
import Contact from './Contact';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

ReactDOM.render((
    <Router>
      <div>
         <Route exact  path="/" component={App} />
         <Route path="/home" component={Home} />
         <Route path="/contact" component={Contact} />
      </div>
    </Router>
  ), document.getElementById('reactify-django-ui'));