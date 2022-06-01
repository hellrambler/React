import React, { useContext } from 'react';
import { AppBar, IconButton, Typography, InputBase, Switch, Toolbar, withStyles } from '@material-ui/core';
import SearchIcon from '@mui/icons-material/Search';
import styles from "./styles/NavBarStyles";
import { ThemeContext } from "./contexts/ThemeContext";
import { LanguageContext } from "./contexts/LanguageContext";

function Navbar(props) {
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);
    const { classes } = this.props;
    const { language } = useContext(LanguageContext);

    return (

        <div className={classes.root}>
            <AppBar position='static' color={isDarkMode ? "default" : "primary"}>
                <Toolbar>
                    <IconButton className={classes.menuButton} color="inherit">
                        <span>{language}</span>
                    </IconButton>
                    <Typography className={classes.title} variant="h6" color="inherit">
                        App Title
                    </Typography>
                    <Switch onChange={toggleTheme} />
                    <div className={classes.grow}></div>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase placeholder='Search...' classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput
                        }} />
                    </div>
                </Toolbar>
            </AppBar>
        </div>


    );
}

export default withStyles(styles)(Navbar);