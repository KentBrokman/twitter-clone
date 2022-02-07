import React from 'react';

import { IconButton } from '@material-ui/core';
import Media from '@material-ui/icons/Photo';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import { ImageObj } from '../tweets/AddTweetForm';

interface UploadImagesProps {
    onChangeImages: (callback: (prev: ImageObj[]) => ImageObj[]) => void
}

export const UploadImages: React.FC<UploadImagesProps> = ({ onChangeImages }) => {
    const [notifIsOpen, setNotifOpen] = React.useState(false)
    const onNotifClose = () => {
        setNotifOpen(false)
    }

    const inputRef = React.useRef<HTMLInputElement>(null)
    const handleClickImage = () => {
        if (inputRef.current) {
            inputRef.current.click()
        }
    }
    const handleChangeFileInput = (event: Event) => {
        if (event.target) {
            const target = event.target as HTMLInputElement
            if (target.files) {
                if (target.files.length > 4) {
                    setNotifOpen(true)
                } else {
                    const files = Array.from(target.files)
                    const imagesToAdd = files.map((file: File) => ({
                        url: URL.createObjectURL(file),
                        file
                    }))
                    onChangeImages((prev) => {
                        if ((prev.length + imagesToAdd.length) > 4) {
                            setNotifOpen(true)
                            return prev
                        }
                        return [
                            ...prev,
                            ...imagesToAdd
                        ]
                    })
                }
            }
        }
    }
    React.useEffect(() => {
        if (inputRef.current) {
            inputRef.current.addEventListener('change', handleChangeFileInput);
        }
        return () => {
            if (inputRef.current) {
                inputRef.current.removeEventListener('change', handleChangeFileInput);
            }
        };
    }, []);
    return (
        <div>
            <IconButton onClick={handleClickImage}>
                <Media color='primary' style={{ fontSize: '20px' }} />
            </IconButton>
            <input ref={inputRef} id='upload-input' type='file' multiple hidden />
            <Snackbar open={notifIsOpen} autoHideDuration={6000} onClose={onNotifClose}>
                <Alert onClose={onNotifClose} severity="error" elevation={6} variant="filled" style={{ color: 'white', backgroundColor: 'rgb(29,161,242)' }}>
                    Выберите до 4-х фотографий.
                </Alert>
            </Snackbar>
        </div>
    )
}


//autoHideDuration={6000}