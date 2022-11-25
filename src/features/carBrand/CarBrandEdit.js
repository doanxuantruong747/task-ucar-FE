
import { Box, } from "@mui/system";
import { useCallback } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { EditCarBrand, getSingleCarBrand } from "./carBrandSlice";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Divider, IconButton, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { FormProvider, FSelect, FTextField, FUploadAvatar } from "../../components/form"
import { LoadingButton } from "@mui/lab";


function CarBrandEdit() {

    const dispatch = useDispatch();
    const navigate = useNavigate()
    const { selectedCarBrand, isLoading } = useSelector((state) => state.carBrand)

    const defaultValues = {
        name: selectedCarBrand.name,
        image: selectedCarBrand.image,
        status: selectedCarBrand.status,
        description: selectedCarBrand.description,
    }

    const methods = useForm({ defaultValues });
    const { handleSubmit,
        setValue,
        formState: { isSubmitting },
    } = methods;

    const handleDrop = useCallback(
        (acceptedFiles) => {
            const file = acceptedFiles[0];
            if (file) {
                setValue(
                    "image",
                    Object.assign(file, {
                        preview: URL.createObjectURL(file),
                    })
                );
            }
        },
        [setValue]
    );

    const handelSave = () => {
        navigate(`/carBrand/${selectedCarBrand._id}`)
    };

    const onSubmit = (data) => {

        console.log('data', data);
        const { name, image, status, description } = data



        dispatch(EditCarBrand({ id: selectedCarBrand._id, name, image, status, description }));
        setTimeout(() => {
            dispatch(getSingleCarBrand(selectedCarBrand._id))
            handelSave()
        }, 500);
    };



    return (
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <Box maxWidth="sm" sx={{ fontFamily: "Poppins" }}>
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
                <Box sx={{ display: "flex" }}>
                    <FUploadAvatar
                        name="image"
                        accept="image/*"
                        maxSize={3145728}
                        onDrop={handleDrop}
                    />
                </Box>


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
                        > <FTextField name="name" /></Typography>
                    </Box>
                    <Box>
                        <Typography
                            sx={{ mb: 1, fontWeight: 400, fontSize: 14, color: "#8C8C8C" }}
                        >Brand Status</Typography>

                        <FSelect name="status" size="small"
                        >
                            {[
                                { value: "Active", label: "Active" },
                                { value: "Inactive", label: "Inactive" },

                            ].map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </FSelect>

                        {/* <div
                            style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 80, height: 32, backgroundColor: "#CEF7E2", borderRadius: "48px" }}
                        >
                            <div
                                style={{ marginRight: 10, width: 13, height: 13, backgroundColor: "#1F7B4D", borderRadius: "50%" }}
                            ></div>
                            <div
                                style={{ color: "#1F7B4D", fontWeight: 500 }}
                            >

                            </div>

                        </div> */}
                    </Box>


                </Box>
                <Typography
                    sx={{ mt: 4, mb: 1, fontWeight: 400, fontSize: 14, color: "#8C8C8C" }}
                >Brand Description</Typography>
                <Typography
                    sx={{ fontSize: 14, color: "#2F465F", fontWeight: 600 }}
                ><FTextField name="description" /></Typography>


                <Box sx={{ mt: 15, display: "flex" }}>
                    <LoadingButton
                        sx={{}}
                        type="submit"
                        variant="contained"
                        loading={isSubmitting || isLoading}
                    >
                        Save Changes
                    </LoadingButton>
                </Box>
            </Box>
        </FormProvider>

    );
}

export default CarBrandEdit;