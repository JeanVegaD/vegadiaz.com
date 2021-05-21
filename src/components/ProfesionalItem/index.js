import React from 'react';
import Box from '@material-ui/core/Box';

import '../../styles/profesionalItem.css';

const ProfesionalItem = ({ title, location, year }) => {

  return (
    <Box>
        <h6>{title}</h6>
        <h6 className="subtitle1">{location}</h6>
        <h6 className="subtitle1">{year}</h6>
    </Box>
  );
}

export default ProfesionalItem;
