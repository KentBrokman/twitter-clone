
import React from 'react';

import IconButton from "@material-ui/core/IconButton";

import cn from 'classnames'
import Hidden from '@material-ui/core/Hidden';

import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import SendIcon from '@material-ui/icons/Telegram';


import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import Typography from "@material-ui/core/Typography";

import { Button } from '@material-ui/core';
import { useHomeStyles } from '../pages/Home/HomeStyles';
import { ModalBlock } from './ModalBlock';
import { AddTweetForm } from './AddTweetForm';
import { Link } from 'react-router-dom';

interface SideMenuProps {
    classes: ReturnType<typeof useHomeStyles>
}

export const SideMenu: React.FC<SideMenuProps> = ({ classes }): React.ReactElement => {
    const [addTweetIsVisible, setAddTweetIsVisible] = React.useState<boolean>(false)
    const onCloseAddTweet = () => {
        setAddTweetIsVisible(false)
    }
    const handleClickOpenAddTweet = () => {
        setAddTweetIsVisible(true)
    }
    return (
        <ul className={classes.sideMenuList}>

            <li >
                <div>
                    <Link to='/home'>
                        <IconButton className={classes.logo} color='primary'>
                            <TwitterIcon className={classes.logoIcon} />
                        </IconButton>
                    </Link>

                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>

                    <SearchIcon className={classes.sideMenuListItemIcon} />
                    <Hidden smDown>
                        <Typography className={classes.sideMenuListItemLabel} variant='h6'>Поиск</Typography>
                    </Hidden>

                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>

                    <NotificationsNoneIcon className={classes.sideMenuListItemIcon} />
                    <Hidden smDown>
                        <Typography className={classes.sideMenuListItemLabel} variant='h6'>Уведомления</Typography>
                    </Hidden>

                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>

                    <MailOutlineIcon className={classes.sideMenuListItemIcon} />
                    <Hidden smDown>
                        <Typography className={classes.sideMenuListItemLabel} variant='h6'>Сообщения</Typography>
                    </Hidden>

                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>

                    <BookmarkBorderIcon className={classes.sideMenuListItemIcon} />
                    <Hidden smDown>
                        <Typography className={classes.sideMenuListItemLabel} variant='h6'>Закладки</Typography>
                    </Hidden>

                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>

                    <ListAltIcon className={classes.sideMenuListItemIcon} />
                    <Hidden smDown>
                        <Typography className={classes.sideMenuListItemLabel} variant='h6'>Списки</Typography>
                    </Hidden>

                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>

                    <PermIdentityIcon className={classes.sideMenuListItemIcon} />
                    <Hidden smDown>
                        <Typography className={classes.sideMenuListItemLabel} variant='h6'>Профиль</Typography>
                    </Hidden>

                </div>
            </li>
            <li className={classes.sideMenuListItem}>

                <Button className={classes.sideMenuTwitButton}
                    variant='contained'
                    color='primary'
                    onClick={handleClickOpenAddTweet}
                    fullWidth >
                    <Hidden smDown>Твитнуть</Hidden>
                    <Hidden mdUp><SendIcon /></Hidden>
                </Button>
                <ModalBlock onClose={onCloseAddTweet} visible={addTweetIsVisible}>
                    <div style={{ width: '550px' }}>
                        <AddTweetForm maxRows={15} classes={classes} />
                    </div>
                </ModalBlock>
            </li>
        </ul>

    );
};

