

import { useHomeStyles } from '../../styles/HomeStyles';
import { ImageObj } from '../tweets/AddTweetForm';

import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { useAddFormStyles } from '../../styles/AddFormStyles';

interface ImagesListProps {
    images: ImageObj[];
    onChangeImages: (callback: (prev: ImageObj[]) => ImageObj[]) => void
}

export const ImagesList: React.FC<ImagesListProps> = ({ images, onChangeImages }) => {
    // styles
    const classes = useHomeStyles()
    const addFormClasses = useAddFormStyles()
    //
    let imagesCount
    let imagesContainerStyle = addFormClasses.addFormImages
    if (images.length > 0) {
        imagesCount = images.length
        switch (imagesCount) {
            case 1:
                imagesContainerStyle = addFormClasses.addFormImages1
                break;
            case 2:
                imagesContainerStyle = addFormClasses.addFormImages2
                break;
            case 3:
                imagesContainerStyle = addFormClasses.addFormImages3
                break;
            case 4:
                imagesContainerStyle = addFormClasses.addFormImages4
                break;
            default:
                imagesContainerStyle = addFormClasses.addFormImages
                break;
        }
    } else {
        imagesCount = 0
    }

    const onDeleteImageClick = (imageUrl: string) => {
        onChangeImages((prev) => prev.filter(image => image.url !== imageUrl))
    }
    return (
        <div className={`${addFormClasses.addFormImages} ${imagesContainerStyle}`} >
            {images.map((image: ImageObj, index) => {
                return (
                    <div key={index} className={addFormClasses.addFormImage} style={{ backgroundImage: `url(${image.url})`, gridArea: `image${index + 1}` }}>
                        <IconButton onClick={() => onDeleteImageClick(image.url)}>
                            <DeleteIcon />
                        </IconButton>
                    </div>
                )
            })}
        </div>
    )
}