import React, {useEffect, useState} from "react";
import io from 'socket.io-client'
import {
    createStyles,
    FormControl, FormHelperText,
    Grid, IconButton,
    TextField,
    Theme
} from "@material-ui/core";
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
    const [username, setUsername] = useState<string>('')
    const [text, setText] = useState<string>('')
    const [messages, setMessages] = useState<object>({
        general: [],
        typescript: [],
        nestjs: []
    })
    const [rooms, setRooms] = useState<object>({
        general: false,
        typescript: false,
        nestjs: false
    })
    const [activeRoom, setActiveRoom ] = useState<string>('general')
    const [alerts, setAlerts] = useState<Array<string>>([])
    const [socket, setSocket] = useState({ chat:  io('http://localhost:3000/chat'), alerts:  io('http://localhost:3000/alerts')})

    socket.alerts.on('alertToClient', (msg: string) => receiveAlert(msg))
    socket.chat.on('connect',  () => toggleRoomMembership())
    // @ts-ignore
    socket.chat.on('joinedRoom', (room: string) => rooms[room] = true)
    // @ts-ignore
    socket.chat.on('leftRoom', (room: string) => rooms[room] = false)

    useEffect(() => {
        // @ts-ignore
        setUsername(prompt(`Write username`).toString())
    }, [])

    const toggleRoomMembership = () => {
        if (isMemberOfActiveRoom()) socket.chat.emit('leaveRoom', activeRoom)
        else socket.chat.emit('joinRoom', activeRoom)
    }

    const isMemberOfActiveRoom = () => {
        // @ts-ignore
        return rooms[activeRoom];
    }

    const receiveChatMessage = (message: string) => {
        console.log('received message', message)
        setMessages(rooms => {
            console.log('rooms', rooms)
            // @ts-ignore
            rooms[message.room].push(message)
        })
    }
    const receiveAlert = (alert: string) => {
        console.log('received alert', alert)
        setAlerts([...alerts, alert])
    }

    console.log(text, 'message')
    console.log('rooms', rooms)
    console.log('messages', messages)

    function onChange(event: any) {
        setText(event.target.value)
    }
    
    function sendChatMessage(event: any) {
        event.preventDefault()
        if (isMemberOfActiveRoom())
            socket.chat.emit('chatToServer', {sender: username, message: text, room: activeRoom})
        else alert("You're not member of this room")
        console.log(`send: ${text}`)
        socket.chat.on('chatToClient', (msg:string) => receiveChatMessage(msg))
        setText('')
    }

    return <div>
        <div className={classes.margin}>
            <Grid container spacing={1} alignItems={"flex-end"}>
                <form onSubmit={sendChatMessage}>
                    <Grid item >
                        <IconButton color={"primary"} type={"submit"} onSubmit={sendChatMessage}>
                            <SendIcon/>
                        </IconButton>
                    </Grid>
                    <Grid item>
                            <TextField
                                id="input-with-icon-grid"
                                multiline
                                fullWidth
                                onChange={onChange}
                                value={text}
                            />
                    </Grid>
                </form>
            </Grid>
        </div>
    </div>
}
export default ChatInput