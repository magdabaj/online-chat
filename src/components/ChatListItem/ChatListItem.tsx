import React, {FC, PureComponent, SFC} from 'react';
import { Theme, createStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import halcyon from '../../utils/images/halcyon.jpg'
import {PADDING} from "../../utils/styles/padding";
import {ChatListItemInterface} from "./ChatListItemInterface";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        details: {
            display: 'flex',
            flexDirection: 'column',
        },
        content: {
            flex: '1 0 auto',
        },
        cover: {
            width: 80,
            margin: PADDING.LARGE,
            borderRadius: '50%',
        },
        controls: {
            display: 'flex',
            alignItems: 'center',
            paddingLeft: theme.spacing(1),
            paddingBottom: theme.spacing(1),
        },
        playIcon: {
            height: 38,
            width: 38,
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

const ChatListItem: SFC<ChatListItemInterface> = ({messages}) => {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.cover}
                image={halcyon}
                title="Live from space album cover"
            />
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography component="h6" variant="h6">
                        Contact Name
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        latest message
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary">
                        09.08.2020 9:17
                    </Typography>
                </CardContent>
            </div>
            <div className={classes.emptyDiv}/>
            <div className={classes.notifyDiv}>
                {messages > 0 ?
                <Chip color={'secondary'} label={messages} size={'small'}/> :
                    null}
            </div>
        </Card>
    );
}

export default ChatListItem