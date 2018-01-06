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
  },
  'rocks1':{
    name: 'rocks1',
    path: '/rocks1',
    label: '休斯顿火箭',
    players: {
      'yaoming1': {
        name: 'yaoming1',
        path: '/rocks/yaoming1',
        label: '姚明',
        component: YaoMing
      },
      'zhouqi1': {
        name: 'zhouqi1',
        path: '/rocks/zhouqi1',
        label: '周琦',
        component: YaoMing
      }
    }
  },
  'magics1':{
    name: 'magics1',
    path: '/magics1',
    label: '休斯顿火箭',
    players: {
      'harise2': {
        name: 'harise2',
        path: '/magics/harise2',
        label: '哈里斯',
        component: YaoMing
      },
      'lewise2': {
        name: 'lewise2',
        path: '/magics/lewise2',
        label: '刘易斯',
        component: YaoMing
      }
    }
  },
  'rocks2':{
    name: 'rocks3',
    path: '/rocks3',
    label: '休斯顿火箭',
    players: {
      'yaoming3': {
        name: 'yaoming3',
        path: '/rocks/yaoming3',
        label: '姚明',
        component: YaoMing
      },
      'zhouqi3': {
        name: 'zhouqi3',
        path: '/rocks/zhouqi3',
        label: '周琦',
        component: YaoMing
      }
    }
  },
  'magics2':{
    name: 'magics3',
    path: '/magics3',
    label: '休斯顿火箭',
    players: {
      'harise3': {
        name: 'harise3',
        path: '/magics/harise3',
        label: '哈里斯',
        component: YaoMing
      },
      'lewise3': {
        name: 'lewise3',
        path: '/magics/lewise3',
        label: '刘易斯',
        component: YaoMing
      }
    }
  },
  'rocks3':{
    name: 'rocks4',
    path: '/rocks4',
    label: '休斯顿火箭',
    players: {
      'yaoming4': {
        name: 'yaoming4',
        path: '/rocks/yaoming4',
        label: '姚明',
        component: YaoMing
      },
      'zhouqi4': {
        name: 'zhouqi4',
        path: '/rocks/zhouqi4',
        label: '周琦',
        component: YaoMing
      }
    }
  },
  'magics3':{
    name: 'magics5',
    path: '/magics5',
    label: '休斯顿火箭',
    players: {
      'harise5': {
        name: 'harise5',
        path: '/magics/harise5',
        label: '哈里斯',
        component: YaoMing
      },
      'lewise5': {
        name: 'lewise5',
        path: '/magics/lewise5',
        label: '刘易斯',
        component: YaoMing
      }
    }
  },
  'rocks4':{
    name: 'rocks11',
    path: '/rocks11',
    label: '休斯顿火箭',
    players: {
      'yaoming11': {
        name: 'yaoming11',
        path: '/rocks/yaoming11',
        label: '姚明',
        component: YaoMing
      },
      'zhouqi11': {
        name: 'zhouqi11',
        path: '/rocks/zhouqi11',
        label: '周琦',
        component: YaoMing
      }
    }
  },
  'magics4':{
    name: 'magics22',
    path: '/magics22',
    label: '休斯顿火箭',
    players: {
      'harise22': {
        name: 'harise22',
        path: '/magics/harise22',
        label: '哈里斯',
        component: YaoMing
      },
      'lewise22': {
        name: 'lewise22',
        path: '/magics/lewise22',
        label: '刘易斯',
        component: YaoMing
      }
    }
  },
  'rocks5':{
    name: 'rocks33',
    path: '/rocks33',
    label: '休斯顿火箭',
    players: {
      'yaoming33': {
        name: 'yaoming33',
        path: '/rocks/yaoming33',
        label: '姚明',
        component: YaoMing
      },
      'zhouqi33': {
        name: 'zhouqi33',
        path: '/rocks/zhouqi33',
        label: '周琦',
        component: YaoMing
      }
    }
  },
  'magics5':{
    name: 'magics12',
    path: '/magics12',
    label: '休斯顿火箭',
    players: {
      'harise12': {
        name: 'harise12',
        path: '/magics/harise12',
        label: '哈里斯',
        component: YaoMing
      },
      'lewise12': {
        name: 'lewise12',
        path: '/magics/lewise12',
        label: '刘易斯',
        component: YaoMing
      }
    }
  },
  'rocks6':{
    name: 'rocks55',
    path: '/rocks55',
    label: '休斯顿火箭',
    players: {
      'yaoming55': {
        name: 'yaoming55',
        path: '/rocks/yaoming55',
        label: '姚明',
        component: YaoMing
      },
      'zhouqi55': {
        name: 'zhouqi55',
        path: '/rocks/zhouqi55',
        label: '周琦',
        component: YaoMing
      }
    }
  },
  'magics6':{
    name: 'magics77',
    path: '/magics77',
    label: '休斯顿火箭',
    players: {
      'harise77': {
        name: 'harise77',
        path: '/magics/harise77',
        label: '哈里斯',
        component: YaoMing
      },
      'lewise77': {
        name: 'lewise77',
        path: '/magics/lewise77',
        label: '刘易斯',
        component: YaoMing
      }
    }
  },
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
