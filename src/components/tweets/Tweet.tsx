import Grid from "@material-ui/core/Grid/Grid"
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper/Paper"
import cn from 'classnames'



import CommentIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ReplyIcon from '@material-ui/icons/Reply';


import Typography from "@material-ui/core/Typography";
import CircularProgress from '@material-ui/core/CircularProgress';
import { Avatar } from "@material-ui/core";
import { useHomeStyles } from "../../styles/HomeStyles";
import { TweetType } from "../../store/ducks/tweets/contracts/stateTypes";
import { useHistory } from "react-router-dom";
import { formatDate } from "../../utils/formatDate";
import { ThreeDotsMenu } from "../common/ThreeDotsMenu";
import { TweetImages } from "./TweetImages";
import { useTweetsStyles } from "../../styles/TweetsStyles";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectUserState } from "../../store/ducks/user/selectors";
import { makeStyles } from "@material-ui/styles";


interface TweetProps {
    tweet: TweetType
}

const addClasses = makeStyles({
    root: {
        // backgroundColor: 'transparent',
        display: 'none',
        '&:hover': {
            backgroundColor: 'transparent'
        }
    }
})

export const Tweet: React.FC<TweetProps> = ({ tweet }) => {
    // styles
    const tweetsClasses = useTweetsStyles()
    //
    const loggedUserId = useSelector(selectUserState).data?._id
    const [deleting, setDeleting] = useState(false)

    const { _id, text, user, createdAt, images } = tweet
    const history = useHistory()

    const handleOnTwitClick = () => {
        console.log('handleOnTwitClick')
        history.push(`/home/tweet/${_id}`)
    }
    return (
        <a onClick={handleOnTwitClick} className={cn({ [`${tweetsClasses.tweetInactiveLink}`]: deleting })}>
            <Paper className={cn(tweetsClasses.tweet)} variant='outlined'>

                <div>
                    <Avatar alt="User avatar"
                        className={tweetsClasses.tweetAvatar}
                        src={user.images?.profilePhoto?.cloudinary_url} />
                </div>
                <div style={{ marginTop: '-3px', width: '86%' }}>
                    <div className={tweetsClasses.tweetHeader}>
                        <div>
                            <Typography gutterBottom={true}>
                                <b>{user.fullName}</b>&nbsp;
                                <span className={tweetsClasses.tweetUserName}>@{user.nickname}</span>&nbsp;
                                <span className={tweetsClasses.tweetUserName}>·</span>&nbsp;
                                <span className={tweetsClasses.tweetUserName}>{formatDate(new Date(createdAt))}</span>
                            </Typography>
                            <Typography variant='body1' gutterBottom>
                                {text}
                            </Typography>
                        </div>
                        <div>
                            {user._id === loggedUserId &&
                                <ThreeDotsMenu id={_id} setDeleting={setDeleting} />
                            }
                        </div>
                    </div>
                    {images.length > 0 &&
                        <TweetImages images={images} />
                    }
                    <div className={tweetsClasses.tweetFooter}>
                        <div>
                            <IconButton classes={addClasses()}>
                                <CommentIcon style={{ fontSize: '20px' }} />
                            </IconButton>
                            <span></span>
                        </div>
                        <div>
                            <IconButton classes={addClasses()}>
                                <RepeatIcon style={{ fontSize: '20px' }} />
                            </IconButton>
                            <span></span>
                        </div>
                        <div>
                            <IconButton classes={addClasses()}>
                                <FavoriteBorderIcon style={{ fontSize: '20px' }} />
                            </IconButton>
                            <span></span>
                        </div>
                        <div>
                            <IconButton classes={addClasses()}>
                                <ReplyIcon style={{ fontSize: '20px' }} />
                            </IconButton>
                            <span></span>
                        </div>
                    </div>
                </div>
                {deleting &&
                    <div className={tweetsClasses.tweetDeletLoading}>
                        <CircularProgress />
                    </div>
                }
            </Paper>
        </a>

    )
}