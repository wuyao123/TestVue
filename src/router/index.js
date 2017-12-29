import Vue from 'vue'
import Router from 'vue-router'
import YaoMing from '@/components/rocks/YaoMing/YaoMing.vue'

Vue.use(Router)

const routes = [];

const menus = {
  'rocks':{
    name: 'rocks',
    path: '/rocks',
    label: '休斯顿火箭',
    players: {
      'yaoming': {
        name: 'yaoming',
        path: '/rocks/yaoming',
        label: '姚明',
        component: YaoMing
      },
      'zhouqi': {
        name: 'zhouqi',
        path: '/rocks/zhouqi',
        label: '周琦',
        component: YaoMing
      }
    }
  },
  'magics':{
    name: 'magics',
    path: '/magics',
    label: '休斯顿火箭',
    players: {
      'harise': {
        name: 'harise',
        path: '/magics/harise',
        label: '哈里斯',
        component: YaoMing
      },
      'lewise': {
        name: 'lewise',
        path: '/magics/lewise',
        label: '刘易斯',
        component: YaoMing
      }
    }
  }
};

Object.keys(menus).forEach((team) => {
  Object.keys(menus[team].players).forEach((player) => {
    const { path, component } = menus[team].players[player];
    routes.push({
      name: player,
      path,
      component,
    });
  })
})

const router = new Router({ routes });

export { menus }

export default router;
