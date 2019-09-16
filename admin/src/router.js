import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('./views/Home.vue')
const Main = () => import('./views/Main.vue')
const CategoriesEdit = () => import('./views/CategoriesEdit.vue')
const CategoryList = () => import('./views/CategoryList.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      children:[
        {
          path:'categories/create',
          component:CategoriesEdit
        },
        {
          path:'categories/list',
          component:CategoryList
        },
        {
          path:'categories/edit/:id',
          component:CategoriesEdit,
          props:true //设置props为true时，将url中的参数传递到组件中去
        }
      ]
    },
  ]
})
