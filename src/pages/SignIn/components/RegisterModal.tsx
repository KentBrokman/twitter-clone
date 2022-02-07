import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"
import { makeStyles } from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"
import TwitterIcon from '@material-ui/icons/Twitter';
import FormControl from '@material-ui/core/FormControl';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';

import FormGroup from "@material-ui/core/FormGroup/FormGroup"

import { useState, useEffect } from "react"
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux"
import { fetchSignUp, setUserLogInStatus } from "../../../store/ducks/user/actionCreators"
import { selectLogInStatus } from "../../../store/ducks/user/selectors"
import { LogInState } from "../../../store/types"
import { useSignInStyles } from "../../../styles/SignInStyles"


type PropsType = {
    onClose: () => void,
    open: boolean
};

export type RegisterFormProps = {
    email: string,
    fullName: string,
    nickname: string,
    password: string,
    password2: string
}

const RegisterFormSchema = yup.object({
    email: yup.string().email().required('Введите почту'),
    fullName: yup.string().required('Введите имя').min(2, 'Минимальная длина 2 символа').max(40, 'Максимальная длина 40 символов'),
    nickname: yup.string().required('Введите логин').min(2, 'Минимальная длина 2 символа').max(40, 'Максимальная длина 40 символов'),
    password: yup.string().required('Введите пароль').min(6, 'Минимальная длина пароля 6 символов'),
    password2: yup.string().required('Введите пароль').min(6, 'Минимальная длина пароля 6 символов').oneOf([yup.ref('password')], 'Пароли не совпадают')   // oneOf - равен одному из указанных в массиве значений
}).required()

const useStyles = makeStyles({
    paper: {
        minHeight: '677px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export const RegisterModal: React.FC<PropsType> = ({ onClose, open }) => {
    // styles
    const signInClasses = useSignInStyles()
    const addClasses = useStyles()
    //
    const dispatch = useDispatch()

    const [notifIsOpen, setNotifOpen] = useState(false)
    const loginStatus = useSelector(selectLogInStatus)
    const onNotifClose = () => {
        setNotifOpen(false)
    }

    const { control, handleSubmit } = useForm<RegisterFormProps>({
        resolver: yupResolver(RegisterFormSchema)
    });
    const onSubmit = (data: RegisterFormProps) => {
        dispatch(fetchSignUp(data))
    };

    useEffect(() => {
        if (loginStatus === LogInState.ERROR) {
            setNotifOpen(true)
        }
    }, [loginStatus])
    return (
        <Dialog
            open={open}
            onClose={onClose}
            fullWidth={true}
            classes={{
                paper: addClasses.paper
            }}
        >
            {loginStatus === LogInState.LOADING ? <CircularProgress /> :
                loginStatus === LogInState.LOADED ?
                    <Typography variant="h4" align='center'>
                        Вы успешно зарегистрированы. Можете войти в аккаунт с указанными данными.
                    </Typography> :
                    <>
                        <form onSubmit={handleSubmit(onSubmit)} >
                            <TwitterIcon className={signInClasses.loginSideTwitterIcon} color="primary" />
                            <DialogTitle id="form-dialog-title">Создайте учетную запись</DialogTitle>
                            <DialogContent>
                                <FormControl fullWidth >
                                    <FormGroup row>
                                        <Controller
                                            name="email"
                                            control={control}
                                            defaultValue=""
                                            render={({ field: { onChange, value }, fieldState: { error } }) => <TextField
                                                value={value}
                                                onChange={onChange}
                                                error={!!error}
                                                helperText={error ? error.message : null}
                                                className={signInClasses.registerField}
                                                id="email"
                                                label="Почта"
                                                type="email"
                                                InputLabelProps={{ shrink: true }}
                                                variant="filled"

                                                fullWidth
                                            />}
                                        />

                                        <Controller
                                            name="fullName"
                                            control={control}
                                            defaultValue=""
                                            render={({ field: { onChange, value }, fieldState: { error } }) => <TextField
                                                value={value}
                                                onChange={onChange}
                                                error={!!error}
                                                helperText={error ? error.message : null}
                                                className={signInClasses.registerField}
                                                id="fullName"
                                                label="Имя"
                                                type="fullName"
                                                InputLabelProps={{ shrink: true }}
                                                variant="filled"

                                                fullWidth
                                            />}
                                        />

                                        <Controller
                                            name="nickname"
                                            control={control}
                                            defaultValue=""
                                            render={({ field: { onChange, value }, fieldState: { error } }) => <TextField
                                                value={value}
                                                onChange={onChange}
                                                error={!!error}
                                                helperText={error ? error.message : null}
                                                className={signInClasses.registerField}
                                                id="nickname"
                                                label="Логин"
                                                type="nickname"
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
                                                className={signInClasses.registerField}
                                                id="password"
                                                label="Пароль"
                                                type="password"
                                                InputLabelProps={{ shrink: true }}
                                                variant="filled"

                                                fullWidth
                                            />}
                                        />
                                        <Controller
                                            name="password2"
                                            control={control}
                                            defaultValue=""
                                            render={({ field: { onChange, value }, fieldState: { error } }) => <TextField
                                                value={value}
                                                onChange={onChange}
                                                error={!!error}
                                                helperText={error ? error.message : null}
                                                className={signInClasses.registerField}
                                                id="password2"
                                                label="Повторите пароль"
                                                type="password"
                                                InputLabelProps={{ shrink: true }}
                                                variant="filled"

                                                fullWidth
                                            />}
                                        />
                                    </FormGroup>
                                </FormControl>

                            </DialogContent>
                            <DialogActions>
                                <Button
                                    type='submit'
                                    variant='contained'
                                    color='primary'
                                    fullWidth>Зарегистрироваться</Button>
                            </DialogActions>
                        </form>
                        <Snackbar open={notifIsOpen} autoHideDuration={6000} onClose={onNotifClose}>
                            <MuiAlert onClose={onNotifClose} severity="error" elevation={6} variant="filled">
                                Пользователь с такой почтой уже существует!
                            </MuiAlert>
                        </Snackbar>
                    </>
            }
        </Dialog>
    )
}