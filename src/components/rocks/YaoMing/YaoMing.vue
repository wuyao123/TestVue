<template>
  <div class="yaoming">
    <h1 class="h1-header">姚明</h1>
    <Tabs :animated="false">
      <TabPane label="场均得分">
        <Row class="btn-add">
          <Button type="primary">新建数据</Button>
        </Row>
        <Table></Table>
      </TabPane>
      <TabPane label="场均篮板">场均篮板</TabPane>
      <TabPane label="场均助攻">场均助攻</TabPane>
    </Tabs>
  </div>
</template>
<script>
 export default {
   name: 'YaoMing'
 }
</script>
<style scoped>

</style>
