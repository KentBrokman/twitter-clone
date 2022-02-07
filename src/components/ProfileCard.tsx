import React from 'react';
import cn from 'classnames'
import { Theme, createStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { Avatar } from "@material-ui/core";

import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import MenuList from '@material-ui/core/MenuList';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserState } from '../store/ducks/user/selectors';
import { signOut } from '../store/ducks/user/actionCreators'


const useStyles = makeStyles(() =>
    createStyles({
        profileCard: {
            marginBottom: '10px',
            
            maxWidth: '260px',
            padding: '14px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            '&:hover': {
                backgroundColor: 'rgb(224,224,224)',
                cursor: 'pointer'
            },

            borderRadius: '40px',
            transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
        },
        profileCard_selected: {
            backgroundColor: 'rgb(224,224,224)'
        },
        profileCardLeftPart: {
            display: 'flex'
        },
        profileCardAvatar: {
            marginRight: '10px'
        },
        info: {
            height: '100%',

            display: 'flex',
            flexDirection: 'column'
        },
        fullName: {
            fontWeight: 'bold'
        },
        profileCardIcon: {
            marginRight: '10px'
        }
    }),
);

export const ProfileCard: React.FC = (): React.ReactElement => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const userData = useSelector(selectUserState).data

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        event.stopPropagation()
        setAnchorEl(event.currentTarget);

        if (event.currentTarget.id === 'profileCard' && anchorEl !== null) {
            setAnchorEl(null);
        }
    };
    const handleClose = (event: React.MouseEvent<EventTarget>) => {
        event.stopPropagation()
        setAnchorEl(null);
    };
    const handleOnSignOutClick = (event: React.MouseEvent<HTMLElement>) => {
        if (event.currentTarget.id === 'signOutButton') {
            window.localStorage.removeItem('token')
            dispatch(signOut())
        }
    }

    return (
        <Card id='profileCard' className={cn(classes.profileCard, { [`${classes.profileCard_selected}`]: open })} onClick={handleClick}>
            <div className={classes.profileCardLeftPart}>
                <Avatar
                    alt="User avatar"
                    src={userData?.images?.profilePhoto?.cloudinary_url}
                    className={classes.profileCardAvatar} />
                <div className={classes.info}>
                    <div className={classes.fullName}>
                        {userData?.fullName}
                    </div>
                    <div>
                        {userData?.nickname}
                    </div>
                </div>
            </div>
            <MoreVertIcon className={classes.profileCardIcon} />

            <Popper open={open} anchorEl={anchorEl} role={undefined} transition disablePortal>
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                    >
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList autoFocusItem={open} id="menu-list-grow" >
                                    <MenuItem onClick={handleOnSignOutClick} id='signOutButton'>Выйти из учетной записи.</MenuItem>
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </Card>
    );
}