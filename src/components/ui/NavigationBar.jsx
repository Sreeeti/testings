import { AppBar, Toolbar } from "@material-ui/core";
import * as React from "react";

export const NavigationBar = (props) => {
return(
    <AppBar>
        <Toolbar style={{display: "flex", justifyContent: "space-between"}}>
               {props.children}
        </Toolbar>
    </AppBar>
)}
        