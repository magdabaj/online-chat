import * as React from "react";
import { Button } from '@material-ui/core';

export interface IMainProps {
    Title: string,
    Image?: string, // image property is optional
    Body: string,
}

export const Main: React.FC<IMainProps> = ({ Title, Image, Body}) =>
    <div>
        <h1>Hello world</h1>
        <div>{Title}</div>
        <div>{Image}</div>
        <div>{Body}</div>
        <Button variant={'contained'} color={'primary'}>Hello world</Button>
    </div>