// src/components/SearchResult.js
import React from 'react';
import {
  TextField,
  InputAdornment,
  IconButton,
  FormControl,
  InputLabel,
  Select,
  Divider,
  MenuItem,
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
} from '@mui/material';
import { Search } from '@mui/icons-material';

const SearchResult = () => {
  const [search, setSearch] = React.useState('');
  const [sortBy, setSortBy] = React.useState('');

  // Handle change functions for search input and sort by select
  const handleChange = (event) => {
    setSortBy(event.target.value);
  };

  // Sample data for results
  const results = [
    {
      id: 1,
      image: 'https://via.placeholder.com/150',
      title: 'Result Title',
      tags: ['Tag1', 'Tag2'],
      details: 'Result details...',
      publishTime: '2023-05-08',
    },
    // ...
  ];

  return (
    <div>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <TextField
          label="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <Search />
                </IconButton>
              </InputAdornment>
            ),
            
          }}
          sx={{ flexGrow: 1, mr: 1 }}
        />
        <FormControl variant="standard" sx={{ minWidth: '150px' }}>
          <InputLabel id="sort-by-label">Sort by</InputLabel>
          <Select
            labelId="sort-by-label"
            id="sort-by-select"
            value={sortBy}
            onChange={handleChange}
            label="Sort by"
          >
            <MenuItem value="relevance">Relevance</MenuItem>
            <MenuItem value="date">Date</MenuItem>
          </Select>
        </FormControl>
      </Box>
      {/* Display selected lists */}
      {results.map((result) => (
        <Card key={result.id} sx={{ display: 'flex', mb: 2 }}>
          <CardMedia
            component="img"
            sx={{ width: 150 }}
            image={result.image}
            alt={result.title}
          />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography variant="h6" component="div" textAlign="left">
              {result.title}
            </Typography>
            <Box display="flex" flexWrap="wrap" gap={0.5} my={1}>
              {result.tags.map((tag, index) => (
                <Chip key={index} label={tag} variant="outlined" color="primary" />
              ))}
            </Box>
            <Typography variant="body1" color="text.secondary" textAlign="left">
              {result.details}
            </Typography>
            <Divider sx={{ my: 1 }} />
            <Typography variant="caption" display="block" gutterBottom>
              {result.publishTime}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default SearchResult;
