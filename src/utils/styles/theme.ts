import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import indigo from '@material-ui/core/colors/indigo';
import red from "@material-ui/core/colors/red";
import cyan from "@material-ui/core/colors/cyan"
import pink from "@material-ui/core/colors/pink"

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#5381ff',
            main: blue["A700"],
            dark: '#1c44b2',
            contrastText: '#fff',
        },
        secondary: {
            light: '#637bfe',
            main: pink["A400"],
            dark: '#2a3eb1',
            contrastText: '#fff',
        },
        error: {
            main: red["A400"]
        }
    },
    typography: {
        subtitle2: {
            fontSize: '0.675rem'
        }
    }
});

export default theme;