import { Box, Grid } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
import PropTypes from 'prop-types';
import React from 'react';

selekeList.propTypes = {
  length: PropTypes.number,
};
selekeList.defaultProps = {
  length: 2,
};
function selekeList({ length }) {
  return (
    <Box>
      <Grid container spacing={{ xs: 12, md: 6 }} columns={{ xs: 12, sm: 6, md: 6 }}>
        {Array.from(new Array(length)).map((x, index) => (
          <Grid key={index} item xs={12} sm={6} md={6} lg={6}>
            <Box padding={2}>
              <Skeleton fullwidth="true" />
              <Skeleton variant="rectangular" fullwidth="true" height={400} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default selekeList;
