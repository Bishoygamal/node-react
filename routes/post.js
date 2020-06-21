const express = require('express')
const {getPosts , createPost} = require('../controllers/post')
const {userById} = require('../controllers/users')
const {requiresSignin} = require('../controllers/auth')
const validator = require('../validator/index')
const router = express.Router()

router.get('/',getPosts)
router.post('/post',requiresSignin,validator.createPostValidator, createPost)

router.param("userId",userById)
module.exports =router;