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
import PeopleIcon from '@material-ui/icons/PeopleOutlined';

const AverageMargin = ({avg_margin}) => (
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
          <Typography
            color="textPrimary"
            variant="h4"
          >
            {avg_margin ? `${Number(avg_margin*100).toFixed(2)}%` : '...%'}
          </Typography>
        </Grid>
        <Grid item>
          <Avatar>
            <PeopleIcon />
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
          value={avg_margin*100}
          variant="determinate"
        />
      </Box>
    </CardContent>
  </Card>
);

export default AverageMargin;
