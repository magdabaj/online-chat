
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {App} from './App';
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./utils/theme";
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ThemeProvider>,
    document.getElementById('app')
);
