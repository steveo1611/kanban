<template>
  <div class="home-page" id="background">
    <!-- <button type="@click=createBoard">Create a Board</button> -->
    <div id="app">
      <button class="brd-button" @click="toggleModal(1)">Create a Board</button>
      <!-- use the modal component, pass in the prop -->
      <modal :toggle="showModal">
        <div slot="header">
          <h3>Create Board</h3>
        </div>
        <div>
          <form @submit.prevent="createBoard">
            <input type="text" v-model="board.title" required>
            <button type="submit">Create Board</button>
          </form>
        </div>
      </modal>
    </div>
    <ul class="boards list-unstyled">
      <h3>{{user.name}}'s Boards</h3>
      <div class='container'>
        <div class='col-sm-6 offset-sm-3'>
      <li class="board-list" v-for="board in boards" :key="board._id" ><router-link :to="{name: 'board', params:{id:board._id}}" @click.native='setBoard(board)'>{{board.title}}</router-link>
     <button class='delbutton' @click='deleteBoard(board._id)'> delete</button> </li>
     </div>
     </div>
    </ul>
  </div>
</template>

<script>
  import router from '../router'
  import modal from './Modal'
  import board from './Board'

  export default {
    name: 'home',
    components: { modal, board },
    mounted() {
      if (!this.$store.state.user._id) {
        router.push({ name: 'login' })
      }
     this.$store.dispatch('getBoards', this.$store.state.user._id) 
    },
    data() {
      return {
        showModal: 0,
        board:{
        }
        
      }
    },
    computed: {
      boards(){
        return this.$store.state.boards
      },
      user() {
        return this.$store.state.user
      }
    },
    methods: {
      createBoard() {
        this.$store.dispatch('actionBoard', this.board)
        this.toggleModal(-1)
      },
      setBoard(board) {
        this.$store.commit('setBoard', board)
      },
      toggleModal(n){
        this.showModal += n
      },
      listBoards() {
        this.$store.dispatch('getBoards', this.$store.state.user._id)
      },
      deleteBoard(bid){
        this.$store.dispatch('deleteBrd', bid)
      }
    }
  }
</script>

<style>
  #background {
    background-image: url("../assets/pencil.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment:fixed;
    color: white;
  }
  .board-list {
    color: black;
    margin: 15px;
    background-color: #ffffff;
    border: 1px solid black;
    opacity: 0.6;
    font:bold;
  }
  .delbutton{
    text-align-last: justify;
  }
  .brd-button{
    margin-top: 1rem;
    margin-bottom: .5rem;
  }
</style>