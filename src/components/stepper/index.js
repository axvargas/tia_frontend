import React from 'react';
import { useHistory } from 'react-router-dom'
import {
    Stepper,
    Step,
    StepLabel,
    Button,
    Typography
} from '@material-ui/core';
import PersonalInfo from './components/personalInfo';
import Photo from './components/photo';
import SignInInfo from './components/singInInfo';
import useStyles from './style';

function getSteps() {
    return ['Ingresa la información de ingreso a la plataforma', 'Ingresa información personal del Administrador', 'Ingresa la foto del Administrador'];
}

function getStepContent(stepIndex) {
    switch (stepIndex) {
        case 0:
            return <SignInInfo />;
        case 1:
            return <PersonalInfo />;
        case 2:
            return <Photo />;
        default:
            return 'Unknown stepIndex';
    }
}

const AdminStepper = () => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();
    let history = useHistory();
    const register = () => {
        console.log("Registering");
        history.push('/admins');
    }
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <div className={classes.root}>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div>
                {activeStep === steps.length ? (
                    <div>
                        <Typography className={classes.instructions}>All steps completed</Typography>
                        <Button onClick={handleReset}>Reset</Button>
                    </div>
                ) : (
                    <div>
                        <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                        <div>
                            <Button
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                className={classes.backButton}
                            >
                                Atrás
                                </Button>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={activeStep === steps.length - 1 ? register : handleNext}
                            >
                                {activeStep === steps.length - 1 ? 'Registrar' : 'Siguiente'}
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
export default AdminStepper;