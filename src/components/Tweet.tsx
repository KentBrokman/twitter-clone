import Grid from "@material-ui/core/Grid/Grid"
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper/Paper"
import cn from 'classnames'



import CommentIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ReplyIcon from '@material-ui/icons/Reply';


import Typography from "@material-ui/core/Typography";
import { Avatar } from "@material-ui/core";
import { useHomeStyles } from "../pages/Home/HomeStyles";
import { TweetType } from "../store/ducks/tweets/contracts/stateTypes";
import { useHistory } from "react-router-dom";


interface TweetProps {
    classes: ReturnType<typeof useHomeStyles>,
    tweet: TweetType
}

export const Tweet: React.FC<TweetProps> = ({ classes, tweet }) => {
    const { _id, text, user } = tweet
    const history = useHistory()

    const handleOnTwitClick = () => {
        history.push(`/home/tweet/${_id}`)
    }
    return (
        <a onClick={handleOnTwitClick}>
            <Paper className={cn(classes.tweet)} variant='outlined'>

                <div>
                    <Avatar alt="User avatar"
                        className={classes.tweetAvatar}
                        src={user.avatarUrl} />
                </div>
                <div style={{ marginTop: '-3px' }}>
                    <Typography>
                        <b>{user.fullName}</b>&nbsp;
                        <span className={classes.tweetUserName}>{user.shortName}</span>&nbsp;
                        <span className={classes.tweetUserName}>·</span>&nbsp;
                        <span className={classes.tweetUserName}>1 ч</span>
                    </Typography>
                    <Typography variant='body1' gutterBottom>
                        {text}
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
        </a>

    )
}