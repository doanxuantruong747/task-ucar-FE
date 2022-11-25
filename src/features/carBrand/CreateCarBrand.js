import React from 'react';

import Dialog from '@mui/material/Dialog';

import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import FormCreateDialog from './FormCreateDialog';
import { Typography } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Box } from '@mui/system';


export default function CreateCarBrand({ setOpen, open }) {

    const handleClose = () => {
        setOpen(false);
    };

    return (

        <Dialog open={open} onClose={handleClose} sx={{}} >

            <DialogTitle sx={{ fontFamily: "Poppins", bgcolor: "#FAFAFA", mb: 5, display: "flex", justifyContent: "space-between" }}>
                <Box>
                    <Typography sx={{ fontWeight: 600, fontSize: 16, color: "#232323" }}>Add Car Brand</Typography>
                    <Typography sx={{ fontWeight: 400, fontSize: 14, color: "#5F5F5F" }}>Setup new car brand</Typography>
                </Box>

                <HighlightOffIcon onClick={handleClose} sx={{ color: "#5F5F5F" }} />
            </DialogTitle>

            <DialogContent>
                <FormCreateDialog handleClose={handleClose} />
            </DialogContent>

        </Dialog>


    );
}
