const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require("body-parser");
require("dotenv").config({ path: "./src/config/.env" });
const authRouter = require("./src/Routes/AuthRoutes/auth.routes");
const userRouter = require("./src/Routes/UserRoutes/user.routes");
const adminRouter = require("./src/Routes/AdminRoutes/admin.routes");

const corsOption = {
      origin: 'http://localhost:3000',
      methods: "*",
      allowedHeaders: ['Content-Type', 'Authorization']
    };

app.get('/', (req,res)=>{
     res.send('hello')
})
app.use(bodyParser.json());
app.use(cors(corsOption));
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/admin", adminRouter);



const PORT = 5000 ;
app.listen(PORT, () => {
  console.log(`Serveur Express démarré sur le port ${PORT}`);
});