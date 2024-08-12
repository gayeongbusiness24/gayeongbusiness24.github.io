import { createApp } from 'vue'
import App from './App.vue'
import AOS from 'aos';
// css
import 'aos/dist/aos.css';
import './assets/css/common/reset.css';
import './assets/css/common/common.css';
import './assets/css/common/layout.css';

const app = createApp(App)

// imagePath
app.config.globalProperties.$globalImagePath = './assets/img/';

app.mount('#app')
AOS.init();
