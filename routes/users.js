const express = require('express')
const {userById,allUsers,getUser,updateUser, deleteUser} = require('../controllers/users')
const { requiresSignin } = require('../controllers/auth')

const router = express.Router()

router.get('/users',allUsers)
router.get('/user/:userId',requiresSignin,getUser)
router.put('/user/:userId',requiresSignin,updateUser)
router.delete('/user/:userId',requiresSignin,deleteUser)


router.param("userId",userById)
module.exports =router;