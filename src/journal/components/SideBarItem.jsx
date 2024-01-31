import { useDispatch } from "react-redux"

import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { TurnedInNot } from "@mui/icons-material"
import { setActiveNote } from "../../store/journal";

export const SideBarItem = ({ id, title, body, date, imageUrls = '' }) => {

    const dispatch = useDispatch();

    const handleClickNote = () => {
        dispatch(setActiveNote({ id, title, body, date, imageUrls }))
    }

    return (
        <ListItem key={id} disablePadding >
            <ListItemButton onClick={handleClickNote}>
                <ListItemIcon>
                    <TurnedInNot />
                </ListItemIcon>

                <Grid container overflow="hidden">
                    <ListItemText
                        primary={title}
                        disableTypography
                        sx={{
                            whiteSpace: 'nowrap',
                            textOverflow: 'ellipsis',
                            overflow: 'hidden'
                        }}
                    />
                    <ListItemText secondary={body} />
                </Grid>

            </ListItemButton>
        </ListItem>
    )
}