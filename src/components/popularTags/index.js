import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/styles';
// import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  IconButton,
  Divider
} from '@material-ui/core';
// import PersonIcon from '@material-ui/icons/Person';
// import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import RefreshIcon from '@material-ui/icons/Refresh';
import { createMuiTheme } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  root: {
    height: '100%'
  },
  chartContainer: {
    position: 'relative',
    height: '460px'
  },
  stats: {
    marginTop: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center'
  },
  device: {
    textAlign: 'center',
    padding: theme.spacing(1)
  },
  deviceIcon: {
    color: theme.palette.icon
  }
}));

const colores = createMuiTheme({
  palette: {
    color3: '#4474e1',
    color2: '#3f51b5',
    color1: '#2196f3',
    color4: '#03a9f4',
    color5: '#00acc1',
  },
});

const ActiveInactiveAdmins = ({ datos }) => {
  // const { className, ...rest } = props;

  const classes = useStyles();
  const theme = useTheme();
  let data = {
      datasets: [
        {
          data: [datos[0].cantidad,datos[1].cantidad,datos[2].cantidad,datos[3].cantidad,datos[4].cantidad],
          backgroundColor: [
            colores.palette.color1,
            colores.palette.color2,
            colores.palette.color3,
            colores.palette.color4,
            colores.palette.color5,
          ],
          borderWidth: 4,
          borderColor: theme.palette.white,
          hoverBorderColor: theme.palette.white,
        }
      ],
      labels:[datos[0]._id,datos[1]._id,datos[2]._id,datos[3]._id,datos[4]._id]
    };
    // console.log(data)
  // }
  // catch{
  //   console.log("Cargando")
  // }
    

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      animateRotate: true,
    },
    legend: { 
      display: true,
      position: 'bottom',
    },
    cutoutPercentage: 80,
    layout: { padding: 0 },
    tooltips: {
      enabled: true,
      mode: 'index',
      intersect: false,
      borderWidth: 1,
      borderColor: theme.palette.divider,
      backgroundColor: theme.palette.white,
      titleFontColor: theme.palette.text.primary,
      bodyFontColor: theme.palette.text.secondary,
      footerFontColor: theme.palette.text.secondary
    }
  };

  return (
    <Card
      // {...rest}
      // className={clsx(classes.root, className)}
    >
      <CardHeader
        action={
          <IconButton size="small">
            <RefreshIcon />
          </IconButton>
        }
        title="5 Categorias más populares"
      />
      <Divider />
      <CardContent>
        <div className={classes.chartContainer}>
          <Doughnut
            data={data}
            options={options}
          />
        </div>
      </CardContent>
    </Card>
  );
};

ActiveInactiveAdmins.propTypes = {
  className: PropTypes.string
};

export default ActiveInactiveAdmins;