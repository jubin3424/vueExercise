<template>
    <span class="removeAll" @click="removeAll">Remove All</span>
</template>

<script>
    export default {
        name: "TodoFooter",
        methods: {
          removeAll(){
            this.$emit('removeAll');
          }
        }
    }
</script>

<style scoped>

</style>
