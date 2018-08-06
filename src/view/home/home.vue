<template>
    <div style="height: auto;">
      <Row class="header">
        <Col span="12" style="height: 100%" offset="6">
          <div >
            <AutoComplete
              v-model="value2"
              @on-search="handleSearch2"
              placeholder="input here"
              style="width:200px;position: relative;z-index: 9;">
              <Option v-for="item in data2" :value="item" :key="item">{{ item }}</Option>
            </AutoComplete>
          </div>
        </Col>
      </Row>
    </div>
</template>

<script>
    export default {
        name: "home",
        data () {
          return {
            value2: '',
            data2: []
          }
        },
        methods: {
          handleSearch2 (value) {
            this.data2 = !value || value.indexOf('@') >= 0 ? [] : [
              value + '@qq.com',
              value + '@sina.com',
              value + '@163.com'
            ];
          }
        }
    }
</script>

<style scoped>
  html, body{ margin:0; height:100%; }
.header{
  position: fixed;
  top:0;
  left: 0;
  width: 100%;
  height: 46px;
  background: #fff;
  box-shadow: 0 1px 3px rgba(26,26,26,.1);
}
</style>
