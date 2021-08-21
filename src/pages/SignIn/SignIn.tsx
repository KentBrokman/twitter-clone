import { Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { theme } from "../../theme"
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import MessagesIcon from '@material-ui/icons/ModeCommentOutlined';
import Button from "@material-ui/core/Button";
import { RegisterModal } from "./components/RegisterModal";
import { LoginModal } from "./components/LoginModal";
import React from "react";

export const useStylesSignIn = makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        height: 'calc(100vh - 84px)',
    },
    blueSide: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#71c9f8',
        flex: "0 0 50%",
        overflow: 'hidden',
        position: 'relative',
    },
    blueSideBigIcon: {
        position: 'absolute',
        // left: 0,
        // top: 0,
        width: '250%',
        height: '250%',

    },
    blueSideListInfo: {
        position: 'relative',
        listStyle: 'none',
        padding: 0,
        margin: 0,
        width: 380,
        '& h6': {
            display: 'flex',
            alignItems: 'center',
            color: 'white',
            fontWeight: 700,
            fontSize: 20
        }
    },
    blueSideListInfoItem: {
        marginBottom: 40,
    },
    blueSideListInfoIcon: {
        fontSize: 32,
        marginRight: 15,
    },
    loginSide: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: "0 0 50%",
        overflow: 'hidden'
    },
    loginSideWrapper: {
        width: 380
    },
    loginSideTwitterIcon: {
        fontSize: 50,
    },
    loginSideTitle: {
        fontWeight: 700,
        fontSize: 32,
        marginBottom: 45,
        marginTop: 20
    },
    loginSideField: {
        marginBottom: 18,
    },
    registerField: {
        marginBottom: theme.spacing(5)
    },
}))

export const SignIn: React.FC = () => {
    const classes = useStylesSignIn()
    const [visibleModal, setVisibleModal] = React.useState<'signIn' | 'logIn' | 'closed'>()

    const handleOnLogIn = () => {
        setVisibleModal('logIn')
    }
    const handleOnSignIn = () => {
        setVisibleModal('signIn')
    }
    const handleOnClose = () => {
        setVisibleModal('closed')
    }
    const open = visibleModal === 'closed' ? false : true
    return (
        <div className={classes.wrapper}>
            <section className={classes.blueSide}>
                <TwitterIcon className={classes.blueSideBigIcon} color="primary" />
                <ul className={classes.blueSideListInfo}>
                    <li className={classes.blueSideListInfoItem}>
                        <Typography variant="h6">
                            <SearchIcon className={classes.blueSideListInfoIcon} />
                            Читайте о том, что вам интересно
                        </Typography>
                    </li>
                    <li className={classes.blueSideListInfoItem}>
                        <Typography variant="h6">
                            <PeopleOutlineIcon className={classes.blueSideListInfoIcon} />
                            Узнайте о том, что говорят в мире
                        </Typography>
                    </li>
                    <li className={classes.blueSideListInfoItem}>
                        <Typography variant="h6">
                            <MessagesIcon className={classes.blueSideListInfoIcon} />
                            Присоединяйтесь к общению
                        </Typography>
                    </li>
                </ul>
            </section>
            <section className={classes.loginSide}>
                <div className={classes.loginSideWrapper}>
                    <TwitterIcon className={classes.loginSideTwitterIcon} color="primary" />
                    <Typography className={classes.loginSideTitle} variant="h4" >Узнайте о том, что говорят в мире прямо сейчас</Typography>
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