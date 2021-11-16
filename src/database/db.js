const mongoose = require('mongoose');
const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost/dogFood', {
            useNewUrlParser: true,
            useUnifiedTopology: true, 
        });
        mongoose.Promise = global.Promise;
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDB;