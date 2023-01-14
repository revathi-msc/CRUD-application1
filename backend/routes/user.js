const router = require('express').Router();
const Users = require('../model/user.modal')


router.route('/').get((req,res) => {
    Users.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json("Error :" + err))
})


//add
router.route('/add').post((req,res) => {
    const username = req.body.username;
    const password = req.body.password;

    

    const newUser = new Users(({username,password}));

    newUser.save()
     .then(() => res.json("user added !!"))
     .catch(err => res.status(400).json("Error : " + err))
})


//delete
router.route('/:id').delete((req,res) => {
    Users.findByIdAndDelete(req.params.id)
    .then(() => res.json("User Deleted"))
    .catch(err => res.status(400).json("Error : " + err))
})


//upadate
router.route('/update/:id').post((req,res) => {
    Users.findById(req.params.id)
     .then(user => {
        user.username = req.body.username;
        user.password = req.body.password;

        user.save()
         .then(() => res.json("user updated"))
         .catch(err => res.status(400).json("Error : " + err))
     })
     .catch(err => res.status(400).json("Error : " + err))
})

module.exports = router;
