import React from 'react';
import {Link} from 'react-router-dom';
import './Nav.css';

export default props =>
    <div id="nav">
        <div id="nome">
            <Link to = "/">Pesquisar nome</Link>
        </div>
        <div id="ranking">
            <Link to = "/ranking">Ranking</Link>
        </div>
    </div>