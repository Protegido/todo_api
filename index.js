const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const router = require('./routes/todoRoutes.js');


const live_URL = "mongodb+srv://Protegido:PROGEN6@cluster0.2vofczk.mongodb.net/AuthenticationDB=Cluster0";
const local_URL = "mongodb://localhost:27017/AuthenticationDB";
//mongodb://localhost:27017 = is the default connection string for MongoDB running on the local machine

//connect to the database
mongoose
.connect(live_URL) 
//if the connection is successful
.then(() => console.log("MongoDB Connected")) 
//if the connection fails
.catch((err) => console.error("Could not connect to MongoDB", err)); 

const app = express();
app.use(cors());
app.use(express.json());
app.use("/todo", router);

app.get('/', (req, res) => {
  res.send('Hello World!');
});
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
