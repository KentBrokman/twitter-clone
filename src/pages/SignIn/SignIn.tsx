import { Typography } from "@material-ui/core"

import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import MessagesIcon from '@material-ui/icons/ModeCommentOutlined';
import Button from "@material-ui/core/Button";
import { RegisterModal } from "./components/RegisterModal";
import { LoginModal } from "./components/LoginModal";
import React from "react";
import { setUserLoadingStatus, setUserLogInStatus } from "../../store/ducks/user/actionCreators";
import { LoadingState, LogInState } from "../../store/types";
import { useDispatch } from "react-redux";
import { useSignInStyles } from "../../styles/SignInStyles";



export const SignIn: React.FC = () => {
    // styles
    const signInStyles = useSignInStyles()
    //
    const dispatch = useDispatch()
    const [visibleModal, setVisibleModal] = React.useState<'signIn' | 'logIn' | 'closed'>()

    const handleOnLogIn = () => {
        setVisibleModal('logIn')
    }
    const handleOnSignIn = () => {
        setVisibleModal('signIn')
    }
    const handleOnClose = () => {
        setVisibleModal('closed')
        dispatch(setUserLoadingStatus(LoadingState.NEVER))
        dispatch(setUserLogInStatus(LogInState.NEVER))
    }
    const open = visibleModal === 'closed' ? false : true
    return (
        <div className={signInStyles.wrapper}>
            <section className={signInStyles.blueSide}>
                <TwitterIcon className={signInStyles.blueSideBigIcon} color="primary" />
                <ul className={signInStyles.blueSideListInfo}>
                    <li className={signInStyles.blueSideListInfoItem}>
                        <Typography variant="h6">
                            <SearchIcon className={signInStyles.blueSideListInfoIcon} />
                            Читайте о том, что вам интересно
                        </Typography>
                    </li>
                    <li className={signInStyles.blueSideListInfoItem}>
                        <Typography variant="h6">
                            <PeopleOutlineIcon className={signInStyles.blueSideListInfoIcon} />
                            Узнайте о том, что говорят в мире
                        </Typography>
                    </li>
                    <li className={signInStyles.blueSideListInfoItem}>
                        <Typography variant="h6">
                            <MessagesIcon className={signInStyles.blueSideListInfoIcon} />
                            Присоединяйтесь к общению
                        </Typography>
                    </li>
                </ul>
            </section>
            <section className={signInStyles.loginSide}>
                <div className={signInStyles.loginSideWrapper}>
                    <TwitterIcon className={signInStyles.loginSideTwitterIcon} color="primary" />
                    <Typography className={signInStyles.loginSideTitle} variant="h4" >Узнайте о том, что говорят в мире прямо сейчас</Typography>
                    <Typography><b>Присоединяйтесь к твиттеру прямо сейчас!</b></Typography>
                    <br />
                    <Button onClick={handleOnSignIn}
                        style={{ marginBottom: 20 }}
                        variant="contained"
                        color="primary"
                        fullWidth={true}>Зарегистрироваться</Button>
                    <Button onClick={handleOnLogIn}
                        variant="outlined"
                        color="primary"
                        fullWidth={true}>Войти</Button>
                </div>
            </section>
            {visibleModal === 'logIn' ?
                <LoginModal onClose={handleOnClose} open={open} />
                : visibleModal === 'signIn' ?
                    <RegisterModal onClose={handleOnClose}
                        open={open} /> : ''}

        </div>
    )
}