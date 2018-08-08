<template>
  <div class="task-page">
    <div id="app">
      <button @click="toggleModal(1)" :key="id">Create a Task</button>
      <modal :toggle="showModal">
        <div slot="header">
          <h3>Create Task</h3>
        </div>
        <div>
          <form @submit.prevent="createTask" :key="returnTask.id">
            <input type="text" v-model="returnTask.title" required>
            <input type="text" v-model="returnTask.body">
            <button type="submit">Create Task</button>
            </form>
        </div>
      </modal>
    </div>
    <div class="my-3">
    <div class="tasks-list card" v-for="task in listsTasks">
      <h3>Title: {{task.title}}</h3>
      <p>Description: {{task.body}}</p>
      </div>
      </div>

    <!-- <div class="tasks-list" v-for="task in returnTasks" >
      <h3>Title:{{task.title}}</h3>
      <h3>Description: {{task.body}}</h3>
      </div> -->
    <!-- <button @click="createTask">New Task</button>  -->
  </div>
</template>

<script>
  import router from '../router'
  import modal from './Modal'
  import klist from './Lists'
  
  export default {
    name: 'ktasks',
     mounted() {
      this.$store.dispatch('getTasks', this.$store.state.board._id)
      // this.$store.dispatch('getBoard', this.$route.params.id)
      // this.$store.dispatch('getLists')
    },
    components: { modal, klist },
    props:
    ['id'],
    
    data() {
      return {
        showModal: 0,
        //  task: {
        //     listId: this.$route.params.id,
        //     title: "",
        //     body:"" 
        //    }
          lists: {},
          returnTask: {
            title: "",
            body: "",
            listId: this.id
          }
          // returnList: []
      }
    },
    computed: {
      listsTasks() {
        return this.returnTasks.filter(list => {
          return list.listId == this.id
        })
      },
      // consolist(){
      //   console.log(this.id)
      // },
      // returnTask() {
      //   return this.$store.state.tasks
      //   },
      returnTasks(){
         return this.$store.state.tasks
        },
      returnList() {
         return this.$store.state.lists
      }
    },
    methods: {
      createTask() {
        this.$store.dispatch('actionTask', this.returnTask)
        this.toggleModal(-1)
      },
      toggleModal(n){
        this.showModal +=n
        // this.$store.dispatch('getList', this.list)
      },

    }
  }
</script>

<style>
.task-page{
  background-color:aqua
}
.tasks-list{
  border-style: double;
  margin:1rem;
} 
</style>