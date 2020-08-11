import React from "react";
import { Grid } from "@material-ui/core";
import ChatComponent from "../ChatComponent/ChatComponent";
import ChatList from "../ChatList/ChatList";

const ChatPage = () => {
    return (
        <Grid item container>
            <ChatList/>
            <ChatComponent/>
            <Grid item xs={false} sm={false} lg={3}/>
        </Grid>
    )
}

export default ChatPage