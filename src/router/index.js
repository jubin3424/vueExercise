import Vue from 'vue'
import Router from 'vue-router'
import Main from '../components/Main'
import WhatsNew from '../components/WhatsNew'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'main',
            component: Main
        },
        {
            path: '/whats-new',
            name: 'WhatsNew',
            component: WhatsNew
        }
    ]
})