import React from 'react';
import { DropzoneArea } from 'material-ui-dropzone';
import { Grid } from '@material-ui/core';

const Photo = () => {
    return (
        <div>
            <h1>Photo</h1>
            <Grid container spacing={2} alignItems="center" >
                <Grid item xs={6}>
                    <DropzoneArea
                        acceptedFiles={['image/*']}
                        dropzoneText={"Agrega la photo del Administrador"}
                        onChange={(files) => console.log('Files:', files)}
                    />
                </Grid>

            </Grid>
        </div>
    );
}

export default Photo;