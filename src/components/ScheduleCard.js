

import { Button, Card, CardActions, CardContent, Tab, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

function ScheduleCard(props) {
  return (
    <Card>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Ganjil 2020/2021
        </Typography>
        <Typography variant="h5" component="div">
          Reguler
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => window.location = '/detail/12'}>Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default ScheduleCard;