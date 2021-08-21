import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { useHomeStyles } from "../pages/Home/HomeStyles"
import { selectIsTagsLoaded, selectTags } from "../store/ducks/tags/selectors"
import { LoadingState } from "../store/types"

interface TagsProps {
    classes: ReturnType<typeof useHomeStyles>
}


export const Tags: React.FC<TagsProps> = ({classes}): React.ReactElement | null => {
    const tags = useSelector(selectTags)
    const isLoaded = useSelector(selectIsTagsLoaded)
    
    const tagsItems = tags.items
    if (!isLoaded) {
        return null
    }
    
    
    return (
        <Paper className={classes.rightSideBlock}>
            <Paper variant="outlined" className={classes.rightSideBlockHeader}>
                <b>Актуальные темы</b>
            </Paper>
            <List>
                {tagsItems.map(item => {
                    return (
                    <>
                        <ListItem className={classes.rightSideBlockItem}>
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