<template>
  <div id="todoApp">

    {{ message }}
  </div>
</template>

<script>
    export default {
        name: "Main",
        data () {
          return {
            message: 'This is Main'
          }
        }
    }
</script>

<style scoped>
.main {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
