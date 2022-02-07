
import DialogActions from "@material-ui/core/DialogActions"
import Dialog from "@material-ui/core/Dialog"
import DialogTitle from "@material-ui/core/DialogTitle"
import FormGroup from "@material-ui/core/FormGroup"
import TextField from "@material-ui/core/TextField"

import { makeStyles } from '@material-ui/core/styles';
import DialogContent from "@material-ui/core/DialogContent/DialogContent"
import Button from "@material-ui/core/Button/Button"
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { fetchSignIn, setUserLogInStatus } from "../../../store/ducks/user/actionCreators"
import { selectLogInStatus } from "../../../store/ducks/user/selectors"
import { LogInState } from "../../../store/types"
import { useSignInStyles } from "../../../styles/SignInStyles"

type PropsType = {
    onClose: () => void,
    open: boolean
};

export type LoginFormProps = {
    email: string,
    password: string
}

const LoginFormSchema = yup.object({
    email: yup.string().email().required('Введите почту'),
    password: yup.string().required('Введите пароль').min(6, 'Минимальная длина пароля 6 символов'),
}).required()

const useStyles = makeStyles({
    paper: {
        height: '336px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export const LoginModal: React.FC<PropsType> = ({ onClose, open }): React.ReactElement | null => {
    // styles
    const signInClasses = useSignInStyles()
    const addClasses = useStyles()
    //
    const dispatch = useDispatch()
    const [notifIsOpen, setNotifOpen] = useState(false)
    const loginStatus = useSelector(selectLogInStatus)

    const { control, handleSubmit, formState: { errors } } = useForm<LoginFormProps>({
        resolver: yupResolver(LoginFormSchema)
    });
    const onSubmit = (data: LoginFormProps) => {
        dispatch(fetchSignIn(data))
    };
    const onNotifClose = () => {
        setNotifOpen(false)
    }

    useEffect(() => {
        if (loginStatus === LogInState.ERROR) {
            setNotifOpen(true)
        }
    }, [loginStatus])

    if (!open) {
        return null
    }
    return (
        <Dialog open={open}
            onClose={onClose}
            maxWidth="xs"
            fullWidth={true}
            classes={{
                paper: addClasses.paper
            }}
        >
            {loginStatus === LogInState.LOADING ? <CircularProgress /> :
                <>
                    <form onSubmit={handleSubmit(onSubmit)} style={{width: '100%'}}>
                        <DialogTitle>Войти в твиттер</DialogTitle>
                        <DialogContent>
                            <FormGroup>
                                <Controller
                                    name="email"
                                    control={control}
                                    defaultValue=""
                                    render={({ field: { onChange, value }, fieldState: { error } }) => <TextField
                                        value={value}
                                        onChange={onChange}
                                        error={!!error}
                                        helperText={error ? error.message : null}
                                        className={signInClasses.loginSideField}
                                        id="email"
                                        label="Email"
                                        type="email"
                                        InputLabelProps={{ shrink: true }}
                                        variant="filled"

                                        fullWidth
                                    />}
                                />
                                <Controller
                                    name="password"
                                    control={control}
                                    defaultValue=""
                                    render={({ field: { onChange, value }, fieldState: { error } }) => <TextField
                                        value={value}
                                        onChange={onChange}
                                        error={!!error}
                                        helperText={error ? error.message : null}
                                        className={signInClasses.loginSideField}
                                        id="password"
                                        label="Password"
                                        type="password"
                                        InputLabelProps={{ shrink: true }}
                                        variant="filled"
                                        fullWidth
                                    />}
                                />
                            </FormGroup>

                        </DialogContent>
                        <DialogActions>
                            <Button
                                type='submit'
                                variant='contained'
                                color='primary'
                                fullWidth>Войти</Button>
                        </DialogActions>
                    </form>
                    <Snackbar open={notifIsOpen} autoHideDuration={6000} onClose={onNotifClose}>
                        <MuiAlert onClose={onNotifClose} severity="error" elevation={6} variant="filled">
                            Неверные логин или пароль!
                        </MuiAlert>
                    </Snackbar>
                </>
            }
        </Dialog>
    )
}