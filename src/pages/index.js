import React from 'react'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import { useMediaQuery } from 'react-responsive'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'

import ProfesionalItem from '../components/ProfesionalItem'
import CardSection from '../components/CardSection'
import vector from '../assets/img/header_vector.png'
import '../styles/index.css';

const App = () => {
  const isMobile = useMediaQuery( {query:'(max-width: 960px)'} )
  const isDesktop = useMediaQuery( {query:'(min-width: 960px)'} )

  const Header = () => {
    return (
      <Box className="wrapper-header">
        <Box className="wrapper">
          {isDesktop && 
            <Box className="navbar">
              <h6>Profesional Background</h6>
              <h6>Projects</h6>
              <h6>Contact</h6>
          </Box>
          }
          <Box>
            <Grid container spacing={2}>
              <Grid item xs={12} md={8}>
                <h2>Ing. Jean Vega Díaz</h2>
                <h5>Software Engineer | Front-end Developer</h5>
                <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Box className="headerButtonBox">
                  <button className="secondaryButton">GITHUB</button> 
                  <button className="secondaryButton">LINKEDIN</button> 
                </Box>
              </Grid>
              {isDesktop && 
                <Grid item xs={12} md={4}>
                  <Box className="vectorBox">
                    <img src={vector} /> 
                  </Box>
                </Grid>
              }
            </Grid>
          </Box>
        </Box>
      </Box>
    )
  }

  const ProfesionalBackground = () => {
    return (
      <Box className="wrapper-profesional">
        <Box className="wrapper">
          <h4>Profesional Background</h4>
          <Box className="profesionalBackgroundBox">
            <Grid container spacing={4}>
              <Grid item xs={12} md={4}>
                <Box className="porfesionalSubtituleBox">
                  <h5>Academic</h5>
                  <ArrowForwardIcon fontSize={isMobile? 'small': 'default'}/>
                </Box>
                <ProfesionalItem 
                  title="Computer Engineering"
                  location="Instituto Tecnológico de Costa Rica"
                  year="2021"
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <Box className="porfesionalSubtituleBox">
                  <h5>Roles & Positions</h5>
                  <ArrowForwardIcon fontSize={isMobile? 'small': 'default'}/>
                </Box>
                <ProfesionalItem 
                  title="QA Automation Developer"
                  location="Omni Costa Rica"
                  year="Since June 2021"
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <Box className="porfesionalSubtituleBox">
                  <h5>Certifications</h5>
                  <ArrowForwardIcon fontSize={isMobile? 'small': 'default'}/>
                </Box>
                <ProfesionalItem 
                  title="Scrum Fundamentals"
                  location="SCRUMstudy"
                  year="2019"
                />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    )
  }

  const OpenSourceProjects = () => {
    return(
      <Box className="wrapper-projects">
        <Box className="wrapper">
          <h4>Open Source Projects</h4>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <CardSection />
        </Box>
      </Box>
    )
  }

  return (
    <Box>
      <Header />
      <ProfesionalBackground />
      <OpenSourceProjects />
    </Box>
  );
}

export default App;
