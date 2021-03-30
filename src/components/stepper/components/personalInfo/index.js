import React from 'react';
import { TextField, Grid } from '@material-ui/core';
const PersonalInfo = () => {
    return (
        <div>
            <h1>Personal Info</h1>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        autoComplete="fname"
                        name="firstName"
                        variant="outlined"
                        required
                        fullWidth
                        id="firstName"
                        label="Nombres"
                        autoFocus
                    // onChange={handleChange('first')}
                    // value={form.first}
                    // error={errors.first}
                    // helperText={helpers.first}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="lastName"
                        label="Apellidos"
                        name="lastName"
                        autoComplete="lname"
                    // onChange={handleChange('last')}
                    // value={form.last}
                    // error={errors.last}
                    // helperText={helpers.last}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="id"
                        label="Cedula"
                        name="id"
                        autoComplete="id"
                    // onChange={handleChange('last')}
                    // value={form.last}
                    // error={errors.last}
                    // helperText={helpers.last}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="cellphone"
                        label="Celular"
                        name="cellphone"
                        autoComplete="cellphone"
                    // onChange={handleChange('last')}
                    // value={form.last}
                    // error={errors.last}
                    // helperText={helpers.last}
                    />
                </Grid>
            </Grid>
        </div>
    );
}

export default PersonalInfo;
