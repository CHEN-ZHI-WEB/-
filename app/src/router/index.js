import Vue from 'vue'
import Router from 'vue-router'
import List from '../views/List'
import Home from '../views/Home'
import Add from '../views/Add'
import Detail from '../views/Detail'
import DetailList from '../views/DetailList'
import Layout from '../Layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/layout',
      component: Layout,
      children: [
        {
          path: '/home',
          component: Home
        },{
          path: '/list',
          component: List
        },{
          path: '/add',
          component: Add
        }
      ]
    }, {
      path: '/detail/:id',
      component: Detail
    }, {
      path: '/detailList/:id',
      component: DetailList
    },{
      path:"/",
      redirect:'/home',
    }
  ]
})
