import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import './QStep.css';

//use styles for mui stepper

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    button: {
      marginTop: theme.spacing(1),

    },
    icon: {
      color: "red !important"
    },
    actionsContainer: {
      marginBottom: theme.spacing(2),
    },
    resetContainer: {
      padding: theme.spacing(3),
    },
  }));

  //content for mui stepper
function getSteps() {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9]
  }

function QStep(props) {

    // constants and styles for mui stepper 
    const classes = useStyles();
    const activeStep = props.progress.length
    const steps = getSteps();

    return (
        <div className={classes.root}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel></StepLabel>
            </Step>
          ))}
        </Stepper>
      </div>
    )
}

export default QStep