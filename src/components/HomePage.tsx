import React, {FC} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Typography, Grid} from "@material-ui/core";
import ChatButton from "./ChatButton/ChatButton";

const useStyles = makeStyles({
    helloThereStyles : {
        fontStyle: "oblique"
    }
})

const HomePage:FC = () => {
    const classes = useStyles();
    return (
        <Typography
            className={classes.helloThereStyles}
            variant={"h2"}
            color={"primary"}
        >
            {/*Home Page*/}
            <Grid item>
                <ChatButton/>
            </Grid>
        </Typography>
        )
}

export default HomePage;