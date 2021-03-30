import React from 'react';
import { routes } from './routes';
import {
    List,
    ListSubheader,
    Divider
} from '@material-ui/core';

import ListItemLink from './ListItemLink';


const NavBarList = ({ handleDrawerToggle }) => {
    return (
        <>
            <List
                component="nav"
                aria-label="main mailbox folders"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                        Menu
                    </ListSubheader>
                }
            >
                {
                    routes.map((route, i) => {
                        if (route.text !== "Acerca de") {
                            return (
                                <ListItemLink key={i} to={route.link} primary={route.text} handleDrawerToggle={handleDrawerToggle} />
                            )
                        }
                        return null;
                    })
                }
            </List >
            <Divider />
        </>
    );
}
export default NavBarList;






