import React from 'react'
import {
  Avatar,
  Card,
  CardContent,
  Grid,
  Typography,
  Box
} from '@material-ui/core';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

const TotalProfit = (props) => (
  <Card {...props}>
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
            TOTAL PROFIT
          </Typography>
          <Box display="flex" justifyContent="flex-start" alignItems="center" bgcolor="background.paper">
            <Typography
              color="textPrimary"
              variant="h6"
            >
              {'$ '}
            </Typography>
            <Box fontWeight="fontWeightBold" width="100%" fontSize="h4.fontSize">
              25,260.56
            </Box>
          </Box>
        </Grid>
        <Grid item>
          <Avatar>
            <AttachMoneyIcon />
          </Avatar>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);

export default TotalProfit;
