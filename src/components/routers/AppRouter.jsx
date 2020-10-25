import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CalendarSite } from "../sites/CalendarSite";
import { HomeSite } from "../sites/HomeSite";
import { Routes } from "./Routes";

export const AppRouter = () => {
    return (
    <Router>
        <Switch>
            <Route exact path={Routes.ROOT} component={HomeSite} />
            <Route exact path={Routes.CALENDAR.ROOT} component={CalendarSite} /> 
        </Switch>
    </Router>
    )
};
