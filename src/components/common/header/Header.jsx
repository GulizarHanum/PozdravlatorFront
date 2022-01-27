import React from "react";
import {AppBar, Chip, IconButton, Toolbar, Typography} from "@material-ui/core";
import useStyles from "../../styles/layout-styles";
import {HeaderButtons} from "./HeaderButtons";

/**
 * Компонента-заголовок приложения
 */
const Header = () => {
    const classes = useStyles();

    return (
        <AppBar
            position="fixed"
            elevation={0}
            className={classes.appBar}
            color="secondary">
            <Toolbar>
                <IconButton color="inherit"
                            aria-label="open drawer"
                            edge="start">
                </IconButton>
                <div className={classes.logo}>
                    <Typography variant="h6" component="div" align="center">
                        Поздравлятор
                    </Typography>
                    <Chip size="small" style={{marginLeft: 8}} label="alpha"/>
                </div>
                <div className={classes.headerButtons}>
                    <HeaderButtons/>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Header;