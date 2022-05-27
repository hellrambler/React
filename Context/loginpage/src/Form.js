import React, { Component } from 'react';
import { Avatar, Button, CssBaseline, FormControl, FormControlLabel, Checkbox, Input, InputLabel, Paper, Typography, MenuItem, Select, withStyles } from "@material-ui/core"
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import styles from "./styles/FormStyles"

class Form extends Component {
    render() {
        const { classes } = this.props;
        return (
            <main className={classes.main}>
                <Paper className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon></LockOutlinedIcon>
                    </Avatar>
                    <Typography variant='h5'>
                        Sign In
                    </Typography>
                    <Select value='en'>
                        <MenuItem value="en">English</MenuItem>
                        <MenuItem value="fr">French</MenuItem>
                        <MenuItem value="es">Spanish</MenuItem>
                    </Select>
                    <form className={classes.form}>
                        <FormControl margin='normal' required fullWidth>
                            <InputLabel htmlFor='email'>Email</InputLabel>
                            <Input id='email' name='email' autoFocus />
                        </FormControl>
                        <FormControl margin='normal' required fullWidth>
                            <InputLabel htmlFor='password'>Password</InputLabel>
                            <Input id='password' name='password' autoFocus />
                        </FormControl>
                        <FormControlLabel control={<Checkbox color="primary" />} label="remember me" />
                        <Button variant='contained' type="submit" fullWidth color='primary' className={classes.submit}>Sign In</Button>
                    </form>
                </Paper>

            </main>
        );
    }
}

export default withStyles(styles)(Form);