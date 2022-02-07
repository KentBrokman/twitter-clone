import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import InputAdornment from "@material-ui/core/InputAdornment"
import SearchIcon from '@material-ui/icons/Search';
import { SearchTextField } from "../components/common/SearchTextField"
import { SideMenu } from "../components/SideMenu"
import { Tags } from "../components/Tags";
import { useHomeStyles } from "../styles/HomeStyles"
import { useRightSideStyles } from "../styles/RightSideStyles";

interface Layout {
    children: React.ReactNode;
}

export const Layout: React.FC<Layout> = ({ children }): React.ReactElement => {
    // styles
    const homeClasses = useHomeStyles()
    const rightSideClasses = useRightSideStyles()
    //
    return (
        <Container className={homeClasses.wrapper} maxWidth="lg">
            <Grid container spacing={3} style={{ height: "100%" }}>
                <Grid item md={3} sm={1}>
                    <SideMenu />

                </Grid>
                <Grid item md={6} sm={8}>
                    {children}
                </Grid>
                <Grid item md={3}>
                    <div className={rightSideClasses.rightSide}>
                        <SearchTextField
                            variant="outlined"
                            placeholder="Поиск по Твиттеру"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                            }}
                            fullWidth
                        />
                        <Tags />
                    </div>

                </Grid>
            </Grid>

        </Container>
    )
}