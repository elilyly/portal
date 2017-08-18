import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
  <div className="Yes">
    <Router>
      <App />
    </Router>
  </div>
), document.getElementById('root'));
registerServiceWorker();
