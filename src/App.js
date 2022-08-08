import { Route, Routes } from 'react-router-dom';

import createTheme from '@mui/material/styles/createTheme';
import ThemeProvider from '@mui/material/styles/ThemeProvider';

import Container from '@mui/material/Container';
import Home from './pages/home';
import Detail from './pages/detail';

const THEME = createTheme({})

function App() {
  return (
    <ThemeProvider theme={THEME}>
      <Container className="App" maxWidth="md">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="detail/:scheduleId" element={<Detail />} />
        </Routes>

      </Container>
    </ThemeProvider>
  );
}

export default App;
