import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';
import { makeStyles } from '@material-ui/styles';
import palette from '../../theme/palette';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Button
} from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

import { options } from './chart';

const useStyles = makeStyles(() => ({
  root: {},
  chartContainer: {
    height: 420,
    position: 'relative',
    width: "100%"
  },
  actions: {
    justifyContent: 'flex-end'
  }
}));

const PostsByLikes = props => {
  const { className, ...rest } = props;

  let fecha0 = [props.vacantes[0]._id.month + "/"+props.vacantes[0]._id.year]
  let fecha1 = [props.vacantes[1]._id.month + "/"+props.vacantes[1]._id.year]
  let fecha2 = [props.vacantes[2]._id.month + "/"+props.vacantes[2]._id.year]
  let fecha3 = [props.vacantes[3]._id.month + "/"+props.vacantes[3]._id.year]
  let fecha4 = [props.vacantes[4]._id.month + "/"+props.vacantes[4]._id.year]
  let fecha5 = [props.vacantes[5]._id.month + "/"+props.vacantes[5]._id.year]
  
  let data = {
    labels: [fecha0 ,fecha1, fecha2,fecha3, fecha4,fecha5],
    datasets: [
      {
        label: 'Número de vacantes',
        borderColor: palette.primary.main,
        data: [props.vacantes[0].suma, props.vacantes[1].suma, props.vacantes[2].suma
        , props.vacantes[3].suma, props.vacantes[4].suma, props.vacantes[5].suma]
      }
    ]
  };


  const classes = useStyles();

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
        action={
          <Button
            size="small"
            variant="text"
          >
            Últimos 6 meses<ArrowDropDownIcon />
          </Button>
        }
        title="Número de vacantes mensuales"
      />
      <Divider />
      <CardContent>
        <div className={classes.chartContainer}>
          <Line
            data={data}
            options={options}
          />
        </div>
      </CardContent>
      <Divider />
      <CardActions className={classes.actions}>
        <Button
          color="primary"
          size="small"
          variant="text"
        >
          Vista <ArrowRightIcon />
        </Button>
      </CardActions>
    </Card>
  );
};

PostsByLikes.propTypes = {
  className: PropTypes.string
};

export default PostsByLikes;