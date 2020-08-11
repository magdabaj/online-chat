import React from "react";
import {
    createStyles,
    FormControl,
    Grid, IconButton,
    Input,
    InputAdornment,
    InputLabel,
    Paper,
    TextField,
    Theme
} from "@material-ui/core";
import {AccountCircle} from "@material-ui/icons";
import {makeStyles} from "@material-ui/core/styles";
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        margin: {
            margin: theme.spacing(1),
        },
    }),
);

const ChatInput = () => {
    const classes = useStyles();
    return <div>
        <div className={classes.margin}>
            <Grid container spacing={1} alignItems={"flex-end"}>
                <Grid item >
                    <IconButton color={"primary"}>
                        <SendIcon/>
                    </IconButton>
                </Grid>
                <Grid item>
                    <TextField
                        id="input-with-icon-grid"
                        multiline
                        fullWidth
                    />
                </Grid>
            </Grid>
        </div>
    </div>
}
export default ChatInput