const {
  getAllPosts,
  createPost,
  getPostById,
  updatePost,
  deletePosts,
} = require("../services/postsService");



const getAllPostsController = async (req, res) => {
  try {
    const posts = await getAllPosts();
    res.status(200).json(posts); // 200 OK successful response with the list of posts
  }catch (error) {
    res.status(500).json({ message: error.message }); // 500 Internal Server Error response with the error message
  }
}

const getPostByIdController = async (req, res) => {
  try {
    const post = await getPostById(req.params.id);
    res.status(200).json(post); // 200 OK successful response with the requested post
  } catch (error) {
    res.status(404).json({ message: error.message }); // 404 Not Found response with the error message
  }
};


const createPostController = async (req, res) => {
  try {
    const post = await createPost(req.body);
    res.status(201).json(post); // 201 Created successful response with the created post
    } catch (error) {
    res.status(400).json({ message: error.message }); // 400 Bad Request response with the error message
  }
};

const updatePostController = async (req, res) => {
  try {
    const post = await updatePost(req.params.id, req.body);
    res.status(200).json(post); // 200 OK successful response with the updated post
  } catch (error) {
    res.status(400).json({ message: error.message }); // 400 Bad Request response with the error message
  }
};

const deletePostController = async (req, res) => {
  try {
    await deletePosts(req.params.id);
    res.status(204).send(); // 204 No Content successful response indicating the post was deleted
    } catch (error) {
    res.status(400).json({ message: error.message }); // 400 Bad Request response with the error message
  }
};

module.exports = {
  getAllPostsController,
  getPostByIdController,
    createPostController,
    updatePostController,
    deletePostController
}
