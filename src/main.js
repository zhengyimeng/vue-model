import { createApp } from 'vue'
import App from './App.vue'

// style
import 'normalize.css'
import '@/assets/style/common.styl'

// router
import router from '@/router'
import '@/router/permission'

// component
import Icon from '@/components/Icon'

const app = createApp(App)
app.use(router).mount('#app')

// common components
app.component('Icon', Icon)

export default app
