

import React from 'react';
import Grid from "@material-ui/core/Grid/Grid"
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper/Paper"
import cn from 'classnames'


import Emojy from '@material-ui/icons/SentimentSatisfied';


import { Avatar, Button, CircularProgress } from "@material-ui/core";
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { useState } from 'react';
import { CircularProgressWithLabel } from '../common/CirculeWithProgress';
import { useHomeStyles } from '../../styles/HomeStyles';
import { useDispatch, useSelector } from 'react-redux';
import { addNewTweet } from '../../store/ducks/tweets/actionCreators';
import { selectNewTweetIsLoading } from '../../store/ducks/tweets/selectors';
import { UploadImages } from '../common/UploadImages';
import { ImagesList } from '../common/ImagesList';
import { selectUserState } from '../../store/ducks/user/selectors';
import { useTweetsStyles } from '../../styles/TweetsStyles';
import { useAddFormStyles } from '../../styles/AddFormStyles';
import { EmojisPicker } from '../common/EmojisPicker/EmojisPicker';


interface AddTweetFormProps {
    maxRows?: number;
    emojisEnable?: boolean
}

const MAX_LENGTH = 280
export interface ImageObj {
    url: string;
    file: File;
}

export const AddTweetForm: React.FC<AddTweetFormProps> = ({ maxRows, emojisEnable = false }) => {
    // styles
    const tweetsClasses = useTweetsStyles()
    const addFormClasses = useAddFormStyles()
    //
    const dispatch = useDispatch()
    const userData = useSelector(selectUserState)
    const newTweetIsLoading = useSelector(selectNewTweetIsLoading)

    const [text, setText] = useState<string>('')
    const textLimitPercent = (text.length / MAX_LENGTH) * 100
    const textRemainsToFill = MAX_LENGTH - text.length

    const [images, setImages] = useState<ImageObj[]>([])


    const handleChangeTextArea = (e: React.FormEvent<HTMLTextAreaElement>) => {
        if (e.currentTarget) {
            setText(e.currentTarget.value)
        }
    }
    const handleOnSendTweetClick = () => {
        dispatch(addNewTweet({ text, images }))
        setText('')
        setImages([])
    }
    return (
        <>
            <div className={addFormClasses.addFormBody}>
                <Avatar src={userData.data?.images?.profilePhoto?.cloudinary_url}
                    alt="User avatar"
                    className={tweetsClasses.tweetAvatar} />
                <TextareaAutosize
                    onChange={handleChangeTextArea}
                    value={text}
                    className={addFormClasses.addFormTextarea}
                    placeholder="Что происходит?"
                    maxRows={maxRows}
                />
            </div>
            <ImagesList images={images} onChangeImages={setImages} />
            <div className={addFormClasses.addFormBottom}>
                <div className={addFormClasses.addFormBottomLeft}>
                    <UploadImages onChangeImages={setImages} />
                    {emojisEnable &&
                        <EmojisPicker text={text} setText={setText} />
                    }
                </div>
                <div className={addFormClasses.addFormBottomRight}>
                    {text && <>
                        <div className={addFormClasses.addFormCircleProgress}>
                            <CircularProgressWithLabel

                                value={textLimitPercent}
                                textLength={textRemainsToFill}

                            />
                            <CircularProgress
                                style={{ color: 'rgba(0, 0, 0, 0.1)' }}
                                variant="static"
                                size={textRemainsToFill <= 20 ? 30 : 20}
                                thickness={5}
                                value={100}
                            />
                        </div>
                    </>}
                    <Button disabled={newTweetIsLoading || textRemainsToFill <= 0 || text.length === 0}
                        onClick={handleOnSendTweetClick}
                        variant='contained'
                        color='primary'
                    >
                        {
                            newTweetIsLoading ?
                                'Отправление' : 'Твитнуть'
                        }
                    </Button>
                </div>
            </div>
        </>
    );
};

