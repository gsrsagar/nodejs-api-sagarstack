

const postValidator =(body)=>{
    const { title, description } = body;
    return !(!title || !description);
}


module.exports = {
    postValidator
}