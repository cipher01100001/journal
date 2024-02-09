import { useSelector } from "react-redux";
import { Box, Divider, Drawer, List, Toolbar, Typography } from "@mui/material";
import PropTypes from "prop-types";

import { SideBarItem } from "./SideBarItem";

export const SideBar = ({ drawerWidth = 240 }) => {

    const { displayName } = useSelector(state => state.auth);
    const { notes } = useSelector(state => state.journal);

    return (
        <Box
            component='nav'
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >

            <Drawer
                variant='permanent' //temporaly si se quiere de forma condicional
                open // se establece predeterminadamente como true
                sx={{
                    display: { xs: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth } // al usar sx de Mui se puede usar estilos como Sass y entre esto las propiedades conmutadas como la creada 
                }}
            >

                <Toolbar>
                    <Typography variant="h6" noWrap component='div'>
                        {displayName}
                    </Typography>
                </Toolbar>

                <Divider />

                <List>
                    {
                        notes.map(note => (
                            <SideBarItem key={note.id} {...note} />
                        ))
                    }
                </List>

            </Drawer>

        </Box>
    )
}

SideBar.propTypes = {
    drawerWidth: PropTypes.number.isRequired,
}