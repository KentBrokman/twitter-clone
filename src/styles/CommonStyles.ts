import { makeStyles, Theme } from "@material-ui/core/styles";







export const useCommonStyles = makeStyles((theme: Theme) => ({
    logo: {
        // margin: '10px 0'
    },
    logoIcon: {
        fontSize: 36,
    },
    devider: {
        height: 10,
        width: '100%',

        borderRadius: 0,

        borderLeft: '0',
        BorderRight: '0',

        backgroundColor: '#f7f9f9',
    },
    emojisPickerWrapper: {
        // position: 'relative'
    }
}))