const express = require("express");
const {
  getAllPostsController,
  getPostByIdController,
  createPostController,
  updatePostController,
  deletePostController,
} = require("../controllers/postsController");

const router = express.Router();

router.get("/posts", getAllPostsController);
router.get("/posts/:id", getPostByIdController);
router.post("/posts",createPostController);
router.put("/posts/:id",updatePostController);
router.delete("/posts/:id",deletePostController);

module.exports = router;
