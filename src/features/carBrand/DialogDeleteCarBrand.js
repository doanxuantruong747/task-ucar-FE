import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { useDispatch } from 'react-redux';
import { deleteCarBrand } from './carBrandSlice';
import { useNavigate } from 'react-router-dom';



export default function DialogDeleteCarBrand({ setOpen, open, id }) {

    const navigate = useNavigate()
    const dispatch = useDispatch();

    const handleDelete = () => {
        if (id) { dispatch(deleteCarBrand(id)) }
        setTimeout(() => {
            navigate('/')
        }, 500);
    }
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="draggable-dialog-title"
            >
                <DialogContent>
                    <DialogContentText> <span style={{ color: "red" }}>Sorry!</span> you're sure you want to delete ? </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button autoFocus onClick={handleDelete}>
                        Yes
                    </Button>

                </DialogActions>
            </Dialog>
        </div>
    );
}
