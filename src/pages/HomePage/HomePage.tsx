import React, {FC} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Typography, Grid, Paper} from "@material-ui/core";
import ChatItemComponent from "../../components/ChatItemComponent/ChatItemComponent";
import ChatList from "../../components/ChatList/ChatList";
import ChatComponent from "../../components/ChatComponent/ChatComponent";

const useStyles = makeStyles({
    helloThereStyles : {
        fontStyle: "oblique"
    }
})

const HomePage:FC = () => {
    const classes = useStyles();
    return (
        <Grid item container >
            <ChatList display={true}/>
            {/*<ChatComponent display={'none'}/>*/}
        </Grid>
        )
}

export default HomePage;