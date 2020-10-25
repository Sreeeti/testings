import { AppBar, Drawer, List, ListItem, Toolbar, withStyles } from "@material-ui/core";
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import TodayRoundedIcon from '@material-ui/icons/TodayRounded';
import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Routes } from "../routers/Routes";

const StyledAppBar = withStyles({
    root: {
        position: "absolute",
        left: 0,
        width: 300,
    }
})(AppBar)

const StyledListItem = withStyles({
    root: {
        display: "flex",
        alignItems: "center",
        marginBottom: 5,

        "&:hover" : {
            backgroundColor: "rgba(	63, 81, 181, 0.2)",
            color: "rgb(63, 81, 181)",
            borderRadius: 7,
            cursor: "pointer",
        }
    }
})(ListItem)

const DrawerBody = styled.div`
    padding: 15px;
    width: 250px;
`

const DrawerText = styled.div`
    font-size: 18px;
    font-weigt: 500;
    margin-left: 15px;
`

const drawerItems = [
    {
        name: "Home",
        icon: <HomeRoundedIcon style={{fontSize: 30}} />,
        route: Routes.ROOT,
    },
    {
        name: "Calendar",
        icon: <TodayRoundedIcon style={{fontSize: 30}} />,
        route: Routes.CALENDAR.ROOT,
    }
]

export const AppDrawer = ({isDrawerOpen, handleCloseDrawer}) => {
    return (
        <Drawer anchor="left" open={isDrawerOpen} onClose={handleCloseDrawer}>
                <DrawerBody>
                    <StyledAppBar>
                        <Toolbar />
                    </StyledAppBar>
                    <Toolbar />
                    <List>
                        {drawerItems.map(drawerItem => 
                            <StyledListItem key={drawerItem.name}>
                                <Link to={drawerItem.route} style={{ display: "flex", alignItems: "center", textDecoration: "none", color: "inherit",}}>
                                    {drawerItem.icon}
                                    <DrawerText>{drawerItem.name}</DrawerText>
                                </Link>
                            </StyledListItem>
                        )}
                    </List>
                </DrawerBody>
            </Drawer>
    )
}