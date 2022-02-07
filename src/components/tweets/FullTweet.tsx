import Avatar from "@material-ui/core/Avatar"
import IconButton from "@material-ui/core/IconButton"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import { useHomeStyles } from "../../styles/HomeStyles"

import CommentIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ReplyIcon from '@material-ui/icons/Reply';
import { useParams } from "react-router-dom"
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { clearTweet, fetchTweet } from "../../store/ducks/tweet/actionCreators"
import { selectTweet, selectTweetIsLoading } from "../../store/ducks/tweet/selectors"
import CircularProgress from "@material-ui/core/CircularProgress"
import format from 'date-fns/format'
import ruLang from 'date-fns/locale/ru'
import { TweetImages } from "./TweetImages"
import { useTweetsStyles } from "../../styles/TweetsStyles"
import { formatDate } from "../../utils/formatDate"
import { makeStyles } from "@material-ui/styles";


interface PropsType {
    classes: ReturnType<typeof useHomeStyles>
}



export const FullTweet: React.FC<PropsType> = (): React.ReactElement | null => {
    const tweetsClasses = useTweetsStyles()

    const params: { id?: string } = useParams()
    const dispatch = useDispatch()
    const tweet = useSelector(selectTweet)
    const isLoading = useSelector(selectTweetIsLoading)

    const id: string = params.id!
    React.useEffect(() => {
        dispatch(fetchTweet(id))

        return () => {
            dispatch(clearTweet())
        }
    }, [])

    if (isLoading) return (
        <div className={tweetsClasses.tweetsLoading} ><CircularProgress /></div>
    )

    if (tweet) return (

        <Paper className={tweetsClasses.fullTweet} variant='outlined'>

            <div>
                <Avatar alt="User avatar"
                    className={tweetsClasses.tweetAvatar}
                    src={tweet.user.images?.profilePhoto?.cloudinary_url} />

            </div>
            <div style={{ marginTop: '-3px' }}>
                <Typography>
                    <b>{tweet.user.fullName}</b>&nbsp;
                    <span className={tweetsClasses.tweetUserName}>{tweet.user.fullName}</span>&nbsp;
                    <span className={tweetsClasses.tweetUserName}>·</span>&nbsp;
                    <span className={tweetsClasses.tweetUserName}>{formatDate(new Date(tweet.createdAt))}</span>
                </Typography>
                <Typography variant='body1' gutterBottom>
                    {tweet.text}
                </Typography>
                <TweetImages images={tweet.images} />
                <div className={tweetsClasses.tweetFooter}>
                    
                </div>
            </div>

        </Paper>


    )

    return null
}