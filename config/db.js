const mongoose = require('mongoose');


const connectDB = async () => {
    const mongoDBURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/flipkar';
    try{
        await mongoose.connect(mongoDBURI);
        console.log('Connected to MongoDB');
    }catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
};


module.exports = connectDB;