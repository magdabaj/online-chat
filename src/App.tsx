import * as React from "react";
import { Route, Switch } from "react-router-dom"
import Login from "./components/Login";
import Register from "./components/Register";
import HomePage from "./components/HomePage";
import {FC} from "react";
import NotFoundPage from "./components/NotFoundPage";
import Navigation from "./components/Navigation/Navigation";



export const App:FC = () => {
    return (
            <div>
                <Navigation/>
                <Switch>
                    <Route path={"/"} component={Login} exact/>
                    <Route path={"/register"} component={Register}/>
                    <Route path={"/user"} component={HomePage}/>
                    <Route component={NotFoundPage}/>
                </Switch>
            </div>
    )
}