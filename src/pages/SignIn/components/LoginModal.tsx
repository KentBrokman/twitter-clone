
import DialogActions from "@material-ui/core/DialogActions"
import Dialog from "@material-ui/core/Dialog"
import DialogTitle from "@material-ui/core/DialogTitle"
import FormGroup from "@material-ui/core/FormGroup"
import TextField from "@material-ui/core/TextField"
import { useStylesSignIn } from "../SignIn"
import DialogContent from "@material-ui/core/DialogContent/DialogContent"
import Button from "@material-ui/core/Button/Button"

type PropsType = {
    onClose: () => void,
    open: boolean
};


export const LoginModal: React.FC<PropsType> = ({ onClose, open }): React.ReactElement | null => {
    const classes = useStylesSignIn()
    if(!open) {
        return null
    }
    return (
        <Dialog open={open}
            onClose={onClose}
            maxWidth="xs"
            fullWidth={true}
        >
            <DialogTitle>Войти в твиттер</DialogTitle>
            <DialogContent>
                <FormGroup>
                    <TextField
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
                    />
                </FormGroup>

            </DialogContent>
            <DialogActions>
                <Button variant='contained'
                    color='primary'
                    fullWidth>Войти</Button>
            </DialogActions>

        </Dialog>
    )
}