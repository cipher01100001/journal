import { useDispatch, useSelector } from "react-redux";

import { IconButton } from "@mui/material";
import { AddOutlined } from "@mui/icons-material";

import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../views";
import { startNewNote } from "../../store/journal/thunks";

export const JournalPage = () => {

    const dispatch = useDispatch();
    const { isSaving, active } = useSelector(state => state.journal);

    const handleClickNewNote = () => {
        dispatch(startNewNote());
    }

    return (
        <JournalLayout>
            {/* <Typography> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur fugiat hic eligendi voluptate architecto animi, perspiciatis accusantium, officiis necessitatibus dolore eveniet molestias doloribus ut aliquam perferendis. Fugit, praesentium fugiat? Numquam?</Typography> */}

            {
                (active)
                    ? <NoteView />
                    : <NothingSelectedView />
            }


            <IconButton
                onClick={handleClickNewNote}
                disabled={isSaving}
                size="large"
                sx={{
                    color: 'white',
                    backgroundColor: 'error.main',
                    ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
                    position: 'fixed',
                    right: 50,
                    bottom: 50
                }}
            >
                <AddOutlined />
            </IconButton>

        </JournalLayout>
    )
}