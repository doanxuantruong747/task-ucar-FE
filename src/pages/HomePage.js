import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

import SearchInput from "../components/searchInput/SearchInput"
import CreateCarBrand from "../features/carBrand/CreateCarBrand";
import ListCarBrand from "../features/carBrand/ListCarBrand"

function HomePage() {
    const [filterName, setFilterName] = useState("");
    const [page, setPage] = useState(1);
    const [open, setOpen] = useState(false);



    const handleSubmit = (searchQuery) => {
        setFilterName(searchQuery);
        setPage(1)
    };

    const handleClickOpen = () => {
        setOpen(true)
    };


    return (
        <Box>
            <CreateCarBrand setOpen={setOpen} open={open} />
            <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                <Box sx={{ width: "70%", display: "flex" }}>
                    <Typography
                        sx={{ mr: 3, fontFamily: "Poppins", fontSize: 24, fontWeight: 600 }}
                    >CAR BRANDS LIST</Typography>
                    <select style={{ marginRight: "80px", height: "40px", border: "none", fontSize: 14, fontWeight: 500 }} >
                        <option>View All </option>
                    </select>
                    <SearchInput handleSubmit={handleSubmit} />
                </Box>

                <Box >

                    <Button variant="contained"
                        onClick={() => { handleClickOpen() }}
                    >+ Add Brand</Button>
                </Box>
            </Box>

            <Box sx={{ mt: 7 }}>
                <ListCarBrand filterName={filterName} page={page} />
            </Box>

        </Box>
    );
}



export default HomePage;