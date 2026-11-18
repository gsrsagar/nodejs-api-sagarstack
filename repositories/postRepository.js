const Posts = require('../models/Posts');


const getAll = async () => {
    return await Posts.find();
}

const getById = async (id) => {
    return await Posts.findById(id);
}

const create = async (postData) => {
    const post = new Posts(postData);
    return await post.save();
}

const update = async (id, postData) => {
    return await Posts.findByIdAndUpdate(id, postData, { new: true });
}

const deleteById = async (id) =>{
    return await Posts.findByIdAndDelete(id);
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    deleteById
}