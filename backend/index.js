const express = require("express");
const tasks = require("./routes/tasks");
const connection = require("./database");
const cors = require("cors");

const app = express();
app.get("/",(req,res)=>{
    res.send("hello")
})
app.listen(3002,()=>{
    console.log("Backend is running");
})





connection();

app.use(express.json());
app.use(cors());

app.use("/api/tasks", tasks);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));
