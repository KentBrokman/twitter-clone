import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { useHomeStyles } from "../styles/HomeStyles"
import { selectIsTagsLoaded, selectTags } from "../store/ducks/tags/selectors"
import { LoadingState } from "../store/types"
import { useRightSideStyles } from "../styles/RightSideStyles"


export const Tags: React.FC = (): React.ReactElement | null => {
    // styles
    const rightSideClasses = useRightSideStyles()
    //
    const tags = useSelector(selectTags)
    const isLoaded = useSelector(selectIsTagsLoaded)
    
    const tagsItems = tags.items
    if (!isLoaded) {
        return null
    }
    
    
    return (
        <Paper className={rightSideClasses.rightSideBlock}>
            <Paper variant="outlined" className={rightSideClasses.rightSideBlockHeader}>
                <b>Актуальные темы</b>
            </Paper>
            <List>
                {tagsItems.map(item => {
                    return (
                    <>
                        <ListItem className={rightSideClasses.rightSideBlockItem}>
                            <Link to={`/home/search?q=${item.name}`}>
                                <ListItemText 
                                    primary={item.name}
                                    secondary={
                                        <Typography component="span" variant="body2" color="textSecondary">
                                          Твитов: {item.count}
                                        </Typography>
                                      }
                                />
                            </Link>
                        </ListItem>
                    </>
                )})}
            </List>
        </Paper>
    )
}