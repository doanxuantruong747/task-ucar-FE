import * as React from "react";
import { Routes, Route } from "react-router-dom";
import AlertMsg from "../components/alertMsg/AlertMsg";
import BlankLayout from "../layouts/BlankLayout";
import MainLayout from "../layouts/MainLayout";
import DetailPage from "../pages/DetailPage";
import EditPage from "../pages/EditPage";

import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";



function Router() {

    return (
        <Routes>

            <Route path="/" element={<MainLayout />}>
                <Route index element={<HomePage />} />
                <Route path="carBrand/:id" element={<DetailPage />} />
                <Route path="carBrand/edit/:id" element={<EditPage />} />
            </Route>

            <Route element={<BlankLayout />}>
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>
    );
}

export default Router;