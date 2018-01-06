<template>
  <div class="yaoming">
    <toast v-show="showToast">
      <p slot="body">提交完成</p>
    </toast>
    <!--<Spin size="large" fix v-if="spinShow"></Spin>-->
    <Button type="primary" @click="handleSpinShow">整页显示，3秒后关闭</Button>
    <h1 class="h1-header">姚明</h1>
    <Tabs :animated="false">
      <TabPane label="场均得分">
        <score></score>
      </TabPane>
      <TabPane label="场均篮板">场均篮板</TabPane>
      <TabPane label="场均助攻">场均助攻</TabPane>
    </Tabs>
  </div>
</template>
<script>
  import Score from './Score/Score.vue'
  export default {
   name: 'YaoMing',
    data () {
     return {
       showToast: false
     }
    },
   components: {
     Score,
   },
    methods: {
      handleSpinShow(){
        this.showToast = true;
        setTimeout(() => {
          this.showToast = false;
        },1500)
      }
    }
  }
</script>
<style scoped>

</style>
