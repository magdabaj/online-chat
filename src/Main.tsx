import * as React from "react";

export interface IMainProps {
    Title: string,
    Image: string,
    Body: string,
}

export const Main: React.FC<IMainProps> = ({ Title, Image, Body}) =>
    <div>
        <h1>Hello world</h1>
        <div>{Title}</div>
        <div>{Image}</div>
        <div>{Body}</div>
    </div>