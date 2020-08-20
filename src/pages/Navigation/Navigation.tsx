import React, {FC, useContext} from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded'
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import {Link} from 'react-router-dom';
import {NavigationInterface} from "./NavigationInterface";
import {Context} from "../../context";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(4),
            [theme.breakpoints.up('sm')]: {
                display: 'none'
            }
        },
        title: {
            flexGrow: 1,
        },
        link: {
            textDecoration: 'none',
            color: 'inherit'
        }
    }),
);

const Navigation: FC<NavigationInterface> = () => {
    const classes = useStyles();

    const { state, dispatch } = useContext(Context);

    const {user} = state

    return (
        <div className={classes.root}>
            <AppBar position="static" >
                <Toolbar>
                    <IconButton
                        // edge="end"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                    >
                        <Link
                            to={'/user'}
                            className={classes.link}
                        >
                            <ArrowBackIosRoundedIcon />
                        </Link>
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Chat
                    </Typography>
                    <IconButton color="inherit">
                        {user.isAuthenticated ?
                            <ExitToAppRoundedIcon/> :
                            <PersonRoundedIcon/>
                        }
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Navigation;
