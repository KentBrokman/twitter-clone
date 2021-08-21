

import React from 'react';
import Grid from "@material-ui/core/Grid/Grid"
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper/Paper"
import cn from 'classnames'



import CommentIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ReplyIcon from '@material-ui/icons/Reply';
import Media from '@material-ui/icons/Photo';
import Emojy from '@material-ui/icons/SentimentSatisfied';


import Typography from "@material-ui/core/Typography";
import { Avatar, Button, CircularProgress } from "@material-ui/core";
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { useState } from 'react';
import { throws } from 'assert';
import { CircularProgressWithLabel } from './CirculeWithProgress';
import { useHomeStyles } from '../pages/Home/HomeStyles';
import { useDispatch } from 'react-redux';
import { addNewTweet } from '../store/ducks/tweets/actionCreators';


interface AddTweetFormProps {
    classes: ReturnType<typeof useHomeStyles>,
    maxRows?: number
}

const MAX_LENGTH = 280

export const AddTweetForm: React.FC<AddTweetFormProps> = ({ classes, maxRows }) => {
    const dispatch = useDispatch()

    const [text, setText] = useState<string>('')
    const textLimitPercent = (text.length / MAX_LENGTH) * 100
    const textRemainsToFill = MAX_LENGTH - text.length


    const handleChangeTextArea = (e: React.FormEvent<HTMLTextAreaElement>) => {
        if (e.currentTarget) {
            setText(e.currentTarget.value)
        }
    }
    const handleOnSendTweetClick = () => {
        dispatch(addNewTweet(text))
    }
    return (
        <div>
            <div className={classes.addFormBody}>
                <Avatar src="/broken-image.jpg"
                    alt="User avatar"
                    className={classes.tweetAvatar} />
                <TextareaAutosize
                    onChange={handleChangeTextArea}
                    value={text}
                    className={classes.addFormTextarea}
                    placeholder="Что происходит?"
                    maxRows={maxRows}
                />
            </div>
            <div className={classes.addFormBottom}>
                <div>
                    <IconButton >
                        <Media color='primary' style={{ fontSize: '20px' }} />
                    </IconButton>
                    <IconButton>
                        <Emojy color='primary' style={{ fontSize: '20px' }} />
                    </IconButton>
                </div>
                <div className={classes.addFormBottomRight}>
                    {text && <>
                        <div className={classes.addFormCircleProgress}>
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
                    <Button disabled={textRemainsToFill <= 0} 
                    onClick={handleOnSendTweetClick}
                    variant='contained' 
                    color='primary'>Твитнуть</Button>
                </div>
            </div>
        </div>

        // <Paper className={classes.addForm} variant='outlined'>
        //     <Grid container spacing={3} className={classes.addFormBody}>
        //         <Grid item xs={1}>
        //             <Avatar src="/broken-image.jpg"
        //                 alt="User avatar"
        //                 className={classes.tweetAvatar} />

        //         </Grid>
        //         <Grid item xs={11}>
        //             <TextareaAutosize
        //                 onChange={handleChangeTextArea}
        //                 value={text}
        //                 className={classes.addFormTextarea}
        //                 placeholder="Что происходит?"

        //             />
        //             <div className={classes.addTwitFooter}>
        //                 <div className={classes.addTwitIcons}>
        // <IconButton >
        //     <Media color='primary' style={{ fontSize: '20px' }} />
        // </IconButton>
        // <IconButton>
        //     <Emojy color='primary' style={{ fontSize: '20px' }} />
        // </IconButton>
        //                 </div>
        //                 <div className={classes.addFormBottomRight}>
        //                     {text && <>
        //                         <div className={classes.addFormCircleProgress}>
        //                             <CircularProgressWithLabel

        //                                 value={textLimitPercent}
        //                                 textLength={textRemainsToFill}

        //                             />
        //                             <CircularProgress
        //                                 style={{ color: 'rgba(0, 0, 0, 0.1)' }}
        //                                 variant="static"
        //                                 size={textRemainsToFill <= 20 ? 30 : 20}
        //                                 thickness={5}
        //                                 value={100}
        //                             />
        //                         </div>
        //                     </>}
        //                     <Button disabled={textRemainsToFill <= 0} variant='contained' color='primary'>Твитнуть</Button>
        //                 </div>

        //             </div>
        //         </Grid>
        //     </Grid>
        // </Paper>



    );
};

