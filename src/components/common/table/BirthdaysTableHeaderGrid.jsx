import {Panel} from "../Panel";
import {Button, Grid, Typography} from "@material-ui/core";
import {Link as RouterLink} from "react-router-dom";
import AddIcon from "@material-ui/icons/Add";
import React from "react";

/**
 * Компонента-заголовок таблицы для вывода списка ДР
 */
export const BirthdaysTableHeaderGrid = ({headerText}) => {
    return (
        <Grid item xs={12}>
            <Panel>
                <Grid container item xs={12}>
                    <Grid item xs={8}>
                        <Typography variant="h6">
                            {headerText}
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        container
                        justify="flex-end"
                        alignItems="center"
                        xs={4}
                    >
                        <Grid item>
                            <Button component={RouterLink}
                                    variant="contained"
                                    color="primary"
                                    disableElevation
                                    to="/new"
                                    startIcon={<AddIcon/>}>
                                Добавить ДР
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Panel>
        </Grid>
    );
}