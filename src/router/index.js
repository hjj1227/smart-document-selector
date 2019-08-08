import Vue from 'vue'
import Router from 'vue-router'
import About from '../components/About'
import Help from '../components/Help'
import Files from '../components/Files'
import SelectPage from '../components/SelectPage'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/",
      component:Files
    },
    {
      path:"/about",
      component:About
    },
    {
      path:"/help",
      component:Help
    },
    {
      path:"/selectpage",
      component:SelectPage
    }
  ],
  //linkActiveClass:"active"
})
