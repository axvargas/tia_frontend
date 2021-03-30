import React, { useState } from 'react';
import { TextField, Grid, FormControl, OutlinedInput, InputLabel, IconButton, InputAdornment } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import useStyles from './style';
const SingInInfo = () => {
    const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = (prop) => (event) => {
        event.preventDefault();
        switch (prop) {
            case 'password':
                setShowPassword(!showPassword);
                break;
            default:
                break;
        }

    };
    return (
        <div>
            <h1>Sing In Info</h1>
            <Grid container spacing={2}>

                <Grid item xs={6}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                    // onChange={handleChange('email')}
                    // value={form.email}
                    // error={error || errors.email}
                    // helperText={msg || helpers.email}
                    />
                </Grid>
                <Grid item xs={6}>
                    <FormControl
                        className={classes.txt}
                        required fullWidth
                        variant="outlined"
                    // error={errors.password}
                    >
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            // value={form.password}
                            // onChange={handleChange('password')}
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
                        {/* <FormHelperText error={errors.password}>{helpers.password}</FormHelperText> */}
                    </FormControl>
                </Grid>
            </Grid>
        </div>
    );
}

export default SingInInfo;