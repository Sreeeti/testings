import { IconButton, Typography, withStyles } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import * as React from "react";
import styled from "styled-components";
import { AppDrawer } from "../ui/AppDrawer";
import { NavigationBar } from "../ui/NavigationBar";

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

const Title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    font-weight: 700;
`

export const HomeSite = () => {
    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

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
                    Home
                </StyledTypography>
            </NavigationBarLeftContainer>
        </NavigationBar>
        <AppDrawer isDrawerOpen={isDrawerOpen} handleCloseDrawer={handleCloseDrawer}/>
        <SiteContainer>
            <Title>This is the Home Site</Title>
        </SiteContainer>
        </>
    )
}