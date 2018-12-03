import * as React from 'react';
import {Route} from 'react-router-dom';
import Home from './home/Home';
import Main from './Main';

export const routes = <Main>
    <Route exact={true} path='/' component={Home}/>
</Main>