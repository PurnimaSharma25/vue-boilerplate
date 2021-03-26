
export default [
   {
      name:'home',
      path:'/' ,
      component: () => import("./home/index.vue"),
   },

   {
      name:'user',
      path:'/user',
      component: () => import("./components/list.vue"),
   },


   {
      name:'usernew',
      path:'/user/:newUser/:mode',
      component: () => import("./components/list.vue"),
   },

   {
      name:'new',
      path:'/user/new',
      component: () => import("./components/newform.vue"),
   },
   {
      name:'edit',
      path:'/user/:id/:user',
      component: () => import('./components/edit.vue'),
   }

];
