import { forwardRef } from 'react';

import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Slide from '@mui/material/Slide';

import CloseIcon from '@mui/icons-material/Close';
import { Container } from '@mui/system';
import ScheduleFormStepper from './ScheduleFormStepper';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function ScheduleFormDialog({ open, handleClose }) {
  return (
    <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
      <Container maxWidth="md">

        <AppBar sx={{ position: 'relative' }} color="transparent" elevation={0}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close" children={<CloseIcon />} />
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Buat Jadwal Baru
            </Typography>
            {/* <Button autoFocus color="inherit" onClick={handleClose}>
              Simpan
            </Button> */}
          </Toolbar>
        </AppBar>

        <ScheduleFormStepper />
      </Container>

    </Dialog>
  );
}

export default ScheduleFormDialog;