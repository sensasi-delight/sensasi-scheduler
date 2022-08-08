import Grid from "@mui/material/Grid"
import TextField  from "@mui/material/TextField"

import ScheduleCard from "../../components/ScheduleCard"
import NewScheduleCard from './components/NewScheduleCard'



function index(props) {
  return (
    <>
      <TextField fullWidth label="Cari" size='small' />

      <Grid container spacing={2} mt={0}>
        <Grid item xs={6} sm={4} >
          <NewScheduleCard/>
        </Grid>
        <Grid item xs={6} sm={4}>
          <ScheduleCard />
        </Grid>
      </Grid>

    </>
  );
}

const Home = index

export default Home;