import React, { Component } from 'react';
import { AppBar, IconButton, Typography, InputBase, Switch, Toolbar, withStyles } from '@material-ui/core';
import SearchIcon from '@mui/icons-material/Search';
import styles from "./styles/NavBarStyles";

class Navbar extends Component {

    render() {
        const { classes } = this.props;
        return (

            <div className={classes.root}>
                <AppBar position='static' color='primary'>
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit">
                            <span>France</span>
                        </IconButton>
                        <Typography className={classes.title} variant="h6" color="inherit">
                            App Title
                        </Typography>
                        <Switch />
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
}

export default withStyles(styles)(Navbar);