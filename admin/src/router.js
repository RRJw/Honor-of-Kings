import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('./views/Home.vue')
const Main = () => import('./views/Main.vue')
const CategoriesEdit = () => import('./views/CategoriesEdit.vue')
const CategoryList = () => import('./views/CategoryList.vue')
const ItemList = () => import('./views/ItemList.vue')
const ItemEdit = () => import('./views/ItemEdit.vue')
const HeroList = () => import('./views/HeroList.vue')
const HeroEdit = () => import('./views/HeroEdit.vue')
const ArticleEdit = () => import('./views/ArticleEdit.vue')
const ArticleList = () => import('./views/ArticleList.vue')
const AdEdit = () => import('./views/AdEdit.vue')
const AdList = () => import('./views/AdList.vue')
const AdminEdit = () => import('./views/AdminEdit.vue')
const AdminList = () => import('./views/AdminList.vue')
const Login = () => import('./views/Login.vue')

Vue.use(Router)

const router =  new Router({
  routes: [
    {
      path:'/login',
      name:'Login',
      component:Login,
      meta:{ ispublic:true }
    },
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
        },
        {
          path:'items/create',
          component:ItemEdit
        },
        {
          path:'items/list',
          component:ItemList
        },
        {
          path:'items/edit/:id',
          component:ItemEdit,
          props:true
        },
        { path:'heros/create',component:HeroEdit },
        { path:'heros/list', component:HeroList },
        { path:'heros/edit/:id', component:HeroEdit, props:true },

        { path:'articles/create',component:ArticleEdit },
        { path:'articles/list', component:ArticleList },
        { path:'articles/edit/:id', component:ArticleEdit, props:true },

        { path:'ads/create',component:AdEdit },
        { path:'ads/list', component:AdList },
        { path:'ads/edit/:id', component:AdEdit, props:true },

        { path:'admin_user/create',component:AdminEdit },
        { path:'admin_user/list', component:AdminList },
        { path:'admin_user/edit/:id', component:AdminEdit, props:true }        
      ]
    },
  ]
})
//前端路由限制
router.beforeEach( ( to, from, next) => {
  if(!to.meta.ispublic && !localStorage.token){
    return next('/login')
  }
  next()
})


export default router