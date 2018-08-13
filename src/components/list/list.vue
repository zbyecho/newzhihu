<template>
  <ul>
    <li v-for="n in listData" @click="handList(n.id)">
      <Card style="width:320px">
        <div style="text-align:center">
          <img :src=" n.images[0]">
          <h3 style="overflow: hidden;
    white-space: nowrap;
    text-overflow:ellipsis;">{{ n.title }}</h3>
        </div>
      </Card>
    </li>

  </ul>
</template>

<script>

    export default {
        name: "list",
        props:['listData'],
        methods:{
          handList(ids){
            this.$emit('handlists',ids);
          }
        }

    }
</script>

<style scoped lang="less">
  ul{
    width: 100%;
    margin-top: 80px;
    height: auto;
    overflow: auto;
    z-index: 1;
  }
  li {
    list-style: none;
    float: left;
    margin-left: 20px;
    cursor: pointer;
  }
</style>
