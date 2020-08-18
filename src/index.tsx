
import React from 'react';
import * as ReactDOM from 'react-dom';
import {App} from './App';
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./utils/styles/theme";
import {BrowserRouter} from "react-router-dom";
import './index.css'

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ThemeProvider>,
    document.getElementById('app')
);
