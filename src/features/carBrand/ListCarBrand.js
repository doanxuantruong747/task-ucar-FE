import { Divider, Radio, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCarBrands } from './carBrandSlice';

function ListCarBrand({ filterName, page }) {

    const { listCarBrands } = useSelector((state) => state.carBrand)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect((name) => {
        name = filterName
        dispatch(getCarBrands({ page, name }));
    }, [dispatch, page, filterName]);

    return (
        <TableContainer sx={{ minWidth: { sx: 320, md: 650 }, overflowX: "auto" }}>
            <Table>
                <TableBody>
                    {
                        listCarBrands.map((brand) => (

                            <TableRow key={brand._id}>
                                <TableCell>
                                    <Radio sx={{ ml: 10 }} />
                                </TableCell>

                                <TableCell>
                                    <img alt='logo' src={brand.image}
                                        style={{
                                            width: "100px", height: "64px",
                                            cursor: "pointer", marginLeft: -60
                                        }} />

                                </TableCell>

                                <TableCell>
                                    {brand.status === 'Active'
                                        ? (<div
                                            style={{
                                                height: "64px",
                                                width: "2px",
                                                backgroundColor: "#0FC97B",
                                            }}
                                        />)
                                        : (<div
                                            style={{
                                                height: "64px",
                                                width: "2px",
                                                backgroundColor: "#5F5F5F",

                                            }}
                                        />)
                                    }

                                </TableCell>

                                <TableCell>
                                    <Box sx={{ ml: 5 }}>
                                        <Typography sx={{ fontSize: 20, fontWeight: 500, color: "#2F465F", fontFamily: "Poppins" }}>{brand.name}</Typography>
                                        <Box sx={{ display: "flex" }}>
                                            <Typography
                                                sx={{ fontSize: 14, color: "#8C8C8C", ml: 2, fontWeight: 400, fontFamily: "Poppins" }}
                                            >{brand.description}</Typography>

                                            <Divider orientation="vertical" variant="middle" flexItem
                                                sx={{ ml: 2 }}
                                            />

                                            <Typography
                                                sx={{ ml: 2, color: "#0F5EDD", fontWeight: 500, fontSize: 14, fontFamily: "Poppins" }}
                                            >{brand.model}</Typography>
                                        </Box>
                                    </Box>
                                </TableCell>

                                <TableCell>
                                    <Box sx={{ ml: 1 }}>
                                        <Typography
                                            sx={{ color: "#2F465F", fontWeight: 500, fontSize: 14, fontFamily: "Poppins" }}
                                        >Last Update</Typography>
                                        <Typography
                                            sx={{ color: "#8C8C8C", fontWeight: 400, fontSize: 14, fontFamily: "Poppins" }}
                                        >{brand.updatedAt}</Typography>
                                    </Box>
                                </TableCell>

                                <TableCell>
                                    {
                                        brand.status === 'Active'

                                            ? <div style={{
                                                marginLeft: 2,
                                                display: "flex", alignItems: "center", justifyContent: "center", width: "111px", height: "40px",
                                                backgroundColor: "#FAFAFA", color: '#1F7B4D', fontWeight: 500, borderRadius: "5px"
                                            }}>

                                                <div style={{ backgroundColor: '#1F7B4D', width: "12px", height: "12px", borderRadius: "50%" }}></div>
                                                <span style={{ marginLeft: "10px" }}>Active</span> </div>

                                            : <div style={{
                                                marginLeft: 5,
                                                display: "flex", alignItems: "center", justifyContent: "center", width: "111px", height: "40px",
                                                backgroundColor: "#FAFAFA", color: '#1F7B4D', fontWeight: 500, borderRadius: "5px"
                                            }}>

                                                <div style={{ backgroundColor: '#5F5F5F', width: "12px", height: "12px", borderRadius: "50%" }}></div>
                                                <span style={{ color: "#5F5F5F", marginLeft: "10px" }}>Inactive</span> </div>
                                    }
                                </TableCell>

                                <TableCell>
                                    <div onClick={() => navigate(`/carBrand/${brand._id}`)}
                                        style={{
                                            marginLeft: 5,
                                            display: "flex", alignItems: "center", justifyContent: "center",
                                            width: "111px", height: "40px", backgroundColor: "#B4B4B4", color: '#232323', fontWeight: 500, borderRadius: "5px",
                                            cursor: "pointer"
                                        }}>
                                        <span >View Detail</span> </div>
                                </TableCell>


                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>



    )
}

export default ListCarBrand