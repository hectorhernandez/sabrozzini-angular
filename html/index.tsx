import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import {routes} from "./components/routes";
import registerServiceWorker from './registerServiceWorker';
import './styles/open-iconic-bootstrap.css';
import './styles/styles2.css';

ReactDOM.render(
  <BrowserRouter children={ routes } />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();