import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export const router = new Router({
  mode: 'hash',
  routes: [
    {
      path: "/main",
      component: () => import('../view/layout/Main.vue'),
    },
    {
      path: '/',
      redirect: "/main",
      component: () => import('../view/layout/Layout.vue'),
      children: [
        {
          path: "home",
          component: () => import("../view/layout/Home.vue"),
        },
        {
          path: "projectInfoMenu",
          component: () => import("../view/projectInfoMenu/index.vue"),
        },
        {
          path: "bugActiveMenu",
          component: () => import("../view/bugActiveMenu/index.vue"),
        },
        {
          path: "bugAllMenu",
          component: () => import("../view/bugAllMenu/index.vue"),
        },
        {
          path: "bugStatMenu",
          component: () => import("../view/bugStatMenu/index.vue"),
        },
        {
          path: "bugAssignToMeMenu",
          component: () => import("../view/bugAssignToMeMenu/index.vue"),
        },
        {
          path: "bugFixByMeMenu",
          component: () => import("../view/bugFixByMeMenu/index.vue"),
        },
        {
          path: "bugAssignByMeMenu",
          component: () => import("../view/bugAssignByMeMenu/index.vue"),
        },
        {
          path: "bugFocusMenu",
          component: () => import("../view/bugFocusMenu/index.vue"),
        }, {
          path: "noticeAllMenu",
          component: () => import("../view/noticeAllMenu/index.vue"),
        },
        {
          path: "versionMenu",
          component: () => import("../view/versionMenu/index.vue"),
        }
      ]
    },
    {
      path: "/user",
      component: () => import("../view/user/Index.vue"),
      children: [
        {
          path: "/user/login",
          component: () => import('../view/user/Login.vue'),
        },
        {
          path: "/user/register",
          component: () => import('../view/user/Register.vue'),
        },
        {
          path: "/user/forgetPassword",
          component: () => import('../view/user/ChangePassword.vue'),
        }
      ]
    }
  ]
});
router.beforeEach((to,from,next)=>{
  console.log(to);
  next()
})
