import {createStyles, Grid, Theme} from "@material-ui/core";
import ChatItemComponent from "../ChatItemComponent/ChatItemComponent";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        chatsList: {
            [theme.breakpoints.only('xs')]: {
                display: 'none'
            }
        },
    }),
);

const ChatList = () => {
    const classes = useStyles()

    return <Grid item container direction={"column"} xs={false} sm={4} lg={3} className={classes.chatsList}>
        <Grid item>
            <ChatItemComponent messages={4}/>
        </Grid>
        <Grid item>
            <ChatItemComponent messages={4}/>
        </Grid>
        <Grid item>
            <ChatItemComponent messages={4}/>
        </Grid>
        <Grid item>
            <ChatItemComponent messages={4}/>
        </Grid>
    </Grid>
}

export default ChatList