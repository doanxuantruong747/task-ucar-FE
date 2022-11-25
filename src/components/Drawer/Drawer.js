import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ToysOutlinedIcon from '@mui/icons-material/ToysOutlined';
import { useNavigate } from "react-router-dom";

import { AppBar, Button } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import LitsFolder from '../list/LitsFolder';
import SettingsIcon from '@mui/icons-material/Settings';


const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);

    const navigate = useNavigate();

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />

            <AppBar position="fixed" open={open} sx={{ backgroundColor: "#fff" }}>
                <Toolbar >
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon sx={{ color: "#616161" }} />
                    </IconButton>

                    <Box sx={{ flexGrow: 1 }} />

                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <IconButton>
                            <InfoOutlinedIcon />
                        </IconButton>

                        <IconButton >
                            <NotificationsOutlinedIcon sx={{ color: "#616161" }} />
                        </IconButton>

                        <IconButton>
                            <AccountCircle sx={{ color: "#bdbdbd" }} />
                        </IconButton>

                        <span style={{
                            fontSize: '14px', color: "#616161",
                            marginTop: '10px'
                        }}>Admin</span>
                        <IconButton sx={{ width: 15, height: 15, mt: "12px" }}>
                            <KeyboardArrowDownOutlinedIcon sx={{ width: 20, height: 20, }} />
                        </IconButton>

                    </Box>

                </Toolbar>
            </AppBar>

            <Drawer position="fixed"
                sx={{
                    width: 240,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        backgroundColor: '#323435',
                        width: 240,
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <span style={{ width: "100%", marginTop: "5px", }}>
                        <img onClick={() => { navigate('/') }}
                            style={{ width: "100px", cursor: "pointer" }}
                            alt='logo'
                            src='https://marketplace-stg.carbuyer.com.sg/static/ucars_logo_org-f2857253b59c55ecd4aab760cbc5a14b.png'></img>
                    </span>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <MenuIcon sx={{ color: "#fff" }} /> : <MenuIcon sx={{ color: "#fff" }} />}
                    </IconButton>
                </DrawerHeader>

                <Box sx={{ mt: 5, textAlign: "center", width: 208, height: 52 }}>
                    <Button
                        onClick={() => { navigate('/') }}
                        sx={{ ml: 2, width: 208, height: 52 }}
                        variant="contained">
                        <ToysOutlinedIcon sx={{ mr: 1 }} />
                        Car Brand</Button>
                </Box>

                <Box>
                    <LitsFolder />
                </Box>

                <Box sx={{ mt: 20, ml: 1.5 }}>
                    <div
                        style={{
                            height: "1px",
                            width: "208px",
                            backgroundColor: "#8C8C8C",

                        }}
                    />

                    <Box sx={{ mt: 1, display: "flex", justifyContent: "center", color: "#8C8C8C" }}>
                        <SettingsIcon sx={{ mr: 3, }} />
                        <span
                            style={{
                                marginRight: "20px"
                            }}
                        >Setting</span>
                    </Box>

                </Box>


            </Drawer>


        </Box>
    );
}