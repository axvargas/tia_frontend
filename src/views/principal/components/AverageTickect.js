import React from 'react';
import {
    Avatar,
    Card,
    CardContent,
    Grid,
    Typography,
    Box
} from '@material-ui/core';
import MoneyIcon from '@material-ui/icons/Money';

const AverageTicket = ({ avg_tickets }) => (
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
                        AVG. TICKETS
                    </Typography>
                    <Box display="flex" justifyContent="flex-start" alignItems="center" bgcolor="background.paper">
                        <Typography
                            color="textPrimary"
                            variant="h6"
                        >
                            {'$ '}
                        </Typography>
                        <Box fontWeight="fontWeightBold" width="100%" fontSize="h4.fontSize">
                            {avg_tickets ? `${Number(avg_tickets).toFixed(2)}` : '...'}
                        </Box>
                    </Box>

                </Grid>
                <Grid item>
                    <Avatar>
                        <MoneyIcon />
                    </Avatar>
                </Grid>
            </Grid>
        </CardContent>
    </Card>
);

export default AverageTicket;