import * as React from "react";
import { Button } from '@material-ui/core';
import openSocket from 'socket.io-client'
import {useState} from "react";

export interface IMainProps {
    Title: string,
    Image?: string, // image property is optional
    Body: string,
}

export const Main: React.FC<IMainProps> = ({ Title, Image, Body}) =>
{
    const [message, setMessage] = useState<string>('')
    const [allMessages, setAllMessages] = useState<object[]>([])

    const socket = openSocket('http://localhost:8080/')
    socket.on('chat', (data:string[]) => {
        setAllMessages([...allMessages, data])
    })

    const sendMessage = () => {
        console.log('SENT')

        socket.emit('chat', message)

        setMessage('')
    }

    return (
        <div>
            <h2>Chat Message</h2>
            <div>
                {allMessages.map(message => {
                    return <div >{message}</div>
                })}
            </div>
            <input
                onChange={e => setMessage(e.target.value)}
                placeholder={'type your message...'}
            />
            <Button onClick={() => sendMessage()} color={'primary'} variant={'contained'}>Send</Button>
        </div>
    )
}