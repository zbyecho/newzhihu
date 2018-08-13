<template>
    <div>
      <Modal
        :title="bodyData.title"
        v-model="showValue"
        :fullscreen="showValue">
        <div v-html="bodyData.body"></div>
      </Modal>
    </div>
</template>

<script>
    export default {
        name: "showList",
        props:{
          showValue:{
            type:Boolean
          },
          bodyData:null
        }
    }
</script>

<style scoped>

</style>
