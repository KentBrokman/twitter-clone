import Grid from "@material-ui/core/Grid/Grid"
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper/Paper"
import cn from 'classnames'


import Typography from "@material-ui/core/Typography";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import CircularProgress from '@material-ui/core/CircularProgress';

import { Tweet } from "../../components/tweets/Tweet";
import { SideMenu } from "../../components/SideMenu";
import { AddTweetForm } from "../../components/tweets/AddTweetForm";

import InputAdornment from "@material-ui/core/InputAdornment";

import SearchIcon from '@material-ui/icons/Search';

import { useHomeStyles } from "../../styles/HomeStyles";
import { SearchTextField } from "../../components/common/SearchTextField";
import { useDispatch, useSelector } from "react-redux";
import { fetchTweets, setTweets } from "../../store/ducks/tweets/actionCreators";
import React from "react";
import { selectTweets, selectTweetsIsLoading } from "../../store/ducks/tweets/selectors";
import { fetchTags } from "../../store/ducks/tags/actionCreators";
import { Tags } from "../../components/Tags";
import { Route } from "react-router-dom";
import { BackButton } from '../../components/common/BackButton'
import { FullTweet } from "../../components/tweets/FullTweet";
import { useTweetsStyles } from "../../styles/TweetsStyles";
import { useAddFormStyles } from "../../styles/AddFormStyles";
import { useCommonStyles } from "../../styles/CommonStyles";
import { SetTweetsActionType } from "../../store/ducks/tweets/contracts/actionTypes";







export const Home: React.FC = () => {
    // styles
    const classes = useHomeStyles()
    const tweetsClasses = useTweetsStyles()
    const addFormClasses = useAddFormStyles()
    const commonClasses = useCommonStyles()
    //
    const dispatch = useDispatch()
    const tweets = useSelector(selectTweets)
    const isTweetsLoading = useSelector(selectTweetsIsLoading)

    React.useEffect(() => {
        dispatch(fetchTweets())
        // dispatch(fetchTags())

        return () => {
            dispatch(setTweets([]))
        }
    }, [])

    return (
        <Paper className={classes.centralSectionWrapper} variant='outlined'>
            <Paper className={tweetsClasses.tweetsSectionHeader} variant='outlined'>
                <Route path="/home/:any">
                    <BackButton />
                </Route>
                <Route path={['/home', '/home/search']} exact>
                    <Typography variant='h6'>Твиты</Typography>
                </Route>
                <Route path={'/home/tweet/:any'} exact>
                    <Typography variant='h6'>Твит</Typography>
                </Route>
            </Paper>
            <Route path={['/home', '/home/search']} exact>
                <Paper>
                    <div className={addFormClasses.addForm}>
                        <AddTweetForm emojisEnable={true}/>
                    </div>
                    <Paper className={commonClasses.devider} variant='outlined'></Paper>
                </Paper>
            </Route>
            <Route path='/home' exact>
                <Paper className={tweetsClasses.tweets}>
                    {isTweetsLoading ?
                        <div className={tweetsClasses.tweetsLoading} ><CircularProgress /></div> :
                        tweets.map(tweet => (<Tweet key={tweet._id}
                            tweet={tweet} />))}

                </Paper>
            </Route>
            <Route path='/home/tweet/:id'>
                <FullTweet classes={classes} />
            </Route>
        </Paper>
    )
}