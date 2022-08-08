import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';

const TAHUN_PROPS = { inputMode: 'numeric', min: '0', pattern: '[0-9]*' }

function ScheduleForm(props) {
  return (
    <Box component="form" autoComplete="off">
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <TextField margin='dense' size='small' label='Jenis Semester' fullWidth select >
            {['Ganjil', 'Genap'].map((val) => (
              <MenuItem key={val} value={val}>
                {val}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField type="number" margin='dense' size='small' label='Tahun' fullWidth inputProps={TAHUN_PROPS} />
        </Grid>
      </Grid>
      <TextField margin='dense' size='small' label='Nama' fullWidth />
    </Box>
  );
}

export default ScheduleForm;