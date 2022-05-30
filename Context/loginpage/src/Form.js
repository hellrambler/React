import React, { Component } from 'react';
import { Avatar, Button, CssBaseline, FormControl, FormControlLabel, Checkbox, Input, InputLabel, Paper, Typography, MenuItem, Select, withStyles } from "@material-ui/core"
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import styles from "./styles/FormStyles"
import { LanguageContext } from "./contexts/LanguageContext"

const words = {
    english: {
        email: "Email"
    },
    french: {
        email: "e-mail"
    },
    spanish: {
        email: "el e-mail"
    }
}

class Form extends Component {
    static contextType = LanguageContext;
    render() {
        const { classes } = this.props;
        const { language, changeLanguage } = this.context;
        const { email } = words[language];
        return (
            <main className={classes.main}>
                <Paper className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon></LockOutlinedIcon>
                    </Avatar>
                    <Typography variant='h5'>
                        Sign In
                    </Typography>
                    <Select value={language} onChange={changeLanguage}>
                        <MenuItem value="english">English</MenuItem>
                        <MenuItem value="french">French</MenuItem>
                        <MenuItem value="spanish">Spanish</MenuItem>
                    </Select>
                    <form className={classes.form}>
                        <FormControl margin='normal' required fullWidth>
                            <InputLabel htmlFor='email'>{email}</InputLabel>
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