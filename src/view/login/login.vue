<template>
    <div class="bg">
      <div class="LgBox">
        <Card style="width: 100%">
          <div class="LgHeader">
            <h1>知乎</h1>
            <h4>{{loginFlag == true ? '登录':'注册'}}知乎，发现更大的世界</h4>
          </div>
          <div class="LgContent" v-if="loginFlag">
            <div class="Lgipt">
              <input type="text" placeholder="手机号或邮箱" v-model="loginFrom.username" :style="styleObject">
            </div>
            <div class="Lgipt">
              <input :type="pwdFlag == true ? 'password':'text'" v-model="loginFrom.password" :style="styleObject" placeholder="密码">
              <span @click="pwdCheck">
                <Icon :type="pwdFlag == true ? 'ios-eye-off':'ios-eye'" size="28" />
              </span>
            </div>
            <div style="margin-top: 16px">
              <Button type="text" style="float: left">手机验证码登录</Button>
              <Button type="text" style="float: right">忘记密码？</Button>
            </div>
            <Button type="primary" long style="margin-top: 20px" :loading="loading" @click="login">
              <span v-if="!loading">登录</span>
              <span v-else>登录中...</span>
            </Button>
          </div>
          <div class="LgContent" v-if="!loginFlag" >
            <div class="Lgipt">
              <input type="text" placeholder="输入手机号">
            </div>
            <div class="Lgipt">
              <input type="text" placeholder="六位验证码短信？">
            </div>
            <Button type="primary" long style="margin-top: 20px" >注册</Button>
          </div>
          <div class="LgFooter">
            <span>没有账号?&nbsp&nbsp<span class="last" @click = "loginCheck">注册</span></span>
          </div>
        </Card>

      </div>
    </div>
</template>

<script>
  import '@/mock/user/user.js'
    export default {
        name: "login",
      data () {
          return {
            loginFlag:true,
            pwdFlag: true,
            loading: false,
            loginFrom :{
              username:'',
              password: ''
            },
            styleObject: false
          }
      },
      methods: {
          loginCheck () {
            this.loginFlag = !this.loginFlag
          },
          pwdCheck () {
            this.pwdFlag = !this.pwdFlag;
          },
        login () {
            var scope = this
          scope.loading = true;
          scope.$get('/user')
            .then(function (res) {
             const resd = res.data;
             if(resd.suc) {
               scope.loading = false;
               var  user = {
                 username:resd.data.username,
                 userpwd:resd.data.userpwd
               }
               localStorage.setItem('user',JSON.stringify(user))
               scope.$Message.info({
                 content: resd.msg,
                 onClose: function () {
                   scope.$router.push({name :'home'})
                 }
               })
             } else {
              scope.$Message.error( resd.msg)
             }
            })


        }
      },
      computed:{
          logoinFrom () {
           if (this.logoinFrom.username == '') {
             return this.styleObject
           }
           if (this.loginFrom.password == '') {
             return this.styleObject
           }
          }
      }
    }
</script>

<style scoped lang="less">
  @import "../../assets/css/common";
.bg {
  position: fixed;
  top:0;
  left: 0;
  background-image: url("../../assets/img/loginbeijing.png");
  background-repeat: no-repeat;
  background-color: #b8e5f8;
  background-size: cover;
  width: 100%;
  height: 100vh;
  overflow: auto;
  &>.LgBox{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 432px;
    height: 100%;
   margin: 0 auto;
    color: @title;
  }
  .LgHeader{
    &>h1{
      font-size: 56px;
    }
    &>h4{
      font-size: 18px;
    }
  }

}
  .LgContent{
    width: 100%;
    height: auto;
    padding: 0 40px 36px;
    &>.Lgipt{
      display: flex;
      justify-content:space-between ;
      width: 100%;
      height: 48px;
      line-height: 48px;
      color: @LgColor;
      margin-top: 16px;
      border: 1px solid #ebebeb;
      border-top: transparent;
      border-left: transparent;
      border-right: transparent;
      &>input {
        width: 70%;
        height: 99%;
        line-height: 48px;
        outline: none;
        border:none;
      }
      &>span{
        width: 30%;
        height: 100%;
        cursor: pointer;
      }
    }

  }
  .LgFooter {
    width: 100%;
    height: 59px;
    border-top:1px solid #ebebeb;
    font-size: 16px;
    text-align: center;
    line-height: 59px;
  }
  .LgFooter> span >.last{
    color: #175199;
    cursor: pointer;
  }
</style>
