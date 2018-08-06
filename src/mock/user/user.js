import  Mock from 'mockjs';

const user = {
  'suc': true,
  'data':{
    'username':'admin',
    'userpwd': 'admin'
  },
  'msg':'登陆成功'

}

Mock.mock(/\user/,'post', user)

