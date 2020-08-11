import React from "react";
import {createStyles, Grid, Theme} from "@material-ui/core";
import MessagesComponent from "../MessagesComponent/MessagesComponent";
import ChatInput from "../ChatInput/ChatInput";
import ChatListComponent from "../ChatListComponent/ChatListComponent";
import ChatComponent from "../ChatComponent/ChatComponent";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        chatsList: {
            [theme.breakpoints.down('sm')]: {
                display: 'none'
            }
        },
    }),
);

const ChatPage = () => {
    const classes = useStyles()
    return (
        <Grid item container>
            <Grid item container direction={"column"} xs={false} sm={4} lg={3} className={classes.chatsList}>
                <Grid item>
                    <ChatListComponent messages={4}/>
                </Grid>
                <Grid item>
                    <ChatListComponent messages={4}/>
                </Grid>
                <Grid item>
                    <ChatListComponent messages={4}/>
                </Grid>
                <Grid item>
                    <ChatListComponent messages={4}/>
                </Grid>
            </Grid>
            <ChatComponent/>
            <Grid item xs={false} sm={false} lg={3}/>
        </Grid>
    )
}

export default ChatPage