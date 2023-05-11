import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {I18nextProvider} from "react-i18next";
import i18next from "i18next";
import englishContent from "./Translations/english/common.json";
import spanishContent from "./Translations/español/common.json";
import frenchContent from "./Translations/frances/common.json";
import germanContent from "./Translations/aleman/common.json";
import '@fortawesome/fontawesome-free/css/all.css';


i18next.init({
  interpolation:{ escapeValue:false},
  lng: 'es',
  resources:{
    en:{
      common: englishContent
    },
    es: {
      common: spanishContent
    },
    fr:{
      common: frenchContent
    },
    al: {
      common: germanContent
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <I18nextProvider i18n={i18next}>
    <App />
  </I18nextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
