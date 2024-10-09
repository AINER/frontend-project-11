/* eslint-disable no-unused-vars */

// Packages
import './styles.scss';
import 'bootstrap';

// Images
import bongoСatImage from './assets/bongo_cat_typing.gif';
import iconImage from './assets/icon.png';

import initI18next from './app/localization/init_localization';
import languageSwitch from './app/localization/language_switcher';
import formApp from './app/main';

initI18next();
languageSwitch();

formApp();
