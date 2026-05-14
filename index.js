const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const router = require('./routes/todoRoutes');


const live_URL = "mongodb://Protegido:PROGEN6@ac-ocbaonu-shard-00-00.2vofczk.mongodb.net:27017,ac-ocbaonu-shard-00-01.2vofczk.mongodb.net:27017,ac-ocbaonu-shard-00-02.2vofczk.mongodb.net:27017/TODO?ssl=true&replicaSet=atlas-8tt777-shard-0&authSource=admin&appName=Cluster0"
//"mongodb+srv://Protegido:PROGEN6@cluster0.2vofczk.mongodb.net/TODO?appName=Cluster0";
///mongodb://localhost:27017//localhost:27017 = is the default connection string for MongoDB running on the local machine
const local_URL="mongodb://localhost:27017/TODO";

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
