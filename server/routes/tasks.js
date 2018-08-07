var router = require('express').Router()
var Tasks = require('../models/task')

// GET ALL
router.get('/api/tasks/:id', (req, res, next) => {
  // console.log(req.params.listId)
  // console.log(req.params.id)
  console.log(req)
  Tasks.find({boardId: '5b6891a6672e8a4cdd3123af'})
    .then(tasks => {
      res.status(200).send(tasks)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

// GET BY ID
// router.get('/api/tasks/:id', (req, res, next)=>{
//   Tasks.findById(req.params.id)
//     .then(task =>{
//       res.status(200).send(task)
//     })
//     .catch(err => {
//       res.status(400).send(err)
//     })
// })

// ADD/create
router.post('/api/tasks', (req, res, next) => {
  var task = req.body
  console.log(req)
  this.userId = req.session.uid
  Tasks.create(task)
    .then(newTask => {
      res.status(200).send(newTask)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

// EDIT
router.put('/api/tasks/:id', (req, res, next) => {
  Tasks.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(task => {
      res.status(200).send({message: "Successfully Updated", task})
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

// DESTROY
router.delete('/api/tasks/:id', (req, res, next)=>{
  Tasks.findByIdAndRemove(req.params.id)
    .then(data=>{
      res.send("Successfully Deleted Task")
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

module.exports = {
  router
}