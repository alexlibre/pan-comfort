import '../scss/style.scss';

import smoothScrollToAnchor from './utils/smoothScrollToAnchor';
import gallery from './components/gallery';
import makeMap from './components/map';
import initModals from './components/modal';
import initInputMasks from './utils/masks';
import initDateTimepicker from './components/calendar';
import customSelect from 'custom-select';
import initPhoto from './components/photogallery';

const init = () => {
  smoothScrollToAnchor();
  gallery();
  initModals();
  initInputMasks();
  // customSelect('select');
  makeMap();
  initDateTimepicker();
  initPhoto();
}

document.addEventListener('DOMContentLoaded', init);
// import $ from 'jquery';
