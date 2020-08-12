import React, {FC, PureComponent, SFC, useState} from 'react';
import { Theme, createStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import halcyon from '../../utils/images/halcyon.jpg'
import {PADDING} from "../../utils/styles/padding";
import {ChatItemComponentInterface} from "./ChatItemComponentInterface";
import {Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, Paper} from "@material-ui/core";
import { Redirect } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            // maxWidth: '36ch',
            backgroundColor: theme.palette.background.paper,
        },
        block: {
            display: 'block',
        },
        emptyDiv: {
            width: PADDING.LARGE
        },
        notifyDiv: {
            display: 'flex',
            alignItems: 'center'
        }
    }),
);

const ChatItemComponent: FC<ChatItemComponentInterface> = ({messages, userId}) => {
    const classes = useStyles(messages);
    const [goToChat, setGoToChat] = useState(false)

    return (
        <List
            className={classes.root}
            onClick={() => setGoToChat(!goToChat)}
        >
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Cindy Baker" src={halcyon} />
                </ListItemAvatar>
                <ListItemText
                    primary="Sandra Adams"
                    secondary={
                        <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                className={classes.block}
                                color="textPrimary"
                                gutterBottom
                            >
                                Do you have Paris recommendations? Have you ever…'
                            </Typography>
                            <Typography
                                component="span"
                                variant="subtitle2"
                                color="textSecondary"
                            >
                                09.08.2020 9:17
                            </Typography>
                        </React.Fragment>
                    }
                />
                <ListItemText>
                    {
                        messages > 0 ?
                        <Chip
                            color={"secondary"}
                            label={messages}
                            size={'small'}
                        /> : null
                    }
                </ListItemText>
            </ListItem>
            <Divider variant="inset" component="li" />
            {goToChat && <Redirect to={`/user/${userId}`}/>}
        </List>
    );
}

export default ChatItemComponent