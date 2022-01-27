import React from 'react';
import {Paper} from '@material-ui/core';
import useStyles from "../styles/layout-styles";

/**
 * Компонента-фон для таблиц
 */
export const Panel = ({children}) => {
    const classes = useStyles();

    return (
        <Paper className={classes.paper}>
            {children}
        </Paper>
    )
}