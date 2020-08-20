import * as React from "react";
import { Route, Switch } from "react-router-dom"
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import HomePage from "./pages/HomePage/HomePage";
import {FC, useContext, useReducer} from "react";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Navigation from "./pages/Navigation/Navigation";
import {Grid} from "@material-ui/core";
import ChatPage from "./pages/ChatPage/ChatPage";
import {AppProvider} from "./context";

export const App:FC = () => {
    return (
            <Grid container direction={"column"}>
                    <Grid item>
                        <Navigation />
                    </Grid>
                    <Grid item container>
                        <Switch>
                            <Route path={"/"} component={Login} exact/>
                            <Route path={"/register"} component={Register}/>
                            <Route path={"/user/:userId"} component={ChatPage} />
                            <Route path={"/user"} component={HomePage}/>
                            <Route component={NotFoundPage}/>
                        </Switch>
                    </Grid>
            </Grid>
    )
}