import React from "react";
import { Drawer, Box, Typography } from "@mui/material";

import { useState } from 'react';
import { FaBars } from "react-icons/fa";
import './index.css';

function DrawerMenu() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    return(
        <>
            <FaBars class="menu-icon" onClick={() => setIsDrawerOpen(true)}/>

            <Drawer anchor="right" variant="temporary" open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
                <Box p={2} width="250px" textAlign="center" role="presentation">
                    <Typography variant="h6" component="div">
                        Side Panel
                    </Typography>
                </Box>
            </Drawer>
        </>
    )
}

export default DrawerMenu;