import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Pesquisa from './pesquisa/Pesquisa';
import Ranking from './ranking/Ranking';
import Nav from './nav/Nav';

export default props =>
    <div>
        <Router> 
            <Nav />
            <Switch>
                <Route exact path="/">
                    <Pesquisa />
                </Route>
                <Route path="/ranking">
                    <Ranking />
                </Route>
            </Switch>
        </Router>
    </div>