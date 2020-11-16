import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import ProductPage from '../pages/ProductPage';
import ContactPage from '../pages/ContactPage';
import AdminPage from '../pages/AdminPage';
import ErrorPage from '../pages/ErrorPage';

import '../styles/Page.css';

const Page = () => {
    return (
        <React.Fragment>
            <Switch>
                <Route path="/" exact component={HomePage}></Route>
                <Route path="/products" component={ProductPage}></Route>
                <Route path="/contact" component={ContactPage}></Route>
                <Route path="/admin" component={AdminPage}></Route>
                <Route component={ErrorPage}></Route>
            </Switch>
        </React.Fragment>
    );
}

export default Page;