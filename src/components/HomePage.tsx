import React, {FC} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Typography} from "@material-ui/core";

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
            Home Page
        </Typography>
        )
}

export default HomePage;