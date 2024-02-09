import { Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import PropTypes from "prop-types";

import { Navbar, SideBar } from "../components";

const drawerWidth = 280;

export const JournalLayout = ({ children }) => {
    return (
        <Box sx={{ display: 'flex' }} className="animate__animated animate__fadeIn animate__faster">

            <Navbar drawerWidth={drawerWidth} />

            <SideBar drawerWidth={drawerWidth} />

            <Box
                component='main'
                sx={{ flexGrow: 1, p: 3 }}
            >
                <Toolbar />

                {children}

            </Box>
        </Box>
    )
}

JournalLayout.propTypes = {
    children: PropTypes.node.isRequired,
}