import { makeStyles, Theme } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";







export const useHomeStyles = makeStyles((theme: Theme) => ({
    wrapper: {
        height: '100vh',
    },
    logo: {
        margin: '10px 0'
    },
    logoIcon: {
        fontSize: 36,
    },
    sideMenuList: {
        position: 'sticky',
        top: 0,
        listStyle: 'none',
        padding: 0,
        margin: 0,
        maxWidth: 230,
    },
    sideMenuTwitButton: {
        padding: theme.spacing(3),
        marginTop: theme.spacing(3),
    },
    sideMenuListItem: {
        '&:hover': {
            '& div': {
                color: theme.palette.primary.main,
                backgroundColor: 'rgba(29, 161, 242, 0.1)'
            }
        },
        '& div': {
            height: 56,
            padding: '0 25px 0 15px',
            marginBottom: 10,

            display: 'inline-flex',
            alignItems: 'center',
            borderRadius: 30,

            cursor: 'pointer',
            transition: 'background-color 0.1s ease-in-out, color 0.1s ease-in-out',
        }
    },
    sideMenuListItemLabel: {
        fontWeight: 700,
        fontSize: 20,
        marginLeft: 15,
    },
    sideMenuListItemIcon: {
        fontSize: 30
    },
    tweetsSectionWrapper: {
        borderRadius: 0,
        height: '100%',
        borderTop: '0',
        borderBottom: '0'
    },
    tweetsSectionHeader: {
        display: 'flex',
        alignItems: 'center',

        borderRadius: 0,
        borderTop: '0',
        borderRight: '0',
        borderLeft: '0',
        padding: '15px',
        '& h6': {
            fontWeight: 800
        }
    },
    tweets: {

    },
    tweetsLoading: {
        marginTop: 40,

        display: 'flex',
        justifyContent: 'center'
    },
    tweet: {
        display: 'flex',
        alignItems: 'flex-start',

        borderRadius: 0,
        borderTop: '0',
        borderRight: '0',
        borderLeft: '0',
        padding: '15px',
        '& h6': {
            fontWeight: 800
        },

        paddingTop: 20,
        paddingLeft: 20,
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: 'rgb(245, 248, 250)',
        }
    },
    tweetsCentered: {
        display: 'flex',
        width: '100%',
        height: 'inherit',
        alignItems: 'center',
        justifyContent: 'center'
    },
    tweetAvatar: {
        alignSelf: 'flex-start',

        width: theme.spacing(6),
        height: theme.spacing(6),
        marginRight: 15,
    },
    tweetUserName: {
        color: grey[500]
    },
    tweetFooter: {
        width: 460,
        position: 'relative',
        left: -13,
        display: 'flex',
        justifyContent: 'space-between'
    },
    addForm: {
        padding: '20px 20px 10px 20px',
    },
    addFormBody: {
        position: 'relative',

        display: 'flex',
        width: '100%',
        alignItems: 'center',

        marginBottom: 20
    },
    addFormTextarea: {
        width: '100%',
        border: 0,
        fontSize: 20,
        outline: 'none',
        fontFamily: 'inherit',
        resize: 'none',
    },
    addTwitIcons: {
        display: 'flex',
        alignItems: 'center'
    },
    addFormBottom: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',

        paddingTop: 10,

        borderTop: '1px solid #e0e0e0'
    },
    addFormBottomRight: {
        display: 'flex',
        alignItems: 'center',
    },
    addFormCircleProgress: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 30,
        height: 30,
        margin: '0 10px',
        '& .MuiCircularProgress-root': {
            position: 'absolute',
        },
    },
    addTwitFooter: {
        display: 'flex',
        justifyContent: 'space-between',

        marginTop: 25,
        marginBottom: 6,
    },
    devider: {
        height: 10,
        width: '100%',

        borderRadius: 0,

        borderLeft: '0',
        BorderRight: '0',

        backgroundColor: '#f7f9f9',
    },
    rightSide: {
        position: 'sticky',
        top: 0
    },
    rightSideBlock: {
        backgroundColor: '#F5F8FA',
        borderRadius: 15,
        marginTop: 20,

        overflow: 'hidden',
    },
    rightSideBlockHeader: {
        border: 0,

        backgroundColor: 'transparent',
        padding: '13px 18px',

        '& b': {
            fontSize: 19,
            fontWeight: 800
        }
    },
    rightSideBlockItem: {
        cursor: 'pointer',
        '& .MuiTypography-body1': {
            fontWeight: 700,
        },
        '& .MuiListItemAvatar-root': {
            minWidth: 50,
        },
        '& .MuiListItemText-root': {
            margin: 0,
        },
        '&:hover': {
            backgroundColor: '#edf3f6',
        },
        '& a': {
            color: 'inherit',
            textDecoration: 'none',
        }
    }
}))