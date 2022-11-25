import React, { useCallback } from 'react';
import Button from '@mui/material/Button';
import { FormProvider, FSelect, FTextField, FUploadAvatar } from "../../components/form"

import { useDispatch, useSelector } from "react-redux";
import { LoadingButton } from "@mui/lab";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";


import { Divider, Grid, Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import { createCarBrand, getCarBrands } from './carBrandSlice';


const CreateCarBrandSchema = yup.object().shape({
    name: yup.string().required("name is required"),
    description: yup.string().required("description is required"),
    model: yup.string().required("model is required"),
});


const defaultValues = {
    name: "",
    image: "",
    description: "",
    status: "Active",
    model: "",
}

export default function FormCreateDialog({ handleClose }) {

    const { isLoading } = useSelector((state) => state.carBrand);

    const methods = useForm({
        resolver: yupResolver(CreateCarBrandSchema),
        defaultValues
    });

    const { handleSubmit,
        setValue,
        formState: { isSubmitting },
    } = methods;

    const dispatch = useDispatch();

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
    const onSubmit = (data) => {
        const page = 1
        const { name, image, description, status, model } = data
        dispatch(createCarBrand({ name, image, description, status, model }))
        setTimeout(() => {
            dispatch(getCarBrands({ page }));
        }, 2000);

    };


    return (

        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3} sx={{ fontFamily: "Poppins" }}>

                <Grid item xs={12} >
                    <Typography sx={{ fontWeight: 600, mb: 1 }}>Brand Logo</Typography>
                    <Divider sx={{ mb: 2 }} />
                    <Box sx={{ display: "flex" }}>
                        <FUploadAvatar
                            name="image"
                            accept="image/*"
                            maxSize={3145728}
                            onDrop={handleDrop}

                        />
                    </Box>

                </Grid>

                <Grid item xs={12} md={12}>
                    <Typography sx={{ fontWeight: 600, mb: 1 }}>Brand Details</Typography>
                    <Divider sx={{ mb: 2 }} />

                    <Typography sx={{ fontWeight: 400, color: "#8C8C8C" }}>Brand Name</Typography>
                    <FTextField name="name" label="Input Content" />

                    <Typography sx={{ fontWeight: 400, color: "#8C8C8C", mt: 3 }}>Brand Status</Typography>
                    <Box sx={{ width: 131, height: 48 }}>
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
                    </Box>

                    <Typography sx={{ fontWeight: 400, color: "#8C8C8C", mt: 3 }}>Brand Model</Typography>
                    <FTextField name="model" label="Input Model" />

                    <Typography sx={{ fontWeight: 400, color: "#8C8C8C", mt: 2 }}>Brand Description</Typography>
                    <Stack spacing={3} alignItems="flex-end" sx={{}}>
                        <FTextField name="description" multiline label="Input Content" />
                    </Stack>

                </Grid>
            </Grid>

            <Box sx={{ mt: 3, display: "flex", justifyContent: "flex-end" }}>
                <Button onClick={handleClose} variant="outlined"
                    sx={{ mr: 2 }}
                >Cancel</Button>

                <LoadingButton

                    variant="contained"
                    type="submit"
                    loading={isLoading || isSubmitting}
                >
                    Create Brand
                </LoadingButton>


            </Box>
        </FormProvider>


    );
}


