import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import useStyles from "./components/styles/layout-styles";

import {Route, Routes} from "react-router-dom";
import Header from "./components/common/header/Header";
import UpcomingBirthdaysView from "./components/pages/upcoming/UpcomingBirthdaysView";
import clsx from "clsx";
import AllBirthdaysView from "./components/pages/home/AllBirthdaysView";
import {AddForm} from "./components/pages/add/AddForm";
import {EditForm} from "./components/pages/edit/EditForm";
import {NotFound} from "./components/pages/not-found/NotFound";

const Layout = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <Header/>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: false,
                })}
            >
                <div className={classes.drawerHeader}/>
                <Routes>
                    <Route path="/" element={<AllBirthdaysView/>}/>
                    <Route path="/upcoming" element={<UpcomingBirthdaysView/>}/>
                    <Route path="/new" element={<AddForm/>}/>
                    <Route path={`/update/:id`} element={<EditForm/>}/>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
        </div>

    );
};

export default Layout;
