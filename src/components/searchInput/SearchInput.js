import React, { useState } from "react";

import { IconButton, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function SearchInput({ handleSubmit }) {
    const [searchQuery, setSearchQuery] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        handleSubmit(searchQuery);
    };

    return (
        <form onSubmit={onSubmit}>
            <TextField
                value={searchQuery}
                placeholder="search car brand"
                onChange={(event) => setSearchQuery(event.target.value)}
                sx={{ borderRadius: 10, minWidth: { sx: "auto", md: 250 } }}
                size="small"
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end" >
                            <IconButton
                                type="submit"
                                color="primary"
                                aria-label="search car brand"
                            >
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
        </form>
    );
}

export default SearchInput;
