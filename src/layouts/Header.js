import React from 'react';
import { matchPath, Route, Switch } from 'react-router';

import header1 from '../images/apple.jpg';
import header2 from '../images/bmw.jpeg';
import header3 from '../images/ferrari.jpg';
import header4 from '../images/merc.jpg';

import '../styles/Header.css';


const Header = () => {
    return (
        <>
            <Switch>
                <Route path="/" exact render={() => (
                    <img src={header4} alt="merc" />
                )} ></Route>
                <Route path="/products" render={() => (
                    <img src={header1} alt="apple" />
                )} ></Route>
                <Route path="/contact" render={() => (
                    <img src={header2} alt="bmw" />
                )} ></Route>
                <Route path="/admin" render={() => (
                    <img src={header3} alt="ferrari" />
                )} ></Route>
                <Route render={() => (
                    <img src={header4} alt="merc" />
                )} ></Route>
            </Switch>
        </>
    );
}

export default Header;