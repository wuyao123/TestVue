<template>
  <div id="app">
    <div class="layout">
      <Layout>
        <Header>

        </Header>
        <div class="layout-content">
          <div class="menu-top"></div>
          <div id="menuContainer" class="layout-menu" :style="{height:screenHeight-64-50 + 'px'}" @click="triggerNscroll">
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
          </div>
          <!--<div class="menu-bottom"></div>-->
          <div class="layout-page" :style="{height:screenHeight-64 + 'px'}">
            <router-view/>
          </div>
        </div>
      </Layout>
    </div>
  </div>
</template>

<script type="text/babel">
  import { menus } from './router'
  import $ from 'jquery'
  import nscroll from './common/jquery.nicescroll.min'

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
      },
    },
    methods: {
      triggerNscroll () {
        setTimeout(function(){
          $('#menuContainer').niceScroll().resize();
        }, 500);
      }
    },
    created () {
      console.log(this.screenHeight);
      this.triggerNscroll();
    },
    mounted () {
      this.screenHeight = document.documentElement.clientHeight;
      window.onresize = () => {
        this.screenHeight = document.documentElement.clientHeight;
      };
    },
  }
</script>

<style lang="less" rel="stylesheet/less" src="./assets/stylus/app.less"></style>
