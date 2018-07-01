<template>
  <div class="inputBox">
    <input type="text" v-model="newItem" v-on:keyup.enter="addTodo">
    <a v-on:click="addTodo"><i class="fab fa-apple fa-2x addBtn" ></i></a>
    <modal v-if="showModal" @close="showModal = false">
      <h3 slot="header">경고</h3>
      <span slot="body">주빈입니당</span>
      <span slot="footer" @click="showModal = false">
    	할 일을 입력하세요.
    	<i class = "closeModalBtn fas fa-times" aria-hidden="true"></i>
    </span>
    </modal>
  </div>
</template>

<script>
    import Modal from './cmmon/Modal'
    export default {
      name: "TodoInput",
      data() {
        return {
          newItem: '',
          showModal: false,
        }
      },
      methods: {
        addTodo() {
          if (this.newItem !== ""){
            var value = this.newItem.trim();
            this.$emit('addTodo', value);
            this.clearInput();
          }
          else {
            this.showModal = !this.showModal;
          }
        },
        clearInput() {
          this.newItem = '';
        }
      },
      components: {
        'modal': Modal
      }
    }
</script>

<style scoped>
  input:focus {
    outline: none;
  }
  .inputBox {
    background: white;
    height: 55px;
    line-height: 50px;
    border-radius: 5px;
  }
  .inputBox input {
    border-style: none;
    background: aliceblue;
    font-size: 1.1rem;
  }
  .addBtn {
    margin-top:7px;
    background: -webkit-linear-gradient(#eee, #333);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
</style>
