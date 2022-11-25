
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from "react-router-dom"
import { getSingleCarBrand } from "./carBrandSlice";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Button, Divider, IconButton, Typography } from "@mui/material";
import DialogDeleteCarBrand from "./DialogDeleteCarBrand";




function CarBrandDetail() {
    const [open, setOpen] = useState(false);
    const [carBrand, setcarBrand] = useState({
        name: "loading...",
        image: "loading...",
        status: "loading...",
        description: "loading..."
    });
    const { selectedCarBrand } = useSelector((state) => state.carBrand)

    setTimeout(() => {
        if (selectedCarBrand) {
            setcarBrand(selectedCarBrand)
        }
    }, 100);


    const dispatch = useDispatch();
    const params = useParams();
    const id = params.id
    const navigate = useNavigate()


    useEffect(() => {
        dispatch(getSingleCarBrand(id));
    }, [dispatch, id])

    const handleClickOpen = () => {
        setOpen(true)
    };

    return (

        <Box maxWidth="sm" sx={{ fontFamily: "Poppins" }}>
            <DialogDeleteCarBrand open={open} setOpen={setOpen} id={id} />
            <Box sx={{ display: "flex" }}>
                <IconButton
                    onClick={() => navigate("/")}
                    sx={{ width: 35, height: 35 }}>
                    <ArrowBackIosNewIcon sx={{ width: 15, height: 15 }} />
                </IconButton>

                <Typography
                    sx={{ ml: 1, fontWeight: 600, fontSize: 24, color: "#2F465F" }}
                >Brand Detail</Typography>
            </Box>

            <Typography
                sx={{ mb: 2, fontWeight: 600, fontSize: 14, color: "#2F465F" }}
            >Brand Logo</Typography>

            <Divider sx={{ mb: 2 }} />

            <img alt="logo" src={carBrand.image}
                style={{ height: 120, width: 150 }}
            />

            <Typography
                sx={{ mt: 7, mb: 2, fontWeight: 600, fontSize: 14, color: "#2F465F" }}
            >Brand Details</Typography>

            <Divider />

            <Box sx={{ display: "flex" }}>
                <Box sx={{ mr: 20 }}>
                    <Typography
                        sx={{ mb: 1, fontWeight: 400, fontSize: 14, color: "#8C8C8C" }}
                    >Brand Name</Typography>
                    <Typography
                        sx={{ fontWeight: 600, fontSize: 16, color: "#2F465F" }}
                    >{carBrand.name}</Typography>
                </Box>
                <Box>
                    <Typography
                        sx={{ mb: 1, fontWeight: 400, fontSize: 14, color: "#8C8C8C" }}
                    >Brand Status</Typography>

                    {carBrand.status === 'Active'
                        ? (<div
                            style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 80, height: 32, backgroundColor: "#CEF7E2", borderRadius: "48px" }}
                        >
                            <div
                                style={{ marginRight: 10, width: 13, height: 13, backgroundColor: "#1F7B4D", borderRadius: "50%" }}
                            ></div>

                            <div
                                style={{ color: "#1F7B4D", fontWeight: 500 }}
                            >
                                {carBrand.status}
                            </div>

                        </div>)

                        : (<div
                            style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 100, height: 32, backgroundColor: "#FAFAFA", borderRadius: "48px" }}
                        >
                            <div
                                style={{ marginRight: 10, width: 13, height: 13, backgroundColor: "#5F5F5F", borderRadius: "50%" }}
                            ></div>

                            <div
                                style={{ color: "#5F5F5F", fontWeight: 500 }}
                            >
                                {carBrand.status}
                            </div>

                        </div>)
                    }


                </Box>


            </Box>
            <Typography
                sx={{ mt: 4, mb: 1, fontWeight: 400, fontSize: 14, color: "#8C8C8C" }}
            >Brand Description</Typography>
            <Typography
                sx={{ fontSize: 14, color: "#2F465F", fontWeight: 600 }}
            >{carBrand.description}</Typography>


            <Box sx={{ mt: 15, display: "flex" }}>
                <Button
                    variant="contained"
                    onClick={() => navigate(`/carBrand/edit/${id}`)}
                >Edit Information </Button>

                <Button onClick={handleClickOpen}
                    sx={{ ml: 15 }}
                    variant="outlined"
                >Delete Car Brand
                </Button>
            </Box>
        </Box>

    );
}

export default CarBrandDetail;