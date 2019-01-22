import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Analysis from './views/Analysis.vue'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'home',
        component: Home
    }, {
        path: '/analysis',
        name: 'analysis',
        component: Analysis
    }]
})