const mongoose = require("mongoose");

module.exports = async () => {
    try {
        // const connectionParams = {
        //     useNewUrlParser: true,
        //     useCreateIndex: true,
        //     useUnifiedTopology: true,
        // };
        await mongoose.connect(
            // "mongodb://localhost:27017/todo-app"
            "mongodb+srv://root:root@cluster0.rbmkthk.mongodb.net/?retryWrites=true&w=majority"
        
        );
        console.log("Connected to database.");
    } catch (error) {
        console.log("Could not connect to database.", error);
    }
};
