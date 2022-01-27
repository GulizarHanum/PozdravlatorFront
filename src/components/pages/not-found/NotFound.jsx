import React from "react";
import NotFoundImage from '../../../assets/images/404.svg'
import {Button, Grid, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";
import {ArrowBack} from "@material-ui/icons";

/**
 * Компонента-заглушка которая выводится если перешли по URL которого нет в приложении (404)
 */
export const NotFound = () => {
    return (
        <Grid container justify="center" spacing={1}>
            <Grid item>
                <img src={NotFoundImage} width="256" height="256" alt="Page not found"/>
            </Grid>
            <Grid item xs={12} container justify="center">
                <Typography variant="h5">
                    Эта страница потерялась или еще не придумана!
                </Typography>
            </Grid>
            <Grid item xs={12} container justify="center">
                <Button
                    color="primary"
                    component={Link}
                    to="/"
                    startIcon={<ArrowBack/>}
                >
                    Вернуться на главную
                </Button>
            </Grid>
        </Grid>
    )
}