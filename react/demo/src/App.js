import logo from './logo.svg';
import './App.css';
import Home from './Home';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './locales/en.json';
import zhTranslation from './locales/zh.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation
      },
      zh: {
        translation: zhTranslation
      }
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

function App() {
  return (
    <div className="App">
      <Home></Home>
    </div>
  );
}

export default App;
