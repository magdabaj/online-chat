import React, {FC} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Typography, Grid, Paper} from "@material-ui/core";
import ChatListComponent from "./ChatListComponent/ChatListComponent";

const useStyles = makeStyles({
    helloThereStyles : {
        fontStyle: "oblique"
    }
})

const HomePage:FC = () => {
    const classes = useStyles();
    return (
        <Grid item container direction={"column"} xs={12} sm={4} lg={3}>
            <Grid item >
                <ChatListComponent messages={2}/>
            </Grid>
            <Grid item >
                <ChatListComponent messages={4}/>
            </Grid>
            <Grid item >
                <ChatListComponent messages={0}/>
            </Grid>
        </Grid>
        )
}

export default HomePage;