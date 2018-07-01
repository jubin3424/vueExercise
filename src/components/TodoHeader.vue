<template>
  <div class="header">{{ message }}</div>

</template>

<script>
    export default {
        name: "TodoHeader",
        data() {
          return {
            message: "Todo It!"
          }
        }
    }
</script>

<style scoped>
  .header {
    margin : 0 0 1rem 0;
  }
</style>
