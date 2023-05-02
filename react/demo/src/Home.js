import React from 'react';

import './Home.css';
import NavigationBar from './components/NavigationBar';
import { useTranslation } from 'react-i18next';
import {Button} from '@mui/material';

import img_1_en from './assets/coverPage_dynamicText_en.png';
import img_1_zh from './assets/coverPage_dynamicText_zh.png';
import img_2_en from './assets/coverPage_art_dynamicText_en.png';
import img_2_zh from './assets/coverPage_art_dynamicText_zh.png';
import img_3_en from './assets/coverPage_essentialLife_dynamicText_en.png';
import img_3_zh from './assets/coverPage_essentialLife_dynamicText_zh.png';
import img_4_en from './assets/coverPage_ir_dynamicText_en.png';
import img_4_zh from './assets/coverPage_ir_dynamicText_zh.png';

const Home = (props) => {

    const {t, i18n } = useTranslation();
    const currentLanguage = i18n.language;


    const img1Src = currentLanguage === "en" ? img_1_en : img_1_zh;
    const img2Src = currentLanguage === "en" ? img_2_en : img_2_zh;
    const img3Src = currentLanguage === "en" ? img_3_en : img_3_zh;
    const img4Src = currentLanguage === "en" ? img_4_en : img_4_zh;

  return (
    <>
        <NavigationBar {...props} />
    <div className="main-content">
        


      <div className="concept concept-one">

        <div className="hover hover-1"></div>

        <div className="hover hover-2"></div>

        <div className="hover hover-3"></div>

        <div className="hover hover-4"></div>

        <div className="hover hover-5"></div>

        <div className="hover hover-6"></div>

        <div className="hover hover-7"></div>

        <div className="hover hover-8"></div>

        <div className="hover hover-9"></div>

        {/* <h1>Desert</h1> */}
        <img src={img1Src} alt="main" className='detail-one-img' />
        <p className='detail-one-p'>{t('home.page1Detail')}</p>
        <Button className='detail-one-btn' variant="outlined">{t('home.page1Button')}</Button>

      </div>

      <div className="concept concept-two">

        <img src={img2Src} alt="art" className='detail-two-img' />
        <p className='detail-two-p'>{t('home.page2Detail')}</p>
        <Button className='detail-two-btn' variant="outlined">{t('home.moreDetails')}</Button>


      </div>

      <div className="concept concept-three">

        
        <img src={img3Src} alt="art" className='detail-three-img' />
        <p className='detail-three-p'>{t('home.page3Detail')}</p>
        
        <div className='detail-three-container'>
            <span className='detail-three-text'>{t('home.page3Block1')}</span>

            <span className='detail-three-text'>{t('home.page3Block2')}</span>

            <span className='detail-three-text'>{t('home.page3Block3')}</span>
        </div>
      </div>

      <div className="concept concept-four">

        <img src={img4Src} alt="ir" className='detail-four-img' />
        <p className='detail-four-p'>{t('home.page4Detail')}</p>
        <Button className='detail-four-btn' variant="outlined">{t('home.moreDetails')}</Button>


      </div>

      <div className="concept concept-five">

        <h1 className="word">

          <span className="char">M</span>

          <span className="char">O</span>

          <span className="char">U</span>

          <span className="char">N</span>

          <span className="char">T</span>

          <span className="char">A</span>

          <span className="char">I</span>

          <span className="char">N</span>

          <span className="char">S</span>

        </h1>

      </div>

      <div className="concept concept-six">

        <h1 className="word">

          <span className="char">O</span>

          <span className="char">C</span>

          <span className="char">E</span>

          <span className="char">A</span>

          <span className="char">N</span>

        </h1>

      </div>

      <div className="concept concept-seven">

        <h1>fries</h1>

      </div>

      <div className="concept concept-eight">

        <h1 className="word">

          <div className="char" data-content="F">F</div>

          <div className="char" data-content="A">A</div>

          <div className="char" data-content="L">L</div>

          <div className="char" data-content="L">L</div>

          <div className="char" data-content="S">S</div>

        </h1>

      </div>


    </div>

    </>

  );

}



export default Home;