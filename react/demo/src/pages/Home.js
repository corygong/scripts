import React from 'react';

import './Home.css';
import './fonts.css';
import NavigationBar from '../components/NavigationBar';
import { useTranslation } from 'react-i18next';
import {Button} from '@mui/material';

import { useNavigate } from 'react-router-dom';
import { StyledTitleEn, StyledTitleZh, StyledDetailEn, StyledDetailZh } from '../StyledElements';




const Home = (props) => {

    const {t, i18n } = useTranslation();
    const currentLanguage = i18n.language;

    const StyledTitle = currentLanguage === 'en' ? StyledTitleEn : StyledTitleZh;
    const StyledDetail = currentLanguage === 'en' ? StyledDetailEn : StyledDetailZh;

    const navigate = useNavigate();

    // Update the handleButtonClick function to accept a topic
    const handleButtonClick = (topic) => {
      navigate('/search', { selectedTopic: topic });
    };
  


  return (
    <>
        <NavigationBar {...props} />
    <div className="main-content">
        


      <div className="concept concept-one">

        {/* <h1>Desert</h1> */}
        <StyledTitle className='detail-one-title'>{t('home.page1Title')}</StyledTitle>
        <StyledDetail className='detail-one-detail'>{t('home.page1Detail')}</StyledDetail>
        <Button className='detail-one-btn' variant="outlined" onClick={() => handleButtonClick(t('home.page1Title'), t('home.page1Detail'))}>{t('home.page1Button')}</Button>

      </div>

      <div className="concept concept-two">

        <StyledTitle className='detail-two-title'>{t('home.page2Title')}</StyledTitle>
        <StyledDetail className='detail-two-detail'>{t('home.page2Detail')}</StyledDetail>
        <Button className='detail-two-btn' variant="outlined">{t('home.moreDetails')}</Button>


      </div>

      <div className="concept concept-three">

        
        <StyledTitle className='detail-three-title'>{t('home.page3Title')}</StyledTitle>
        <StyledDetail className='detail-three-detail'>{t('home.page3Detail')}</StyledDetail>
        
        <div className='detail-three-container'>
            <span className='detail-three-text'>{t('home.page3Subdetail1')}</span>

            <span className='detail-three-text'>{t('home.page3Subdetail2')}</span>

            <span className='detail-three-text'>{t('home.page3Subdetail3')}</span>
        </div>
      </div>

      <div className="concept concept-four">

        <StyledTitle className='detail-four-title'>{t('home.page4Title')}</StyledTitle>
        <StyledDetail className='detail-four-detail'>{t('home.page4Detail')}</StyledDetail>
        <Button className='detail-four-btn' variant="outlined">{t('home.moreDetails')}</Button>


      </div>

      <div className="concept concept-five">
        <StyledTitle className='detail-five-title'>{t('home.page5Title')}</StyledTitle>
        <StyledDetail className='detail-five-detail'>{t('home.page5Detail')}</StyledDetail>

      </div>

      <div className="concept concept-six">
        <StyledTitle className='detail-six-title'>{t('home.page6Title')}</StyledTitle>
        <StyledDetail className='detail-six-detail'>{t('home.page6Detail')}</StyledDetail>
        <Button className='detail-six-btn' variant="outlined">{t('home.moreDetails')}</Button>
      </div>

      <div className="concept concept-seven">
        <StyledTitle className='detail-seven-title'>{t('home.page7Title')}</StyledTitle>
        <StyledDetail className='detail-seven-detail'>{t('home.page7Detail')}</StyledDetail>
        <Button className='detail-seven-btn' variant="outlined">{t('home.moreDetails')}</Button>

      </div>

      <div className="concept concept-eight">
        <StyledTitle className='detail-eight-title'>{t('home.page8Title')}</StyledTitle>
        <StyledDetail className='detail-eight-detail'>{t('home.page8Detail')}</StyledDetail>
        <Button className='detail-eight-btn' variant="outlined">{t('home.moreDetails')}</Button>
      </div>

      <div className="concept concept-nine">
        <StyledTitle className='detail-nine-title'>{t('home.page9Title')}</StyledTitle>
        <StyledDetail className='detail-nine-detail'>{t('home.page9Detail')}</StyledDetail>
        <Button className='detail-nine-btn' variant="outlined">{t('home.moreDetails')}</Button>
      </div>

      <div className="concept concept-ten">
        <StyledTitle className='detail-ten-title'>{t('home.page10Title')}</StyledTitle>
        <StyledDetail className='detail-ten-detail'>{t('home.page10Detail')}</StyledDetail>
        <Button className='detail-ten-btn'  sx={{
            ':hover': {
            bgcolor: 'rgb:(188,156,101)', // theme.palette.primary.main
            color: 'white',
            },
        }} variant="outlined">{t('home.moreDetails')}</Button>
      </div>
      
      {/* <div className="concept concept-eleven">
        <StyledTitle className='detail-eleven-title'>{t('home.page11Title')}</StyledTitle>
        <StyledDetail className='detail-eleven-detail'>{t('home.page11Detail')}</StyledDetail>
        <Button className='detail-eleven-btn' variant="outlined">{t('home.moreDetails')}</Button>
      </div> */}


    </div>

    </>

  );

}



export default Home;