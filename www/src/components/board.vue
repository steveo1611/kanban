<template>
  <div class="board-page">
    <router-link to='/#'><h3 class="boards"> BOARD: {{returnBoard.title}}</h3> </router-link>
    <div id="app">
      <router-link to='/#' tag='button'> HOME </router-link>
      <button @click="toggleModal(1)">Create a List</button>
      <!-- <button @click="deleteBoard(list.boardId)">Delete Board</button> use the modal component, pass in the prop -->
      <modal :toggle="showModal">
        <div slot="header">
          <h3>Create List</h3>
        </div>
        <div>
          <form @submit.prevent="createList">
            <input type="text" v-model="list.title" required>
            <button type="submit">Create List</button>
          </form>
        </div>
      </modal>
    </div>
    <klists :list='returnBoard'></klists>
  </div>
</template>

<script>
  import router from '../router'
  import modal from './Modal'
  import klists from './Lists'
  import ktasks from './Tasks'
 
 export default {
    name: 'board',
    mounted() {
      //  this.$store.dispatch('getBoard', this.$route.params.id)
      //  this.$store.dispatch('getLists')
    },
    components: { modal, klists },
    data() {
      return {
        showModal: 0,
        board:{
        },
        list: {
          boardId: this.$route.params.id,
        },
        lists: {}
      }
    },
    computed: {
      returnBoard() {
        return this.$store.state.board
        },
    },
    methods: {
      createList() {
        this.$store.dispatch('actionList', this.list)
        this.toggleModal(-1)
      },
      toggleModal(n){
        this.showModal +=n
      },
      deleteBoard(bid){
        this.$store.dispatch('deleteBrd', bid)
      }
    }
  }
</script>

<style>
.board-page{
  background-color:blueviolet;
}
.boards{
  color:azure;
}
</style>