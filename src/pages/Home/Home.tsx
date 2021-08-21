import Grid from "@material-ui/core/Grid/Grid"
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper/Paper"
import cn from 'classnames'


import Typography from "@material-ui/core/Typography";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import CircularProgress from '@material-ui/core/CircularProgress';

import { Tweet } from "../../components/Tweet";
import { SideMenu } from "../../components/SideMenu";
import { AddTweetForm } from "../../components/AddTweetForm";

import InputAdornment from "@material-ui/core/InputAdornment";

import SearchIcon from '@material-ui/icons/Search';

import { useHomeStyles } from "./HomeStyles";
import { SearchTextField } from "../../components/SearchTextField";
import { useDispatch, useSelector } from "react-redux";
import { fetchTweets } from "../../store/ducks/tweets/actionCreators";
import React from "react";
import { selectTweets, selectTweetsIsLoading } from "../../store/ducks/tweets/selectors";
import { fetchTags } from "../../store/ducks/tags/actionCreators";
import { Tags } from "../../components/Tags";
import { Route } from "react-router-dom";
import { BackButton } from '../../components/BackButton'
import { FullTweet } from "./components/FullTweet";







export const Home: React.FC = () => {
    const classes = useHomeStyles()
    const dispatch = useDispatch()
    const tweets = useSelector(selectTweets)
    const isTweetsLoading = useSelector(selectTweetsIsLoading)

    React.useEffect(() => {
        dispatch(fetchTweets())
        dispatch(fetchTags())
    }, [])

    return (
        <Container className={classes.wrapper} maxWidth="lg">
            <Grid container spacing={3} style={{ height: "100%" }}>
                <Grid item md={3} sm={1}>
                    <SideMenu classes={classes} />

                </Grid>
                <Grid item md={6} sm={8}>
                    <Paper className={classes.tweetsSectionWrapper} variant='outlined'>
                        <Paper className={classes.tweetsSectionHeader} variant='outlined'>
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
                                <div className={classes.addForm}>
                                    <AddTweetForm classes={classes} />
                                </div>
                                <Paper className={classes.devider} variant='outlined'></Paper>
                            </Paper>
                        </Route>
                        <Route path='/home' exact>
                            <Paper className={classes.tweets}>
                                {isTweetsLoading ?
                                    <div className={classes.tweetsLoading} ><CircularProgress /></div> :
                                    tweets.map(tweet => (<Tweet key={tweet._id} classes={classes}
                                        tweet={tweet} />))}

                            </Paper>
                        </Route>
                        <Route path='/home/tweet/:id'>
                            <FullTweet classes={classes} />
                        </Route>
                    </Paper>

                </Grid>
                <Grid item md={3}>
                    <div className={classes.rightSide}>
                        <SearchTextField
                            variant="outlined"
                            placeholder="Поиск по Твиттеру"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                            }}
                            fullWidth
                        />
                        <Tags classes={classes} />
                    </div>

                </Grid>
            </Grid>

        </Container>
    )
}