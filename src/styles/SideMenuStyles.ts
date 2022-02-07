
import { makeStyles, Theme } from "@material-ui/core/styles";



export const useSideMenuStyles = makeStyles((theme: Theme) => ({
    sideMenu: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'sticky',
        top: 0
    },
    sideMenuList: {
        // position: 'sticky',
        // top: 0,
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
        },
        '& a': {
            textDecoration: 'none',
            color: 'black',
        }
    },
    sideMenuListItem_closed: {
        '& div': {
            color: 'rgba(0,0,0, 0.4)',
            height: 56,
            padding: '0 25px 0 15px',
            marginBottom: 10,

            display: 'inline-flex',
            alignItems: 'center',
            borderRadius: 30,

            
            transition: 'background-color 0.1s ease-in-out, color 0.1s ease-in-out',
        },
        '& a': {
            textDecoration: 'none',
            color: 'black',
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
}))