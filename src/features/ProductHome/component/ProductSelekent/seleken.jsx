import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Box } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
selekeList.propTypes = {
  length: PropTypes.number,
};
selekeList.defaultProps = {
  length: 15,
};
function selekeList({ length }) {
  return (
    <Box>
      <Grid container spacing={0}>
        {Array.from(new Array(length)).map((x, index) => (
          <Grid key={index} item xs={12} sm={6} md={3} lg={3}>
            <Box padding={1}>
              <Skeleton variant="rectangular" width={210} height={118} />
              <Box sx={{ pt: 0.5 }}>
                {/* <Skeleton />
                <Skeleton width="60%" /> */}
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default selekeList;
