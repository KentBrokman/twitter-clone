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

import { useStylesSignIn } from "../SignIn"
import FormGroup from "@material-ui/core/FormGroup/FormGroup"


type PropsType = {
    onClose: () => void,
    open: boolean
};


export const RegisterModal: React.FC<PropsType> = ({ onClose, open }) => {
    const classes = useStylesSignIn()
    return (
        <Dialog
            open={open}
            onClose={onClose}>
            <TwitterIcon className={classes.loginSideTwitterIcon} color="primary" />
            <DialogTitle id="form-dialog-title">Создайте учетную запись</DialogTitle>
            <DialogContent>
                <FormControl fullWidth >
                    <FormGroup row>
                        <TextField className={classes.registerField}
                            id="name"
                            label="Имя"
                            type="name"
                            InputLabelProps={{ shrink: true }}
                            variant="filled"

                            fullWidth
                        />
                        <TextField className={classes.registerField}
                            id="email"
                            label="Email"
                            type="email"
                            InputLabelProps={{ shrink: true }}
                            variant="filled"

                            fullWidth
                        />
                        <TextField className={classes.registerField}
                            id="password"
                            label="Password"
                            type="password"
                            InputLabelProps={{ shrink: true }}
                            variant="filled"

                            fullWidth
                        />
                    </FormGroup>
                </FormControl>

            </DialogContent>
            <DialogActions>
                <Button onClick={() => { }} color="primary">
                    Cancel
                </Button>
                <Button onClick={() => { }} color="primary">
                    Subscribe
                </Button>
            </DialogActions>
        </Dialog>
    )
}