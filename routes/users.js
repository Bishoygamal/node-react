const express = require('express')
const {requiresSignin} = require('../controllers/auth')
const {userById,allUsers,getUser} = require('../controllers/users')

const router = express.Router()

router.get('/users',allUsers)
router.get("/user/:userId",requiresSignin,getUser)

router.param("userId",userById)
module.exports =router;