
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
import HomeIcon from '@material-ui/icons/Home';


import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import Typography from "@material-ui/core/Typography";

import { Button } from '@material-ui/core';
import { useHomeStyles } from '../styles/HomeStyles';
import { ModalBlock } from './ModalBlock';
import { AddTweetForm } from './tweets/AddTweetForm';
import { Link } from 'react-router-dom';
import { ProfileCard } from './ProfileCard';
import { useSideMenuStyles } from '../styles/SideMenuStyles';
import { useCommonStyles } from '../styles/CommonStyles';


export const SideMenu: React.FC = (): React.ReactElement => {
    // styles
    const sideMenuClasses = useSideMenuStyles()
    const commonClasses = useCommonStyles()
    //

    const [addTweetIsVisible, setAddTweetIsVisible] = React.useState<boolean>(false)
    const onCloseAddTweet = () => {
        setAddTweetIsVisible(false)
    }
    const handleClickOpenAddTweet = () => {
        setAddTweetIsVisible(true)
    }
    return (
        <div className={sideMenuClasses.sideMenu}>
            <ul className={sideMenuClasses.sideMenuList}>

                <li >
                    <div>
                        <Link to='/home'>
                            <IconButton className={commonClasses.logo} color='primary'>
                                <TwitterIcon className={commonClasses.logoIcon} />
                            </IconButton>
                        </Link>

                    </div>
                </li>
                <li className={sideMenuClasses.sideMenuListItem}>
                    <Link to='/home'>
                        <div>
                            <HomeIcon className={sideMenuClasses.sideMenuListItemIcon} />
                            <Hidden smDown>
                                <Typography className={sideMenuClasses.sideMenuListItemLabel} variant='h6'>Главная</Typography>
                            </Hidden>
                        </div>
                    </Link>
                </li>
                <li className={sideMenuClasses.sideMenuListItem}>
                    <Link to='profile'>
                        <div>
                            <PermIdentityIcon className={sideMenuClasses.sideMenuListItemIcon} />
                            <Hidden smDown>
                                <Typography className={sideMenuClasses.sideMenuListItemLabel} variant='h6'>Профиль</Typography>
                            </Hidden>
                        </div>
                    </Link>
                </li>
                <li className={sideMenuClasses.sideMenuListItem_closed}>
                    <div>

                        <NotificationsNoneIcon className={sideMenuClasses.sideMenuListItemIcon} />
                        <Hidden smDown>
                            <Typography className={sideMenuClasses.sideMenuListItemLabel} variant='h6'>Уведомления</Typography>
                        </Hidden>

                    </div>
                </li>
                <li className={sideMenuClasses.sideMenuListItem_closed}>
                    <div>

                        <MailOutlineIcon className={sideMenuClasses.sideMenuListItemIcon} />
                        <Hidden smDown>
                            <Typography className={sideMenuClasses.sideMenuListItemLabel} variant='h6'>Сообщения</Typography>
                        </Hidden>

                    </div>
                </li>
                <li className={sideMenuClasses.sideMenuListItem_closed}>
                    <div>

                        <BookmarkBorderIcon className={sideMenuClasses.sideMenuListItemIcon} />
                        <Hidden smDown>
                            <Typography className={sideMenuClasses.sideMenuListItemLabel} variant='h6'>Закладки</Typography>
                        </Hidden>

                    </div>
                </li>
                <li className={sideMenuClasses.sideMenuListItem_closed}>
                    <div>

                        <ListAltIcon className={sideMenuClasses.sideMenuListItemIcon} />
                        <Hidden smDown>
                            <Typography className={sideMenuClasses.sideMenuListItemLabel} variant='h6'>Списки</Typography>
                        </Hidden>

                    </div>
                </li>
                <li className={sideMenuClasses.sideMenuListItem}>

                    <Button className={sideMenuClasses.sideMenuTwitButton}
                        variant='contained'
                        color='primary'
                        onClick={handleClickOpenAddTweet}
                        fullWidth >
                        <Hidden smDown>Твитнуть</Hidden>
                        <Hidden mdUp><SendIcon /></Hidden>
                    </Button>
                    <ModalBlock onClose={onCloseAddTweet} visible={addTweetIsVisible}>
                        <div style={{ minWidth: '550px' }}>
                            <AddTweetForm maxRows={15} />
                        </div>
                    </ModalBlock>
                </li>
            </ul>

            <ProfileCard />
        </div>
    );
};

