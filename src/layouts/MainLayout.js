import { Outlet } from "react-router-dom";
import { Box, Stack, Toolbar } from "@mui/material";

import PersistentDrawerLeft from "../components/Drawer/Drawer";



function MainLayout() {

    return (
        <Box sx={{ display: 'flex', width: '100%' }}>

            <PersistentDrawerLeft />

            <Box component="main" sx={{ width: '100%', flexGrow: 1, p: { xs: 2, sm: 3 } }}>
                <Box sx={{ mt: 10 }} />
                <Outlet />

            </Box>
        </Box>
    );
}

export default MainLayout;