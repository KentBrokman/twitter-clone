import Paper from "@material-ui/core/Paper/Paper"
import { useHomeStyles } from "../../styles/HomeStyles"
import { useProfileStyles } from "../../styles/ProfileStyles"
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from "react-redux";
import { selectUserState } from "../../store/ducks/user/selectors";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { useEffect, useState } from "react";
import format from 'date-fns/format'
import ruLang from 'date-fns/locale/ru'

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PersonIcon from '@material-ui/icons/Person';
import CircularProgress from '@material-ui/core/CircularProgress';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import LinkIcon from '@material-ui/icons/Link';
import CalendarIcon from '@material-ui/icons/DateRange';
import { TestComponent } from "../../components/TestComponent";
import { selectTweets, selectTweetsIsLoading } from "../../store/ducks/tweets/selectors";
import { Tweet } from "../../components/tweets/Tweet";
import { fetchOwnTweets, setTweets } from "../../store/ducks/tweets/actionCreators";
import { useTweetsStyles } from "../../styles/TweetsStyles";
import { ProfileEditCard } from "./ProfileEditCard";

interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}
function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}


export const Profile: React.FC = () => {


    // const open = visibleModal === 'closed' ? false : true
    // const open = true
    // styles
    const homeClasses = useHomeStyles()
    const profileClasses = useProfileStyles()
    const tweetsClasses = useTweetsStyles()
    //
    // Utils 
    const dispatch = useDispatch()
    //
    // local state
    const [value, setValue] = useState(0);
    const [visibleModal, setVisibleModal] = useState<'open' | 'closed'>('closed')
    //
    // global state
    const userData = useSelector(selectUserState).data
    const tweets = useSelector(selectTweets)
    const isTweetsLoading = useSelector(selectTweetsIsLoading)
    //
    // handlers

    const handleOnEditProfile = () => {
        setVisibleModal('open')
    }
    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };
    const handleOnClose = () => {
        setVisibleModal('closed')
    }
    //
    // Life cycle methods
    useEffect(() => {
        if (userData?._id) {
            dispatch(fetchOwnTweets(userData?._id))
        }
        return () => {
            dispatch(setTweets([]))
        }
    }, [])
    //
    return (
        <Paper className={homeClasses.centralSectionWrapper} variant='outlined'>
            <div className={profileClasses.header}>
                <div className={profileClasses.headerImage}
                    style={userData?.images?.backgroundPhoto ? { backgroundImage: `url(${userData.images.backgroundPhoto.cloudinary_url})` } :
                        { backgroundColor: 'rgb(178,178,178)' }
                    }></div>
                <div className={profileClasses.headerMain}>
                    <div className={profileClasses.profileInfo}>
                        <div className={profileClasses.profileInfo_header}>
                            {userData?.images?.profilePhoto ?
                                <div className={profileClasses.avatar} style={{ backgroundImage: `url(${userData?.images?.profilePhoto?.cloudinary_url})` }}></div> :
                                <div className={`${profileClasses.avatar} ${profileClasses.avatarFiller}`}><PersonIcon /></div>
                            }
                            <Button className={profileClasses.editProfileButton}
                                variant="outlined"
                                size="medium"
                                color="default"
                                onClick={handleOnEditProfile}>
                                Изменить профиль
                            </Button>
                        </div>
                        <span className={profileClasses.profileName}>{userData?.fullName}</span>
                        <span>{userData?.nickname}</span>
                        {userData?.additionalInfo?.about?.length === 0 ? '' :
                            <div className={profileClasses.profileAboutInfo}>{userData?.additionalInfo?.about}</div>
                        }
                        <div className={profileClasses.profileCommonInfo}>
                            {userData?.additionalInfo?.location &&
                                <div className={profileClasses.profileCommonInfo_item}>
                                    <LocationOnIcon className={profileClasses.profileCommonInfo_icons} />
                                    <span>{userData?.additionalInfo?.location}</span>
                                </div>
                            }
                            {userData?.additionalInfo?.website &&
                                <div className={profileClasses.profileCommonInfo_item}>
                                    <LinkIcon className={profileClasses.profileCommonInfo_icons} />
                                    <a className={profileClasses.profileCommonInfo_link} href="#">{userData?.additionalInfo?.website}</a>
                                </div>
                            }
                            {userData?.createdAt &&
                                <div className={profileClasses.profileCommonInfo_item}>
                                    <CalendarIcon className={profileClasses.profileCommonInfo_icons} />
                                    <span>Регистрация: {format(new Date(userData?.createdAt), 'PPP', { locale: ruLang })}</span>
                                </div>
                            }
                        </div>
                        <div className={profileClasses.readers}>
                            <span><b>73</b> читаемых</span>
                            <span><b>1</b> читатель</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={profileClasses.body}>
                <Tabs
                    value={value}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={handleChange}
                    variant='fullWidth'
                    aria-label="disabled tabs example"
                >
                    <Tab label="Твиты" />
                    <Tab label="Медиа" />
                    <Tab label="Нравится" />
                </Tabs>
                <TabPanel value={value} index={0}>
                    {isTweetsLoading ?
                        <div className={tweetsClasses.tweetsLoading} ><CircularProgress /></div> :
                        tweets.map(tweet => (<Tweet key={tweet._id}
                            tweet={tweet} />))}
                </TabPanel>
                <TabPanel value={value} index={1}>
                    Медиа
                </TabPanel>
                <TabPanel value={value} index={2}>
                    Нравится
                </TabPanel>
            </div>
            {visibleModal === 'open' &&
                <ProfileEditCard onClose={handleOnClose} open={visibleModal === 'open'} userData={userData} />}
        </Paper>
    )
}