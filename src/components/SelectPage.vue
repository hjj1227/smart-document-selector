<template>
  <div class="container">
    <p v-html="htmlString"></p>
  </div>  
</template>

<script>
export default {
  name: 'SelectPage',
  data (){
      return {
          htmlString:""
      }
  },
  created(){
      this.htmlString = this.$route.query.htmlStr;
  }
}


</script>

<style>
</style>
