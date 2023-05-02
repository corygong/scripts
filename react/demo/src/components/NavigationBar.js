import React from "react";
import styles from './NavigationBar.module.css';
import { useTranslation } from 'react-i18next';
import { AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Box,
  Divider,
  List,
  ListItem, 
  ListItemButton,
  ListItemText,
  Drawer,
  IconButton
 } from '@mui/material';
import LanguageSwitcher from "./LanguageSwitcher";
import logo_en from '../assets/logo_en.png';
import logo_zh from '../assets/logo_zh.png';



const NavigationBar = (props) => {

  const {window} = props;

  const drawerWidth = 240;

  const { t, i18n } = useTranslation();

  const navItems = [
    { id: "home", label: t("navItems.home") },
    { id: "about", label: t("navItems.about") },
    { id: "contact", label: t("navItems.contact") },
  ];

  // const [currLang, setCurrLang] = React.useState(i18n.language);

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>


        {/* {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))} */}
        {navItems.map((item) => (
          <Button key={item.id} sx={{ color: "#fff" }}>
            {item.label}
          </Button>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;


  // const changeLang = (val) => {
  //   setCurrLang(val);
  // }
  const currentLanguage = i18n.language;
  console.log(currentLanguage);


  const logoSrc = currentLanguage === "en" ? logo_en : logo_zh;

  return (
    <Box sx={{ display: 'flex' }} className={styles.parentBox}>
      <AppBar position="fixed" color="transparent" elevation={0} component="nav">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="logo">
            <img src={logoSrc} alt="Logo" style={{ width: '177px', height: '94px' }} />
          </IconButton>
      
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          {navItems.map((item) => (
          <Button key={item.id} sx={{ color: "#000" }}>
            {item.label}
          </Button>
        ))}
          </Box>
          <LanguageSwitcher {...props}/>
        </Toolbar>
      </AppBar>
      {/* <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        
      </Box> */}
    </Box>
  );
}

export default NavigationBar;