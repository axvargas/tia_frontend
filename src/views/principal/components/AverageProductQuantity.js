import React from 'react'
import {
  Avatar,
  Card,
  CardContent,
  Grid,
  Typography,
  Box
} from '@material-ui/core';
import AssignmentIcon from '@material-ui/icons/Assignment';
const AverageProductQuantity = ({ avg_products_qty }) => (
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
          <Box display="flex" justifyContent="flex-start" alignItems="center" bgcolor="background.paper">
            <Box fontWeight="fontWeightBold" width="100%" fontSize="h4.fontSize" mr={-7}>
              {avg_products_qty ? `${Number(avg_products_qty).toFixed(2)}` : '...'}
            </Box>
            <Typography
              color="textPrimary"
              variant="h6"
            >
              units
            </Typography>
          </Box>

        </Grid>
        <Grid item>
          <Avatar>
            <AssignmentIcon />
          </Avatar>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);

export default AverageProductQuantity;
