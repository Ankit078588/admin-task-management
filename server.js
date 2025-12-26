import "dotenv/config";
import express from "express";
import { connectDB } from "./lib/db.js";


const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({extended: true}));




// health route
app.get('/', (req, res) => res.send('Healthy'));


// Routes
import AuthRoutes from "./routes/auth.route.js"
import taskRoutes from "./routes/task.route.js";
app.use('/api/auth', AuthRoutes);
app.use("/api/tasks", taskRoutes);





app.listen(PORT, async () =>{
    console.log(`Server running on PORT: ${PORT}`);
    await connectDB();
});


