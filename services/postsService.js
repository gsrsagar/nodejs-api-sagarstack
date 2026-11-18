const { getAll,getById,create,update, deleteById } = require('../repositories/postRepository');

const { postValidator} = require('../utils/postsValidators');
 const AppError = require('../errors/AppError');



const  getAllPosts = async () =>{
    return await getAll();
}

const getPostById = async (id) =>{
    return await getById(id);
}

const createPost = async (postData) =>{
    if (!postValidator(postData)) {
    throw new AppError('Invalid data', 400);
}

    return await create(postData);
}

const updatePost = async (id, postData) =>{
    if(!postValidator(postData)){
         return next(new AppError('Invalid data ', 400));
    }

    return await update(id, postData);
}

const deletePosts = async (id) =>{
    return await deleteById(id);
}

module.exports = {
    getAllPosts,
    getPostById,
    createPost,
    updatePost,
    deletePosts
}