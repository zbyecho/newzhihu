<template>
  <div style="height: auto;">
    <Row class="header">
      <Col span="12" style="height: 100%;" offset="6">
        <div class="headerbox">
          <div class="title">
            <a href="/home">知乎</a>
            <span>首页</span>
            <span>发现</span>
            <span>话题</span>
          </div>
          <div calss="seach">
            <AutoComplete
              v-model="value2"
              @on-search="handleSearch2"
              placeholder="input here"
              style="width:200px;position: relative;z-index: 9;">
              <Option v-for="item in data2" :value="item" :key="item">{{ item }}</Option>
            </AutoComplete>
          </div>
          <div class="user">
            <Dropdown>
              <div>
                <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
                <Icon type="arrow-down-b"></Icon>
              </div>
              <DropdownMenu slot="list">
                <DropdownItem>我的主页</DropdownItem>
                <DropdownItem>设置</DropdownItem>
                <DropdownItem divided @click="loginout">退出</DropdownItem>
              </DropdownMenu>
            </Dropdown>

          </div>
        </div>
      </Col>
    </Row>
  </div>
</template>

<script>
    export default {
        name: "Vheader",
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
          },
          loginout () {

          }
        }
    }
</script>

<style scoped lang="less">
  html, body{ margin:0; height:100%; }
  .header{
    position: fixed;
    top:0;
    left: 0;
    width: 100%;
    height: 46px;
    background: #fff;
    box-shadow: 0 1px 3px rgba(26,26,26,.1);
    z-index: 100;
  }
  .headerbox{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    & > .title {
        color: #444;
        font-size: 15px;
      }
    & > .title >a {
        color: #0084ff;
        font-size: 26px;
        font-weight: bold;
      }
    & > .title >* {
        margin-right: 10px;
      }
    & > .user {
        padding-right: 10px;
      }
  }
</style>
