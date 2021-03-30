import React from 'react'
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  LinearProgress,
} from '@material-ui/core';
import InsertChartIcon from '@material-ui/icons/InsertChartOutlined';

const AverageMargin = ({ avg_margin }) => (
  <Card >
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
            AVG. MARGIN
          </Typography>
          <Box display="flex" justifyContent="flex-start" alignItems="center" bgcolor="background.paper">
            <Box fontWeight="fontWeightBold" width="100%" fontSize="h4.fontSize">
              {avg_margin ? `${Number(avg_margin * 100).toFixed(2)}` : '...'}
            </Box>
            <Typography
              color="textPrimary"
              variant="h6"
            >
              %
          </Typography>
          </Box>

        </Grid>
        <Grid item>
          <Avatar>
            <InsertChartIcon />
          </Avatar>
        </Grid>
      </Grid>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          pt: 2
        }}
      />
      <Box sx={{ pt: 3 }}>
        <LinearProgress
          value={avg_margin * 100}
          variant="determinate"
        />
      </Box>
    </CardContent>
  </Card>
);

export default AverageMargin;
