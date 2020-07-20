import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import indigo from '@material-ui/core/colors/indigo';
import red from "@material-ui/core/colors/red";
import cyan from "@material-ui/core/colors/cyan"

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#5381ff',
            main: blue["A700"],
            dark: '#1c44b2',
        },
        secondary: {
            light: '#637bfe',
            main: indigo["A400"],
            dark: '#2a3eb1',
            contrastText: cyan["A200"]
        },
        error: {
            main: red["A400"]
        }
    },
});

export default theme;