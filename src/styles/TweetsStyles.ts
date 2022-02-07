
import { makeStyles, Theme } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";


export const useTweetsStyles = makeStyles((theme: Theme) => ({
    tweets: {

    },
    tweetsLoading: {
        marginTop: 40,

        display: 'flex',
        justifyContent: 'center'
    },

    tweet: {
        position: 'relative',
        display: 'flex',
        alignItems: 'flex-start',

        borderRadius: 0,
        borderTop: '0',
        borderRight: '0',
        borderLeft: '0',
        // padding: '15px',
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
    tweetHeader: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    tweetImages: {
        borderRadius: '10px',
        overflow: 'hidden',

        gap: '2px',
    },
    tweetImages1: {
        height: '400px',
    },
    tweetImages2: {
        height: '400px',
        display: 'grid',
        gridTemplate: '1fr / 1fr 1fr',
        gridTemplateAreas:
            `'image1 image2'`,
    },
    tweetImages3: {
        height: '400px',
        display: 'grid',
        gridTemplate: '1fr 1fr / 1fr 1fr',
        gridTemplateAreas:
            `'image1 image3' 
            'image2 image3'`,
    },
    tweetImages4: {
        height: '400px',
        display: 'grid',
        gridTemplate: '1fr 1fr / 1fr 1fr',
        gridTemplateAreas:
            `'image1 image3' 
            'image2 image4'`,
    },
    tweetImage: {
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        width: '100%',
        height: '100%',
    },
    tweetFooter: {
        margin: '4px 0',
        height: '20px',
        width: 460,
        position: 'relative',
        left: -13,
        display: 'flex',
        justifyContent: 'space-between'
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
    tweetDeletLoading: {
        position: 'absolute',
        top: '0',
        left: '0',

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        width: '100%',
        height: '100%',

        backgroundColor: 'rgba(192,192,192,0.5)'
    },
    tweetInactiveLink: {
        pointerEvents: 'none',
        cursor: 'default'
    },
    fullTweet: {
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
    },
}))