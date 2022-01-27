import {createStyles, makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexGrow: 1,
        },
        logo: {
            display: 'flex',
            marginLeft: '16px',
            marginRight: '16px',
            alignContent: 'center',
        },
        headerButtons: {
            alignContent: 'center',
            flexGrow: 1,
        },
        appBar: {
            borderBottom: `1px solid ${theme.palette.grey[300]}`,
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        },
        contentShift: {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        },
        drawerHeader: {
            display: 'flex',
            alignItems: 'center',
            padding: theme.spacing(0, 1),
            // necessary for content to be below app bar
            ...theme.mixins.toolbar,
            justifyContent: 'flex-end',
        },
        photo: {
            height: '150px',
        },
        paper: {
            padding: theme.spacing(2),
        }
    }),
);

export default useStyles;
