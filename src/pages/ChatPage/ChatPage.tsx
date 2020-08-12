import React from "react";
import { Grid } from "@material-ui/core";
import ChatComponent from "../../components/ChatComponent/ChatComponent";
import ChatList from "../../components/ChatList/ChatList";

const ChatPage = () => {
    return (
        <Grid item container>
            <ChatList display={false}/>
            <ChatComponent/>
            <Grid item xs={false} sm={false} lg={3}/>
        </Grid>
    )
}

export default ChatPage