import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'unstated';
import App from './Counter';


ReactDOM.render(<Provider><App /></Provider>, document.getElementById('root'));
