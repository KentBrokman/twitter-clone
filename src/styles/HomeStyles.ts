import { makeStyles, Theme } from "@material-ui/core/styles";







export const useHomeStyles = makeStyles((theme: Theme) => ({
    centered: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
    },
    wrapper: {
        // overflowY: 'scroll',     
        height: '100vh',
        '& .MuiGrid-item': {                                        
            // paddingTop: '0',
            paddingBottom: '0'
            
        }   
    },
    centralSectionWrapper: {
        borderRadius: 0,
        height: '100%',
        borderTop: '0',
        borderBottom: '0',

        backgroundColor: 'transparent',
    },
}))