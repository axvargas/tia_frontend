import React from 'react';
import { Link } from 'react-router-dom';
//@Material-UI imports
import {
    Avatar,
    Button,
    CssBaseline,
    Grid,
    Box,
    Typography,
    Container,

} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';


// Component imports
import Copyright from '../../copyright';

// Style imports
import useStyles from './style';

const SignUp = ({ history }) => {
    const classes = useStyles();


    const handleSubmit = (event) => {
        console.log("Submiting..")
        history.push('/sign-in')
    }
    return (

        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit} noValidate>
                    {/* <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="fname"
                                name="firstName"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                                onChange={handleChange('first')}
                                value={form.first}
                                error={errors.first}
                                helperText={helpers.first}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="lname"
                                onChange={handleChange('last')}
                                value={form.last}
                                error={errors.last}
                                helperText={helpers.last}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                onChange={handleChange('email')}
                                value={form.email}
                                error={error || errors.email}
                                helperText={msg || helpers.email}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl className={classes.txt} required fullWidth variant="outlined" error={errors.password}>
                                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type={showPassword ? 'text' : 'password'}
                                    value={form.password}
                                    onChange={handleChange('password')}
                                    autoComplete="current-password"
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword('password')}

                                                edge="end"
                                            >
                                                {showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    labelWidth={85}
                                />
                                <FormHelperText error={errors.password}>{helpers.password}</FormHelperText>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl className={classes.txt} required fullWidth variant="outlined" error={errors.password1}>
                                <InputLabel htmlFor="outlined-adornment-password">Confirm password</InputLabel>
                                <OutlinedInput
                                    id="confirmation-password"
                                    type={showPassword1 ? 'text' : 'password'}
                                    value={form.password1}
                                    onChange={handleChange('password1')}
                                    autoComplete="current-password"
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword('password1')}

                                                edge="end"
                                            >
                                                {showPassword1 ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    labelWidth={150}
                                />
                                <FormHelperText error={errors.password1}>{helpers.password1}</FormHelperText>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" color="primary" />}
                                label="I want to receive inspiration, marketing promotions and updates via email."
                            />
                        </Grid>
                    </Grid> */}
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign Up
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link to='/sign-in' variant="body2"
                            // onClick={byeError}
                            >
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>

    );
}
export default SignUp;