import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';
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

import {options } from './chart';

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

const PostsByDate = props => {
  const { className, ...rest } = props;

  let fecha0 = [props.anuncios[0]._id.month + "/"+props.anuncios[0]._id.year]
  let fecha1 = [props.anuncios[1]._id.month + "/"+props.anuncios[1]._id.year]
  let fecha2 = [props.anuncios[2]._id.month + "/"+props.anuncios[2]._id.year]
  let fecha3 = [props.anuncios[3]._id.month + "/"+props.anuncios[3]._id.year]
  let fecha4 = [props.anuncios[4]._id.month + "/"+props.anuncios[4]._id.year]
  let fecha5 = [props.anuncios[5]._id.month + "/"+props.anuncios[5]._id.year]

  const classes = useStyles();

  let data = {
    labels: [fecha0 ,fecha1, fecha2,fecha3, fecha4,fecha5],
    datasets: [
      {
        label: 'Cantidad de anuncios',
        backgroundColor: palette.primary.main,
        data: [props.anuncios[0].cantidad, props.anuncios[1].cantidad, props.anuncios[2].cantidad
        , props.anuncios[3].cantidad, props.anuncios[4].cantidad, props.anuncios[5].cantidad]
      }
    ]
  };


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
        title="Número de anuncios publicados"
      />
      <Divider />
      <CardContent>
        <div className={classes.chartContainer}>
          <Bar
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

PostsByDate.propTypes = {
  className: PropTypes.string
};

export default PostsByDate;