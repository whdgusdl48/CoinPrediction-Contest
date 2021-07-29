/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from "react-router-dom";

import Notice from "../Routes/Notice";
import Coin from "../Routes/Coin";
import Home from "../Routes/Home";
import Intro from "../Routes/Intro";
import LeaderBoard from "../Routes/LeaderBoard";
import Question from "../Routes/Question";
import SubmitForm from "../Routes/Submit/Form";
import SubmitStatus from "../Routes/Submit/Status";
import News from "../Routes/News";
import Login from "../Routes/Login";

import Content from "../Components/Content";
import Header from "../Components/Header";

export default () => (
    <Router>
        <Header />
        <main>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/intro" component={Intro} exact />
                <Route path="/coin" component={Coin} exact />
                <Route path="/leaderboard" component={LeaderBoard} exact />
                <Route path="/notice" component={Notice} exact />
                <Route path="/question" component={Question} exact />
                <Route path="/news" component={News} exact />
                <Route path="/login" component={Login} exact />
                <Route path="/submit/form" component={SubmitForm} exact />
                <Route path="/submit/status" component={SubmitStatus} exact />
                <Redirect to="/" />
            </Switch>
        </main>
    </Router>
);
