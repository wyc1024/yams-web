import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import installElementPlus from './plugins/element-plus'
import installVXETable from './plugins/vxe-table'

const app = createApp(App)
installElementPlus(app)
installVXETable(app)

app
    .use(router)
    .mount('#app')