import PropTypes from "prop-types";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

export const ImageGallery = ({ images }) => {
    if (!images) return;

    return (
        <ImageList sx={{ width: '100%', height: 'auto' }} cols={3} rowHeight='auto'>
            {images.map((image, index) => (
                <ImageListItem key={index}>
                    <img
                        src={image}
                        srcSet={image}
                        alt={`Image of the note #${index}`}
                        loading="lazy"
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
}

ImageGallery.propTypes = {
    images: PropTypes.array.isRequired,
}