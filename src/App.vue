<template>
  <div id="app">
    <div class="layout">
      <Layout>
        <Header>

        </Header>
        <Layout>
          <Sider>
            <Menu width="auto" :active-name="activeName">
              <Submenu v-for="team in menus" :key="team.name" :name="team.name">
                <template slot="title">
                  <Icon type="ios-navigate"></Icon>
                  {{team.label}}
                </template>
                <MenuItem
                  v-for="player in team.players"
                  :name="player.name"
                  :key="player.name">
                  <router-link :to="player.path">{{player.label}}</router-link>
                  </MenuItem>
              </Submenu>
            </Menu>
          </Sider>
          <Layout>
            {{activeName}}
            <router-view/>
          </Layout>
        </Layout>
      </Layout>
    </div>
  </div>
</template>

<script>
  import { menus } from './router'
  export default {
    name: 'app',
    data () {
      return {
        menus,
      }
    },
    computed: {
      activeName () {
        return this.$route.name;
      }
    },
    mounted () {
      console.log(menus);
    }
  }
</script>

<style>
</style>
