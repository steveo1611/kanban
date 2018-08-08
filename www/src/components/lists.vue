<template>
  <div class="list-page">
    <div class="col-sm-12 my-3 card-deck">
      <div class="card text-black w-100 h-500" v-for="list in returnList" :key='list._id'>
        <h3>{{list.title}}</h3>
        <button @click="deleteList(list)">Delete List</button>
        <ktasks :id='list._id'></ktasks>
      </div>
    </div>
  </div>
</template>

<script>
  import router from '../router'
  import modal from './Modal'
  import ktasks from './Tasks'

  export default {
    name: 'klists',
    mounted() {
    //  this.$nextTick(function() {
       this.displayList()
    //  })
    },
    data() {
      return {
        showModal: 0,
        tasks: {},
        lists: {},
        list:{},
        id: ''
        }
    },
    components: { modal, ktasks },
    computed: {
      returnList() {
        return this.$store.state.lists
      }
    },
    methods: {
      toggleModal(n) {
        this.showModal += n
      },
      createList() {
        this.$store.dispatch('actionList', this.list)
        this.toggleModal(-1)
      },
      deleteList(list){
        console.log(list)
        this.$store.dispatch('deleteList',list._id)
      },
      displayList() {
        this.$store.dispatch('getLists')
        // this.$store.dispatch('getLists', this.$route.params.id)
      }
    }
  }
</script>

<style>
.list-page{
  background-color:crimson;
}

</style>