import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: ()=>import('./views/Login.vue')
    },
    {
      path:'/home',
      redirect:'/home/mianfeike'
    },
    {
      path:'/home',
      component: ()=>
      import('./components/Home.vue'),
      children: [{
        path: '/home/mianfeike',
        component: ()=>
        import('../src/views/Mianfeike.vue')
      },
      {
        path: '/home/mianfeike',
        name: 'mianfeike',
        component: ()=>import('./views/Mianfeike.vue')
      },
      {
        path: '/home/jingpingke',
        name: 'jingpingke',
        component: ()=>import('./views/Jingpingke.vue')
      },
      {
        path: '/home/kaoshidagang',
        name: 'kaoshidagang',
        component: ()=>import('./views/Kaoshidagang.vue')
      },
      {
        path: '/home/linianzhenti',
        name: 'linianzhenti',
        component: ()=>import('./views/Linianzhenti.vue')
      },
      {
        path: '/home/monishijuan',
        name: 'monishijuan',
        component: ()=>import('./views/Monishijuan.vue')
      },
      {
        path: '/home/xuanzeti',
        name: 'xuanzeti',
        component: ()=>import('./views/Xuanzeti.vue')
      },
      {
        path: '/home/jiandati',
        name: 'jiandati',
        component: ()=>import('./views/Jiandati.vue')
      },
      {
        path: '/home/cailiaofenxiti',
        name: 'cailiaofenxiti',
        component: ()=>import('./views/Cailiaofenxiti.vue')
      },
      {
        path: '/home/kaoshidagang2',
        name: 'kaoshidagang2',
        component: ()=>import('./views/Kaoshidagang2.vue')
      },
      {
        path: '/home/linianzhenti2',
        name: 'linianzhenti2',
        component: ()=>import('./views/Linianzhenti2.vue')
      },
      {
        path: '/home/monishijuan2',
        name: 'monishijuan2',
        component: ()=>import('./views/Monishijuan2.vue')
      },
      {
        path: '/home/xuanzeti2',
        name: 'xuanzeti2',
        component: ()=>import('./views/Xuanzeti2.vue')
      },
      {
        path: '/home/jiandati2',
        name: 'jiandati2',
        component: ()=>import('./views/Jiandati2.vue')
      },
      {
        path: '/home/cailiaofenxiti2',
        name: 'cailiaofenxiti2',
        component: ()=>import('./views/Cailiaofenxiti2.vue')
      },
      {
        path: '/home/tongxueshuo',
        name: 'tongxueshuo',
        component: ()=>import('./views/Tongxueshuo.vue')
      },
      {
        path: '/home/tongxueganyan',
        name: 'tongxueganyan',
        component: ()=>import('./views/Tongxueganyan.vue')
      },
      {
        path: '/home/shangkebiji',
        name: 'shangkebiji',
        component: ()=>import('./views/Shangkebiji.vue')
      },
      {
        path: '/home/dingdanguanli',
        name: 'dingdanguanli',
        component: ()=>import('./views/Dingdanguanli.vue')
      },
      {
        path: '/home/shujuganlan',
        name: 'shujuganlan',
        component: ()=>import('./views/Shujuganlan.vue')
      },
      {
        path: '/home/duorenpingtuan',
        name: 'duorenpingtuan',
        component: ()=>import('./views/Duorenpingtuan.vue')
      },
      {
        path: '/home/yonghuguanli',
        name: 'yonghuguanli',
        component: ()=>import('./views/Yonghuguanli.vue')
      },
      {
        path: '/home/dengluzhanghaoguanli',
        name: 'dengluzhanghaoguanli',
        component: ()=>import('./views/Dengluzhanghaoguanli.vue')
      }
    ]
    }
  ]
})
