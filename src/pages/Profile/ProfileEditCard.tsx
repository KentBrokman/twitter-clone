import DialogActions from "@material-ui/core/DialogActions"
import Dialog from "@material-ui/core/Dialog"
import DialogTitle from "@material-ui/core/DialogTitle"
import FormGroup from "@material-ui/core/FormGroup"
import TextField from "@material-ui/core/TextField"
import DialogContent from "@material-ui/core/DialogContent/DialogContent"
import Button from "@material-ui/core/Button/Button"
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';
import CloseIcon from '@material-ui/icons/Close';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import { IconButton } from '@material-ui/core';

import { useProfileStyles } from "../../styles/ProfileStyles"
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from "react-hook-form";
import { ProfileTextField } from "./components/ProfileTextField"
import { ChangeEvent, useEffect, useRef, useState } from "react"
import { ImageObj, UpdateProfileObjType, UserType } from "../../store/ducks/user/contracts/stateTypes"
import { useDispatch, useSelector } from "react-redux"
import { selectProfileUpdatingStatus, selectUserState } from "../../store/ducks/user/selectors"
import { fetchUpdateProfile } from "../../store/ducks/user/actionCreators"
import { ProfileUpdatingState } from "../../store/types"

type PropsType = {
    onClose: () => void,
    open: boolean,
    userData: UserType | null
}


export const ProfileEditCard: React.FC<PropsType> = ({ onClose, open, userData }) => {

    // styles
    const profileStyles = useProfileStyles()
    //

    //utils
    const dispatch = useDispatch()
    const ProfileUpdating = useSelector(selectProfileUpdatingStatus) === ProfileUpdatingState.LOADING
    //

    //  local state
    const [profileImage, setProfileImage] = useState<ImageObj | null>(null)
    const [backgroundImage, setBackgroundImage] = useState<ImageObj | null>(null)
    const inputProfilePhotoRef = useRef<HTMLInputElement>(null)
    const inputBackgroundPhotoRef = useRef<HTMLInputElement>(null)
    //
    // handlers
    const handleClickProfileImage = () => {
        if (inputProfilePhotoRef.current) {
            inputProfilePhotoRef.current.click()
        }
    }
    const handleClickBackgroundImage = () => {
        if (inputBackgroundPhotoRef.current) {
            inputBackgroundPhotoRef.current.click()
        }
    }
    const onProfilePhotoInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target && event.target.files) {
            setProfileImage({
                url: URL.createObjectURL(event.target.files[0]),
                file: event.target.files[0]
            })
        }
    }
    const onBackgroundPhotoInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target && event.target.files) {
            setBackgroundImage({
                url: URL.createObjectURL(event.target.files[0]),
                file: event.target.files[0]
            })
        }
    }
    const { control, handleSubmit, formState: { errors } } = useForm<UpdateProfileObjType>()
    const onSubmit = (data: UpdateProfileObjType) => {
        console.log(data)
        console.log(profileImage, backgroundImage)
        dispatch(fetchUpdateProfile({
            profilePhoto: profileImage,
            backgroundPhoto: backgroundImage,
            profileData: data
        }))
    };
    //
    // life cicle methods

    //
    return (
        <Dialog open={open}
            onClose={onClose}
            // maxWidth="xs"
            fullWidth={true}
            classes={{
                paper: profileStyles.profileEditCard_wrapper
            }}
        >
            <div className={profileStyles.profileEditCard_content}>
                {ProfileUpdating ?
                    <div className={profileStyles.profileEditCard_loader}>
                        <CircularProgress />
                    </div> :
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className={profileStyles.profileEditCard_header}>
                            <div className={profileStyles.profileEditCard_header_left}>
                                <Button onClick={onClose}>
                                    <CloseIcon />
                                </Button>
                                <span>Изменить профиль</span>
                            </div>
                            <div className={profileStyles.profileEditCard_header_right}>
                                <Button type="submit">
                                    Сохранить
                                </Button>
                            </div>
                        </div>
                        <div style={{ width: '100%' }}>
                            <div className={profileStyles.profileEditCard_form_backImage}
                                style={backgroundImage ? { backgroundImage: `url(${backgroundImage.url})` } :
                                    userData?.images?.backgroundPhoto ? { backgroundImage: `url(${userData.images.backgroundPhoto.cloudinary_url})` } :
                                        { backgroundColor: 'rgb(178,178,178)' }}
                            >
                                <IconButton onClick={handleClickProfileImage}>
                                    <AddAPhotoIcon color='primary' style={{ fontSize: '20px' }} />
                                </IconButton>
                                <input ref={inputProfilePhotoRef} onChange={onBackgroundPhotoInputChange} id='upload-input' type='file' hidden />
                            </div>
                            <div className={profileStyles.profileEditCard_form_avatarImage}
                                style={profileImage ? { backgroundImage: `url(${profileImage.url})` } :
                                    userData?.images?.profilePhoto ? { backgroundImage: `url(${userData.images.profilePhoto.cloudinary_url})` } :
                                        { backgroundColor: 'rgb(178,178,178)' }}
                            >
                                <IconButton onClick={handleClickBackgroundImage}>
                                    <AddAPhotoIcon color='primary' style={{ fontSize: '20px' }} />
                                </IconButton>
                                <input ref={inputBackgroundPhotoRef} onChange={onProfilePhotoInputChange} type='file' hidden />
                            </div>
                            <div className={profileStyles.profileEditCard_form_textFields}>
                                <ProfileTextField
                                    name="fullName"
                                    control={control}
                                    defaultValue={userData?.fullName}
                                    label='Имя'
                                    maxInputLength={50} />
                                <ProfileTextField
                                    name='about'
                                    control={control}
                                    defaultValue={userData?.additionalInfo?.about}
                                    label='О себе'
                                    maxInputLength={160}
                                    rows={4}
                                    multiline={true} />
                                <ProfileTextField
                                    name='location'
                                    control={control}
                                    defaultValue={userData?.additionalInfo?.location}
                                    label='Местоположение'
                                    maxInputLength={30} />
                                <ProfileTextField
                                    name='website'
                                    control={control}
                                    defaultValue={userData?.additionalInfo?.website}
                                    label='Веб-сайт'
                                    maxInputLength={100} />
                            </div>
                        </div>
                    </form>
                }
            </div>
        </Dialog>
    )
}