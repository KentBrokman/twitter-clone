import Avatar from "@material-ui/core/Avatar"
import IconButton from "@material-ui/core/IconButton"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import { useHomeStyles } from "../HomeStyles"

import CommentIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ReplyIcon from '@material-ui/icons/Reply';
import { useParams } from "react-router-dom"
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { clearTweet, fetchTweet } from "../../../store/ducks/tweet/actionCreators"
import { selectTweet, selectTweetIsLoading } from "../../../store/ducks/tweet/selectors"
import CircularProgress from "@material-ui/core/CircularProgress"
import format from 'date-fns/format'
import ruLang from 'date-fns/locale/ru'


interface PropsType {
    classes: ReturnType<typeof useHomeStyles>
}

export const FullTweet: React.FC<PropsType> = ({ classes }): React.ReactElement | null => {
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
        <div className={classes.tweetsLoading} ><CircularProgress /></div>
    )
    
    if (tweet) return (

        <Paper className={classes.tweet} variant='outlined'>

            <div>
                <Avatar alt="User avatar"
                    className={classes.tweetAvatar}  />
                
            </div>
            <div style={{ marginTop: '-3px' }}>
                <Typography>
                    <b>{tweet.user.fullName}</b>&nbsp;
                    <span className={classes.tweetUserName}>{tweet.user.shortName}</span>&nbsp;
                    <span className={classes.tweetUserName}>·</span>&nbsp;
                    <span className={classes.tweetUserName}>{format(new Date(tweet.createdAt), 'Pp', { locale: ruLang })}</span>
                </Typography>
                <Typography variant='body1' gutterBottom>
                    {tweet.text}
                </Typography>
                <div className={classes.tweetFooter}>
                    <div>
                        <IconButton>
                            <CommentIcon style={{ fontSize: '20px' }} />
                        </IconButton>
                        <span>12</span>
                    </div>
                    <div>
                        <IconButton>
                            <RepeatIcon style={{ fontSize: '20px' }} />
                        </IconButton>
                        <span>12</span>
                    </div>
                    <div>
                        <IconButton>
                            <FavoriteBorderIcon style={{ fontSize: '20px' }} />
                        </IconButton>
                        <span>12</span>
                    </div>
                    <div>
                        <IconButton>
                            <ReplyIcon style={{ fontSize: '20px' }} />
                        </IconButton>
                        <span>12</span>
                    </div>
                </div>
            </div>

        </Paper>


    )
    
    return null
}