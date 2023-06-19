const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config({ path: "./src/config/.env" });const authRouter = require("./src/Routes/AuthRoutes/auth.routes");
const userRouter = require("./src/Routes/UserRoutes/user.routes");
const adminRouter = require("./src/Routes/AdminRoutes/admin.routes");
const cors = require('cors')
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
require('dotenv').config()
const app = express();

const corsOption = {
  origin: 'http://localhost:3000',
  methods: "*",
  allowedHeaders: ['Content-Type', 'Authorization']
};
app.get('/', (req,res) =>res.send('hello'))

app.use(bodyParser.json());
app.use(cors(corsOption));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log('DB CONNECTED'))
.catch(err=>console.log(err.message))


app.use("/auth", authRouter);
app.use("/user", userRouter);
app.use("/admin", adminRouter);



const PORT = 5000 ;
app.listen(PORT, () => {
  console.log(`Serveur Express démarré sur le port ${PORT}`);
});