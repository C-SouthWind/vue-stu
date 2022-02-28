import vue from 'vue'
import VueRouter from "vue-router";
import Login from "../views/Login"
import Main from "../views/Main"
import List from "../views/user/List"
import Profile from "../views/user/Profile"
import NotFound from "../views/NotFound"

vue.use(VueRouter)

export default new VueRouter({
  mode :'history',
  routes:[
    {
      path:'/login',
      component:Login
    },
    {
      path:'/main/:username',
      props:true,
      component:Main,
      //嵌套路由
      children:[
        { //请求转发
          path:'/user/profile/:id/:users',
          name:'profile',
          component:Profile,
        },
        {
          //请求转发
          path:'/user/list',
          props:true,
          name:'list',
          component:List,
        },
        {
          //重定向
          path:'/goHome',
          name: 'goHome',
          redirect : '/login'
        }
      ]
    },
    {
      path: "*",
      component: NotFound
    }
  ]
})
