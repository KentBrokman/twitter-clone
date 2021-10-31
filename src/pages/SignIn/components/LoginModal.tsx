
import DialogActions from "@material-ui/core/DialogActions"
import Dialog from "@material-ui/core/Dialog"
import DialogTitle from "@material-ui/core/DialogTitle"
import FormGroup from "@material-ui/core/FormGroup"
import TextField from "@material-ui/core/TextField"
import { useStylesSignIn } from "../SignIn"
import DialogContent from "@material-ui/core/DialogContent/DialogContent"
import Button from "@material-ui/core/Button/Button"

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

type PropsType = {
    onClose: () => void,
    open: boolean
};

type LoginFormProps = {
    email: string,
    password: string
}

const LoginFormSchema = yup.object({
    email: yup.string().email().required('Введите почту'),
    password: yup.string().min(6, 'Минимальная длина пароля 6 символов').required('Введите пароль'),
}).required()

export const LoginModal: React.FC<PropsType> = ({ onClose, open }): React.ReactElement | null => {
    const classes = useStylesSignIn()

    const { control, handleSubmit, formState: { errors } } = useForm<LoginFormProps>({
        resolver: yupResolver(LoginFormSchema)
    });
    const onSubmit = (data: LoginFormProps) => {
        debugger
        console.log(errors)
    };

    if (!open) {
        return null
    }
    return (
        <Dialog open={open}
            onClose={onClose}
            maxWidth="xs"
            fullWidth={true}
        >
            <form onSubmit={handleSubmit(onSubmit)}>
                <DialogTitle>Войти в твиттер</DialogTitle>
                <DialogContent>
                    <FormGroup>
                        <Controller
                            name="email"
                            control={control}
                            defaultValue=""
                            render={({ field }) => <TextField
                                {...field}
                                className={classes.loginSideField}
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
                            render={({ field }) => <TextField
                                {...field}
                                className={classes.loginSideField}
                                id="password"
                                label="Password"
                                type="password"
                                InputLabelProps={{ shrink: true }}
                                variant="filled"
                                fullWidth
                            />}
                        />
                        {/* <TextField
                            className={classes.loginSideField}
                            id="email"
                            label="Email"
                            type="email"
                            InputLabelProps={{ shrink: true }}
                            variant="filled"

                            fullWidth
                        />
                        <TextField
                            className={classes.loginSideField}
                            id="password"
                            label="Password"
                            type="password"
                            InputLabelProps={{ shrink: true }}
                            variant="filled"
                            fullWidth
                        /> */}
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

        </Dialog>
    )
}