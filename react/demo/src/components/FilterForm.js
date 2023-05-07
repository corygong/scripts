// src/components/FilterForm.js
import React from 'react';
import { Box, Button, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';

const FilterForm = () => {
  const [contentType, setContentType] = React.useState([]);
  const [topic, setTopic] = React.useState([]);
  const [region, setRegion] = React.useState([]);
  const [country, setCountry] = React.useState([]);
  const [timePeriod, setTimePeriod] = React.useState([]);

  const resetFilters = () => {
    setContentType([]);
    setTopic([]);
    setRegion([]);
    setCountry([]);
    setTimePeriod([]);
  };

  const handleSubmit = () => {
    // handle form submission
  }

  return (
    <Box>
        <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h6">Filter</Typography>
            <Button variant="outlined" color="primary" onClick={resetFilters}>
              Reset Filters
            </Button>
        </Box>
      <FormControl fullWidth variant="outlined" margin="normal">
        <InputLabel>Content Type</InputLabel>
        <Select
            multiple
          value={contentType}
          onChange={(e) => setContentType(e.target.value)}
          label="Content Type"
        >
          {/* Add MenuItem components for each content type */}
          <MenuItem value="type1">Type 1</MenuItem>
          <MenuItem value="type2">Type 2</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth variant="outlined" margin="normal">
        <InputLabel>Topic</InputLabel>
        <Select
         multiple
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          label="Topic"
        >
          {/* Add MenuItem components for each topic */}
          <MenuItem value="topic1">Topic 1</MenuItem>
          <MenuItem value="topic2">Topic 2</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth variant="outlined" margin="normal">
        <InputLabel>Region</InputLabel>
        <Select
         multiple
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          label="Region"
        >
          {/* Add MenuItem components for each region */}
          <MenuItem value="region1">Region 1</MenuItem>
          <MenuItem value="region2">Region 2</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth variant="outlined" margin="normal">
        <InputLabel>Country</InputLabel>
        <Select
         multiple
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          label="Country"
        >
          {/* Add MenuItem components for each country */}
          <MenuItem value="country1">Country 1</MenuItem>
          <MenuItem value="country2">Country 2</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth variant="outlined" margin="normal">
        <InputLabel>Time Period</InputLabel>
        <Select
         multiple
          value={timePeriod}
          onChange={(e) => setTimePeriod(e.target.value)}
          label="Time Period"
        >
          {/* Add MenuItem components for each time period */}
          <MenuItem value="period1">Period 1</MenuItem>
          <MenuItem value="period2">Period 2</MenuItem>
        </Select>
      </FormControl>

      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleSubmit}
        style={{ marginTop: '1rem' }}
      >
        Submit
      </Button>
    </Box>
  );
};

export default FilterForm;
