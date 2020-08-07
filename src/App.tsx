import * as React from "react";
import { Route, Switch } from "react-router-dom"
import Login from "./components/Login/Login";
import Register from "./components/Register";
import HomePage from "./components/HomePage";
import {FC} from "react";
import NotFoundPage from "./components/NotFoundPage";
import Navigation from "./components/Navigation/Navigation";
import {Grid} from "@material-ui/core";



export const App:FC = () => {
    return (
            <Grid container direction={"column"}>
                <Grid item>
                    <Navigation/>
                </Grid>
                <Grid item container>
                    <Grid item sm={2} />
                    <Grid item xs={12} sm={8}>
                        <Switch>
                            <Route path={"/"} component={Login} exact/>
                            <Route path={"/register"} component={Register}/>
                            <Route path={"/user"} component={HomePage}/>
                            <Route component={NotFoundPage}/>
                        </Switch>
                    </Grid>
                    <Grid item sm={2} />
                </Grid>

            </Grid>
    )
}