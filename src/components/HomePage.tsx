import React, {FC} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Typography, Grid, Paper} from "@material-ui/core";
import ChatItemComponent from "./ChatItemComponent/ChatItemComponent";
import ChatList from "./ChatList/ChatList";
import ChatComponent from "./ChatComponent/ChatComponent";

const useStyles = makeStyles({
    helloThereStyles : {
        fontStyle: "oblique"
    }
})

const HomePage:FC = () => {
    const classes = useStyles();
    return (
        <Grid item container >
            <ChatList/>
            <ChatComponent/>
        </Grid>
        )
}

export default HomePage;