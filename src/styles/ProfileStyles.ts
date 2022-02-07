import { makeStyles } from "@material-ui/core/styles"


export const useProfileStyles = makeStyles(() => ({
    header: {

    },
    headerImage: {
        height: '200px',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    },
    headerMain: {
        // position: 'relative',
        display: 'flex',
        justifyContent: 'space-between',
    },
    avatar: {
        height: '130px',
        width: '130px',

        marginBottom: '12px',
        marginTop: '-67px',

        border: '4px solid white',
        borderRadius: '50%',

        backgroundSize: 'cover',
        backgroundPosition: 'center'
    },
    avatarFiller: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: 'rgb(189,189,189)',

        '& .MuiSvgIcon-root': {
            fontSize: '80px'
        }
    },
    profileInfo: {
        // position: 'absolute',
        // marginTop: '-67px',
        width: '100%',
        marginLeft: '15px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        
    },
    profileInfo_header: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    profileName: {
        fontWeight: 'bold',
        fontSize: '19px'
    },
    profileAboutInfo: {
        marginTop: '10px'
    },
    profileCommonInfo: {
        margin: '10px 0',

        display: 'flex',
        flexWrap: 'wrap'
    },
    profileCommonInfo_icons: {
        width: '19px',
        height: '19px',

        marginRight: '2px'
    },
    profileCommonInfo_item: {
        display: 'flex',
        alignItems: 'center',

        marginRight: '12px'
    },
    profileCommonInfo_link: {
        textDecoration: 'none',
        color: 'rgb(29, 155, 240)',
        "&:hover": {
            textDecorationLine: 'underline',
        }
    },
    readers: {
        '& span': {
            marginRight: '8px'
        }
    },
    editProfileButton: {
        marginTop: '10px',
        marginRight: '15px'
    },

    body: {
        '& .MuiBox-root': {
            padding: '0'
        }
    },

    profileEditCard_wrapper: {
        height: '650px',
        width: '600px',
        
        overflow: 'hidden',
    },
    profileEditCard_content: {
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        width: '100%',
        height: '100%',
  
        overflowY: 'scroll',
    },
    profileEditCard_loader: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    profileEditCard_header: {
        height: '53px',

        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',

        backgroundColor: 'rgba(255,255,255, 0.5)',

        position: 'sticky',
        top: '0',
    },
    profileEditCard_header_left: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: '10px',

        '& .MuiButton-root': {
            height: '34px',
            width: '34px',
            minWidth: '34px',

            marginRight: '30px',
        },
        '& span': {
            fontSize: '20px',
            fontWeight: '700'
        }
    },
    profileEditCard_header_right: {
        marginRight: '14px',
        '& .MuiButton-root': {
            height: '34px',
            padding: '2px 20px 0 20px',
            fontSize: '14px',

            color: 'white',
            backgroundColor: 'black'
        },
    },
    profileEditCard_form_backImage: {
        height: '192px',

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        backgroundSize: 'cover',
        backgroundPosition: 'center'
    },
    profileEditCard_form_avatarImage: {
        height: '112px',
        width: '112px',
        marginTop: '-50px',
        marginLeft: '12px',

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        border: '4px solid white',
        borderRadius: '50%',

        backgroundSize: 'cover',
        backgroundPosition: 'center'
    },

    profileEditCard_form_textFields: {
        padding: '14px',

        '& div:not(:last-child)': {
            marginBottom: '30px'
        }
    },
    profileEditCard_form_textField: {
        width: '100%',
        position: 'relative',

        // display: 'flex',
        // flexDirection: 'column',
        // alignItems: 'end',

        '& #counter': {
            position: 'absolute',
            right: '8px',
            top: '5px',
            // marginBottom: '-24px',
            // marginRight: '8px',
            fontSize: '14px'
        }
    }
}))