import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ background:
      "linear-gradient(45deg, #c7edfe 10%, #c7f5fe 40%, #fcc8f8 0, #fcc8f8 60%, #eab4f8 0, #eab4f8 65%, #f1d580 0, #f3f798 90%)",
    color: "#000", py: 1,  textAlign: 'center'}}>
      <Typography variant="body2" sx={{fontSize: '16px', fontWeight: 500}}>
        © 2024 Delhi Transport Corporation. All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
