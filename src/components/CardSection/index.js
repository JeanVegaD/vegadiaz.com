import React from 'react';
import Box from '@material-ui/core/Box';

import '../../styles/cardSection.css';

const CardSection = ({ }) => {


  const Card = () => {
    return(
      <Box className="card-root">
        <Box className="card-gradiant">
          <Box className="card-content">
            <Box>
              <h5>Lifebank</h5>
              <p className="overline">by EOS Costa Rica</p>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            </Box>
          </Box>
        </Box>
      </Box>
    )
  }

  return (
    <Box className="card-section">
      <Card />
      <Card />
      <Card />
      <Card />
    </Box>
  );
}

export default CardSection;
