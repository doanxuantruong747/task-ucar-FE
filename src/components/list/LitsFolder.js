import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

export default function LitsFolder() {
    const [open, setOpen] = React.useState(true);
    const [open1, setOpen1] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };
    const handleClick1 = () => {
        setOpen1(!open1);
    };

    return (
        <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: '' }}
            component="nav"
            aria-labelledby="nested-list-subheader"

        >

            <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                    <InboxIcon sx={{ color: "#8C8C8C" }} />
                </ListItemIcon>
                <ListItemText primary="Folder" sx={{ color: "#8C8C8C" }} />
                {open ? <ExpandLess sx={{ color: "#8C8C8C" }} /> : <ExpandMore sx={{ color: "#fff" }} />}
            </ListItemButton>

            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <StarBorder sx={{ color: "#8C8C8C" }} />
                        </ListItemIcon>
                        <ListItemText primary="item" sx={{ color: "#8C8C8C" }} />
                    </ListItemButton>
                </List>

                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <StarBorder sx={{ color: "#8C8C8C" }} />
                        </ListItemIcon>
                        <ListItemText primary="item" sx={{ color: "#8C8C8C" }} />
                    </ListItemButton>
                </List>

                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <StarBorder sx={{ color: "#8C8C8C" }} />
                        </ListItemIcon>
                        <ListItemText primary="item" sx={{ color: "#8C8C8C" }} />
                    </ListItemButton>
                </List>

            </Collapse>


            <ListItemButton onClick={handleClick1}>
                <ListItemIcon>
                    <InboxIcon sx={{ color: "#8C8C8C" }} />
                </ListItemIcon>
                <ListItemText primary="Tasks" sx={{ color: "#8C8C8C" }} />
                {open1 ? <ExpandLess sx={{ color: "#8C8C8C" }} /> : <ExpandMore sx={{ color: "#fff" }} />}
            </ListItemButton>

            <Collapse in={open1} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <StarBorder sx={{ color: "#8C8C8C" }} />
                        </ListItemIcon>
                        <ListItemText primary="item" sx={{ color: "#8C8C8C" }} />
                    </ListItemButton>
                </List>

                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <StarBorder sx={{ color: "#8C8C8C" }} />
                        </ListItemIcon>
                        <ListItemText primary="item" sx={{ color: "#8C8C8C" }} />
                    </ListItemButton>
                </List>

                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <StarBorder sx={{ color: "#8C8C8C" }} />
                        </ListItemIcon>
                        <ListItemText primary="item" sx={{ color: "#8C8C8C" }} />
                    </ListItemButton>
                </List>

            </Collapse>

            <ListItemButton >
                <ListItemIcon>
                    <InboxIcon sx={{ color: "#8C8C8C" }} />
                </ListItemIcon>
                <ListItemText primary="Modules" sx={{ color: "#8C8C8C" }} />
                {/* {open1 ? <ExpandLess sx={{ color: "#8C8C8C" }} /> : <ExpandMore sx={{ color: "#fff" }} />} */}
            </ListItemButton>

            <ListItemButton >
                <ListItemIcon>
                    <InboxIcon sx={{ color: "#8C8C8C" }} />
                </ListItemIcon>
                <ListItemText primary="Notification" sx={{ color: "#8C8C8C" }} />
                {/* {open1 ? <ExpandLess sx={{ color: "#8C8C8C" }} /> : <ExpandMore sx={{ color: "#fff" }} />} */}
            </ListItemButton>


        </List>
    );
}