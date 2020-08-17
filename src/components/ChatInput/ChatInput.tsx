import React, {useState} from "react";
import {
    Button,
    ButtonGroup,
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
    const [message, setMessage] = useState('')
    const [messages, addMessage] = useState([])
    const [socket, setSocket] = useState(io('http://localhost:3000'))
    socket.on('msgToClient', msg => receiveMessage(msg))

    const receiveMessage = (message: string) => {
        console.log('received message', message)
        addMessage([...messages, message])
    }

    console.log(message, 'message')
    console.log('messages', messages)

    function onChange(event:any) {
        setMessage(event.target.value)
    }
    
    function sendMessage(event:any) {
        event.preventDefault()
        socket.emit('msgToServer', message)
        addMessage([...messages, message])
        setMessage('')
    }

    return <div>
        <div className={classes.margin}>
            <Grid container spacing={1} alignItems={"flex-end"}>
                <FormControl>
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
                            onChange={onChange}
                            value={message}
                        />
                </Grid>
                </FormControl>
            </Grid>
        </div>
    </div>
}
export default ChatInput