// src/App.js
import React from 'react';
import { Breadcrumbs,Container, Grid, Link, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';

import FilterForm from '../components/FilterForm';
import SearchResult from '../components/SearchResult';
import NavigationBar from '../components/NavigationBar';


const SearchPage = (props) => {

    const location = useLocation();
    const title = location.state?.title || 'Default Title';
    const details = location.state?.details || 'Default Details';

    const selectedTopic = location.state ? location.state.selectedTopic : '';
  
    // Use the selectedTopic to set the initial value for your topic state
    const [topic, setTopic] = React.useState(selectedTopic);
  return (
    <>
      <NavigationBar {...props} />
      <Container sx={{ marginTop: '130px'}}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" href="/">
          Home
        </Link>
        <Typography color="textPrimary">Search</Typography>
      </Breadcrumbs>


      <Typography variant="h4" component="h2" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {details}
      </Typography>
     
 
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <FilterForm />
        </Grid>
        <Grid item xs={12} md={8}>
          <SearchResult />
        </Grid>
      </Grid>
      </Container>
    </>
  );
}

export default SearchPage;
