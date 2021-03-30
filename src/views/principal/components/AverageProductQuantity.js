import React from 'react'
import {
  Avatar,
  Card,
  CardContent,
  Grid,
  Typography
} from '@material-ui/core';
import InsertChartIcon from '@material-ui/icons/InsertChartOutlined';

const AverageProductQuantity = ({avg_products_qty}) => (
  <Card
    sx={{ height: '100%' }}
  >
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="subtitle1"
          >
            AVG. PRODUCT QTY.
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
            {avg_products_qty ?`${Number(avg_products_qty).toFixed(2)} units`: '... units'}
          </Typography>
        </Grid>
        <Grid item>
          <Avatar>
            <InsertChartIcon />
          </Avatar>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);

export default AverageProductQuantity;
