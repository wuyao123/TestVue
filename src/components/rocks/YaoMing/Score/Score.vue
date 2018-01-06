<template>
  <div class="score">
    <Row class="btn-add">
      <Button type="primary">新建数据</Button>
    </Row>
    <ul class="score-ul clear-fix">
      <li v-for="index in 10" :key="index" class="score-li-item">
        <span></span><img :src="imgSrc" alt="美女" class="score-li-item-img">
      </li>
    </ul>
    <Table></Table>
  </div>
</template>
<script>
  import imgSrc from "@/assets/images/1.jpg"
  export default {
    name: 'Score',
    data () {
      return {
        imgSrc,
      }
    }
  }
</script>
<style lang="less">
  .score-ul{
    margin-bottom: 20px;
    .score-li-item {
      float: left;
      margin: 0 10px 10px 0;
      border: 1px solid #3a3b3c;
      width: 300px;
      height: 300px;
      padding: 10px 0;
      text-align: center;
      span{
        display: inline-block;
        vertical-align: middle;
        height: 100%;
        width: 0px;
      }
    }
    .score-li-item-img{
      vertical-align: middle;
      height: 90%;
    }
  }
  .clear-fix:after{
    content: '.';
    display: block;
    width: 0;
    height: 0;
    clear: both;
    visibility: hidden;
  }
</style>
