import { useState } from 'react';

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import AddIcon from "@mui/icons-material/Add";
import ScheduleFormDialog from '../../../components/ScheduleFormDialog';


const SX_FULL_HEIGHT = { height: '100%' }


function NewScheduleCard(props) {
  const [isOpenForm, setIsOpenForm] = useState(false);

  const handleClickOpen = () => {
    setIsOpenForm(true);
  }

  const handleClose = () => {
    setIsOpenForm(false);
  }
  
  return (
    <Card sx={SX_FULL_HEIGHT}>
      <Button fullWidth sx={SX_FULL_HEIGHT} onClick={handleClickOpen}>
        <CardContent>
          <AddIcon fontSize="large"/>
          <Typography variant='button' component='p'>
            Buat Jadwal
          </Typography>
        </CardContent>
      </Button>
      <ScheduleFormDialog open={isOpenForm} handleClose={handleClose} />
    </Card>
  );
}

export default NewScheduleCard;