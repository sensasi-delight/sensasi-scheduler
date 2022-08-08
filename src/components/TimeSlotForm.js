import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, IconButton, InputAdornment, Stack, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import { LocalizationProvider, MobileTimePicker } from '@mui/x-date-pickers';
import { useState } from 'react';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import AddIcon from '@mui/icons-material/Add';

const TAHUN_PROPS = { inputMode: 'numeric', min: '0', pattern: '[0-9]*' }


function TimeSlotForm(props) {
  const [value, setValue] = useState(new Date('2018-01-01T00:00:00.000Z'));
  // const [value, setValue] = useState('');
  return (
    <Box component="form" autoComplete="off">

      <Typography variant='h4' gutterBottom>
        Pengaturan Jam/Waktu Jadwal
      </Typography>

      <Typography variant='body' gutterBottom>
        Silahkan menonton video ini untuk panduan pengaturan jam.
      </Typography>

      <LocalizationProvider dateAdapter={AdapterMoment} >
        <Grid container spacing={1} mt={4} alignItems='center'>
          <Grid item xs={4}>
            <TextField margin='dense' size='small' helperText="jumlah menit pertemuan per SKS per minggu."
              InputProps={{
                endAdornment: <InputAdornment position="end">menit / SKS / minggu</InputAdornment>,
              }}
            />

          </Grid>
          <Grid item xs={8}>
            <Button>Pratinjau</Button>
          </Grid>
          {['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'].map((val) => (
            <>
              <Grid item xs={2}>
                <FormGroup>
                  <FormControlLabel control={<Checkbox defaultChecked />} label={val} />
                </FormGroup>
              </Grid>

              <Grid item xs={2}>
                <TextField margin='dense' size='small' label='Jumlah SKS' fullWidth />
              </Grid>

              <Grid item xs={2}>
                <MobileTimePicker
                  label="Mulai Pukul"
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} margin='dense' size='small' />}
                />
              </Grid>

              <Grid item xs={2}>
                <MobileTimePicker
                  disabled
                  label="Selesai Pukul"
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} margin='dense' size='small' />}
                />
              </Grid>

              <Grid item xs={4}>
                <IconButton>
                  <AddIcon />
                </IconButton>
              </Grid>
            </>

          ))}
        </Grid>
      </LocalizationProvider>
    </Box>
  );
}

export default TimeSlotForm;