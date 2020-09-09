import React, { Component } from 'react'
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import Home from './pages/home/Home';
import About from './pages/about/About';
import SinglePost from './pages/singlePage/SinglePostPage'
import Contact from './pages/contact/Contact';
import Coupons from './pages/coupons/index';
import Search from './pages/search/Search';

import  Signin  from './authentification/Signin';
import Signup from './authentification/Signup';
import Verify from './authentification/Verification';
import ForgetPassword from './authentification/ForgetPassword';
import ResetPassword from './authentification/ResetPassword';
import AdminLayout from "layouts/Admin/Admin.js";
import { ToastContainer } from 'react-toastify';

function App() {
    const hist = createBrowserHistory();
        return (
            <div>
            
                 <ToastContainer/>
                <Router history={hist}>

                    <Switch >
                   
                    <Route  path="/about">
                        <About />
                    </Route>
                    <Route  path="/contact">
                        <Contact />
                    </Route>
                    <Route  path="/coupons">
                        <Coupons />
                    </Route>
                   
                    <Route  path="/signin">
                        <Signin/>
                    </Route>
                    <Route  path="/signup">
                        <Signup/>
                    </Route>
                    <Route path="/verifypassword">
                        <Verify/>
                    </Route>
                    <Route path="/forgetpassword">
                        <ForgetPassword/>
                    </Route>
                    <Route path="/resentpassword">
                        <ResetPassword/>
                    </Route>
                    <Route path="/single/:id">
                        <SinglePost/>
                    </Route>
                    <Route path="/search/:query">
                        <Search/>
                    </Route>
                    <Route path="/admin" render={props => <AdminLayout {...props} />} />
                    <Route exact path="/"> <Home /> </Route>
                    <Redirect from="*" to="/" />
                    </Switch>
                </Router>
            </div>
        )
    }


export default App
