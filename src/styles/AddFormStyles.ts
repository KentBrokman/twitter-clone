import { makeStyles, Theme } from "@material-ui/core/styles";







export const useAddFormStyles = makeStyles((theme: Theme) => ({
    addForm: {
        height: '100%',
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
    addFormImages: {
        marginBottom: '10px',
    },
    addFormImages1: {
        height: '400px',
        display: 'flex'
    },
    addFormImages2: {
        height: '400px',
        display: 'grid',
        gap: '10px 10px',
        gridTemplate: '1fr / 1fr 1fr',
        gridTemplateAreas:
            `'image1 image2'`
    },
    addFormImages3: {
        height: '400px',
        display: 'grid',
        gap: '10px 10px',
        gridTemplate: '1fr 1fr / 1fr 1fr',
        gridTemplateAreas:
            `'image1 image3' 
            'image2 image3'`
    },
    addFormImages4: {
        height: '400px',
        display: 'grid',
        gap: '10px 10px',
        gridTemplate: '1fr 1fr / 1fr 1fr',
        gridTemplateAreas:
            `'image1 image3' 
            'image2 image4'`
    },
    addFormImage: {
        height: '100%',
        width: '100%',
        borderRadius: '20px',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',

        position: 'relative',

        '& .MuiIconButton-root': {
            color: 'black',

            position: 'absolute',
            right: '5px',
            top: '5px'
        }
    },
    addFormBottom: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',

        paddingTop: 10,

        borderTop: '1px solid #e0e0e0'
    },
    addFormBottomLeft: {
        display: 'flex'
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
}))