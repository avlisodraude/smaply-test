import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCoffee, faCoins, faComment, faToolbox, faCog, faSave, faPlusSquare, faFile,
  faCopy, faLongArrowAltRight, faQuestionCircle, faEllipsisH, faTimes,
  faPowerOff, faUser, faSitemap, faEdit, faBullseye, faProjectDiagram, faShare,
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';
import { faJs, faVuejs } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import CKEditor from 'ckeditor4-vue';
import App from './App.vue';

Vue.use(CKEditor);

library.add(faCoffee, faJs, faVuejs, faCoins, faComment,
  faToolbox, faCog, faSave, faPlusSquare, faFile, faCopy, faInfoCircle,
  faLongArrowAltRight, faQuestionCircle, faEllipsisH, faTimes,
  faUser, faPowerOff, faSitemap, faEdit, faBullseye, faProjectDiagram, faShare);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
