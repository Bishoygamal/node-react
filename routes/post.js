const express = require("express");
const { getPosts, createPost, postsByUser ,postById,isPoster,deletePost, updatePost } = require("../controllers/post");
const { userById } = require("../controllers/users");
const { requiresSignin } = require("../controllers/auth");
const validator = require("../validator/index");
const router = express.Router();

router.get("/", getPosts);

router.post(
  "/post/new/:userId",
  requiresSignin,
  createPost,
  validator.createPostValidator
);

router.get("/posts/by/:userId", requiresSignin, postsByUser);
router.put("/post/:postId",requiresSignin,isPoster,updatePost)
router.delete("/post/:postId",requiresSignin,isPoster,deletePost)

router.param("userId", userById);
router.param("postId", postById);
module.exports = router;
