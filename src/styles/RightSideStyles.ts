import { makeStyles, Theme } from "@material-ui/core/styles";







export const useRightSideStyles = makeStyles((theme: Theme) => ({
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