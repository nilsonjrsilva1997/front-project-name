import React from "react";
import { Drawer, Box, Typography, MenuItem, ListItemText } from "@mui/material";

import { useState } from 'react';
import { FaBars } from "react-icons/fa";
import './index.css';

function DrawerMenu(props) {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    return(
        <>
            <FaBars class="menu-icon" onClick={() => setIsDrawerOpen(true)}/>

            <Drawer anchor={props.anchor} variant="temporary" open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
                <Box p={2} width="250px" textAlign="center" role="presentation">
                    <Typography variant="h6" component="div">
                    <MenuItem>
                        <ListItemText>Meus Pedidos</ListItemText>      
                    </MenuItem>
                    </Typography>
                </Box>
            </Drawer>
        </>
    )
}

export default DrawerMenu;