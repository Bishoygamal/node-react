const express = require('express')
const {getPosts , createPost} = require('../controllers/post')
const {requiresSignin} = require('../controllers/auth')
const validator = require('../validator/index')
const router = express.Router()

router.get('/',requiresSignin,getPosts)
router.post('/post',validator.createPostValidator, createPost)

module.exports =router;