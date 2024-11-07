const express = require("express")
const cors = require("cors");
const PORT =5000
const app = express()

app.use(cors());
app.use(express.json());

// Middleware to log incoming requests
app.use((req, res, next) => {
    console.log(`${req.method} request made to: ${req.url}`);
    next(); // Ensure the request continues to the route handler
});

const todo = []

app.post("/",(req,res)=>{

    console.log("req.body:",req.body);
    
    try {
        let { email, password } = req.body;
            if (!email || !password) {
                return res.status(400).json({ error: "Title and description are required." });
            }
        let counter = todo.length;
        let newTodo = { id: counter+1, title: email, description: password };
        todo.push(newTodo);
        res.status(201).json(todo);
      } catch (error) {
        res.status(500).json({ error: "An error occurred while creating the todo item." });
      }
})


app.listen(PORT,()=>console.log(`server is running at port: ${PORT}`))