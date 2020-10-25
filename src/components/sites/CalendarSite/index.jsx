import { IconButton, Typography, withStyles } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import * as React from "react";
import Calendar from "react-calendar";
import styled from "styled-components";
import { AppDrawer } from "../../ui/AppDrawer";
import { NavigationBar } from "../../ui/NavigationBar";

import 'react-calendar/dist/Calendar.css';

const StyledTypography = withStyles({
    root: {
        fontSize: 20,
        marginLeft: 15,
    }
})(Typography)

const NavigationBarLeftContainer = styled.div`
    display: flex;
    align-items: center;
`

const SiteContainer = styled.div`
    display: flex;
    justify-content: center;
    alignItems: center;
    height: ${window.screen.height / 2}px;
`

const CalendarContainer = styled.div`
    align-self: center;
    height: 280px;
`

export const CalendarSite = () => {
    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
    // eslint-disable-next-line
    const [date, setDate] = React.useState(new Date());

    const handleClickOpenDrawer = () => {
        setIsDrawerOpen(true);
    }

    const handleCloseDrawer = () => {
        setIsDrawerOpen(false)
    }

    return (
    <>
       <NavigationBar>
            <NavigationBarLeftContainer>
                <IconButton onClick={handleClickOpenDrawer}>
                    <MenuIcon style={{color: "white"}}/>
                </IconButton>
                <StyledTypography>
                    Calendar
                </StyledTypography>
            </NavigationBarLeftContainer>
        </NavigationBar>
        <AppDrawer isDrawerOpen={isDrawerOpen} handleCloseDrawer={handleCloseDrawer}/>
        <SiteContainer>
            <CalendarContainer>
                <Calendar value={date}/>
            </CalendarContainer>
        </SiteContainer>
    </>
    )
}