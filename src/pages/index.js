import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import '../styles/index.css';

const App = () => {

  const Header = () => {
    return (
      <Box className="wrapper-header">
        <Box className="header">
          <Box className="navbar">

          </Box>
          <Box>
            <Grid container >
              <Grid item xs={12} md={6}>
                <h2>Ing. Jean Vega Díaz</h2>
                <h5>Software Engineer | Front-end Developer</h5>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Box className="headerButtonBox">
                  <button className="secondaryButton">GITHUB</button> 
                  <button className="secondaryButton">LINKEDIN</button> 
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>

              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    )
  }

  return (
    <Box>
      <Header />
    </Box>
  );
}

export default App;
