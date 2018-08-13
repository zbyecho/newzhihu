<template>
  <div>
     <vheader></vheader>
    <list :listData="listData" @handlists="ids"></list>
    <show-list :showValue="values" :bodyData="bodyData"></show-list>
  </div>
</template>

<script>
    import Vheader from '@/components/header/Vheader'
    import list from '@/components/list/list'
    import showList from '@/components/list/showList'
    export default {
        name: "home",
      data () {
        return {
          listData:{},
          values:false,
          bodyData:''
        }
      },
      components :{
        Vheader,
        list,
        showList
      },
      methods :{
        init () {
          var scope = this
          scope.$get('api/4/news/latest')
            .then(function (res) {
              console.log(res)
             scope.listData = res.stories;
            })
        },
        ids(data){
          var scope = this
          scope.$get('api/4/news/'+ data)
            .then(function (res) {
              console.log(res)
              scope.values = true
              scope.bodyData = res
            })
        }
      },
      mounted() {
        this.init()
      }

    }
</script>

<style scoped lang="less">

</style>
