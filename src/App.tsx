import React from 'react';
import Button from '@material-ui/core/Button';
import TwitterIcon from '@material-ui/icons/Twitter';
import { SignIn } from './pages/SignIn/SignIn';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsAuth, selectUserStatus, selectLogInStatus } from './store/ducks/user/selectors';
import { Layout } from './pages/Layout';
import { LoadingState, LogInState } from './store/types';
import { useHomeStyles } from './styles/HomeStyles';
import { fetchUserData } from './store/ducks/user/actionCreators';
import { Profile } from './pages/Profile/Profile';


function App() {
  const history = useHistory()
  const dispatch = useDispatch()
  const classes = useHomeStyles()
  const isAuth = useSelector(selectIsAuth)
  const logInStatus = useSelector(selectLogInStatus)
  const fetchingUserDataStatus = useSelector(selectUserStatus)

  const Logged = window.localStorage.getItem('token') !== null

  React.useEffect(() => {
    dispatch(fetchUserData())
  }, [])
  React.useEffect(() => {
    // if (!isAuth) {
    //   return (<Redirect to={'/signin'}/>)
    // }
    if (!Logged) {
      history.push('/signin')
    } else if (isAuth && history.location.pathname === '/signin'){
      history.push('/home')
    } 
  }, [isAuth])

  if (fetchingUserDataStatus === LoadingState.LOADING && logInStatus !== LogInState.LOADING) {
    return (
      <div className={classes.centered}>
        <TwitterIcon color="primary" style={{ width: 80, height: 80 }} />
      </div>
    )
  }
  

  return (
    <div>
      <Switch>
        <Route path="/signin" component={SignIn} />
        <Layout>
          <Route path='/profile' component={Profile} exact/>
          <Route path='/home' component={Home} />
          <Route path='/' exact render={() => <Redirect to='/home'/>}/>
        </Layout>
      </Switch>
    </div>
  );
}

export default App;
