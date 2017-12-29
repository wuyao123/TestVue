<template>
  <div id="app">
    <div class="layout">
      <Layout>
        <Header>

        </Header>
        <Layout>
          <Sider class="layout-menu" :style="{height:screenHeight-64 + 'px'}">
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
          <Layout class="layout-content" :style="{height:screenHeight-64 + 'px'}">
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
        screenHeight: document.documentElement.clientHeight,
        menus,
      }
    },
    computed: {
      activeName () {
        return this.$route.name;
      }
    },
  }
</script>

<style lang="less" rel="stylesheet/less" src="./assets/stylus/app.less"></style>
