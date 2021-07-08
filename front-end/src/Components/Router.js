/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from "react-router-dom";

import Board from "../Routes/Board";
import Coin from "../Routes/Coin";
import Home from "../Routes/Home";
import Intro from "../Routes/Intro";
import LeaderBoard from "../Routes/LeaderBoard";
import Question from "../Routes/Question";
import Submit from "../Routes/Submit";
import Login from "../Routes/Login";

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
                <Route path="/submit" component={Submit} exact />
                <Route path="/board" component={Board} exact />
                <Route path="/question" component={Question} exact />
                <Route path="/login" component={Login} exact />
                <Redirect to="/" />
            </Switch>
        </main>
    </Router>
);
