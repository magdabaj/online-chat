import {Grid} from "@material-ui/core";
import MessagesComponent from "../MessagesComponent/MessagesComponent";
import ChatInput from "../ChatInput/ChatInput";
import React from "react";

const ChatComponent = () => {
    return (
        <Grid
            item
            container
            direction={"column"}
            justify={"space-between"}
            xs={12} sm={8} lg={6}
        >
            <Grid item  >
                <MessagesComponent/>
            </Grid>
            <Grid item >
                <ChatInput/>
            </Grid>
        </Grid>
    )
}
export default ChatComponent