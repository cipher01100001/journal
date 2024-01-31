import { useEffect, useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { DeleteOutline, SaveOutlined, UploadOutlined } from "@mui/icons-material";
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";

import { useForm } from "../../hooks";
import { ImageGallery } from "../components";
import { setActiveNote, startDeletingNote, startSaveNote, startUploadingFiles } from "../../store/journal";

export const NoteView = () => {

    const dispatch = useDispatch();

    const { active: noteActive, messageSaved, isSaving } = useSelector(state => state.journal);

    const { title, body, date, onInputChange, formState } = useForm(noteActive);

    const dateString = useMemo(() => {
        const newDate = new Date(date);
        return newDate.toUTCString();
    }, [date])

    const fileInputRef = useRef();

    useEffect(() => {
        dispatch(setActiveNote(formState))
    }, [formState])

    useEffect(() => {
        if (messageSaved.length > 0) {
            Swal.fire('Note updated', messageSaved, 'success');
        }
    }, [messageSaved])


    const handleSaveNote = () => {
        dispatch(startSaveNote());
    }

    const handleFileInputChange = ({ target }) => {
        if (target.files < 1) return;

        dispatch(startUploadingFiles(target.files));
    }

    const handleDelete = () => {
        dispatch(startDeletingNote());
    }

    return (
        <Grid
            className="animate__animated animate__fadeIn animate__faster"
            container direction='row' justifyContent='space-between' alignItems='center' sx={{ mb: 1 }}>

            <Grid item>
                <Typography fontSize={39} fontWeight='light'>{dateString}</Typography>
            </Grid>

            <Grid item>
                <input
                    type="file"
                    multiple
                    ref={fileInputRef}
                    onChange={handleFileInputChange}
                    style={{ display: 'none' }}
                />

                <IconButton
                    color="primary"
                    disabled={isSaving}
                    onClick={() => fileInputRef.current.click()}
                >
                    <UploadOutlined />
                </IconButton>

                <Button
                    disabled={isSaving}
                    onClick={handleSaveNote}
                    color="primary"
                    sx={{ padding: 2 }}
                >
                    <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                    Save
                </Button>
            </Grid>

            <Grid container>
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    placeholder="Enter a title"
                    label='Title'
                    sx={{ border: 'none', mb: 1 }}
                    name="title"
                    value={title}
                    onChange={onInputChange}
                />
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    multiline
                    placeholder="What happened today?"
                    minRows={5}
                    name="body"
                    value={body}
                    onChange={onInputChange}
                />
            </Grid>

            <Grid container justifyContent='end'>
                <Button
                    onClick={handleDelete}
                    sx={{ mt: 2 }}
                    color="error"
                >
                    <DeleteOutline />
                </Button>
            </Grid>


            {/* Image Gallery */}
            <ImageGallery
                images={noteActive.imageUrls}
            />

        </Grid>
    )
}