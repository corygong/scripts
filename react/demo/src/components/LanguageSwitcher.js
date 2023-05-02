import React from "react";
import { useTranslation } from "react-i18next";

import { Box, Button, Menu, MenuItem,IconButton  } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';

const LanguageSwitcher = (props) => {

    // const { changeLang, i18n } = props;



  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);


  const { i18n } = useTranslation();


  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <IconButton
                size="large"
                aria-label="lang-picker"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenuClick}
                color="inherit"
              >
                <LanguageIcon />
    </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={() => handleLanguageChange('zh')}>中文</MenuItem>
        <MenuItem onClick={() => handleLanguageChange('en')}>English</MenuItem>
      </Menu>
    </Box>
  );
};

export default LanguageSwitcher;