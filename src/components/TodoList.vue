<template>
  <transition-group name="list" tag="ul">
    <li v-for="(todoItem, index) in propsdata" :key="index">
      <i class="checkBtn fas fa-check fa-spin" aria-hidden="true"></i>&nbsp;
      {{ todoItem }}
      <i style="cursor:pointer" class="removeBtn fas fa-trash" @click="removeTodo(todoItem, index)"></i>
    </li>

  </transition-group>
</template>

<script>
    export default {
      props: ['propsdata'],
      data() {
        return {
          showModal: false
        }
      },
      name: "TodoList",
      methods: {
        removeTodo(todoItem, index) {
          console.log(todoItem, index);
          this.$emit('removeTodo', todoItem, index);
        }
      },
    }
</script>

<style scoped>
  ul {
    list-style-type: none;
    padding-left: 0px;
    margin-top: 0;
  }
  li {
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background: white;
    border-radius: 5px;
  }
  .checkBtn {
    line-height: 47px;
  }
  .removeBtn {
    line-height: 45px;
    margin-left: auto;
  }
  .list-enter-active, .list-leave-active {
    transition: all 1s;
  }
  .list-enter, .list-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }

</style>
