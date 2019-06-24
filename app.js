const express = require("express");
const reload = require("reload");
const http = require("http");
const multer = require("multer");
const helmet = require("helmet");
const fs = require("fs");
const path = require("path");
const imgP = path.join(__dirname,"public","img");

require('dotenv').config();

const appRoutes = require("./routes/routes");
const adminRoutes = require("./routes/adminRoute");

const app = express();
app.use(helmet());

const port = process.env.PORT || 3000;

app.use(express.urlencoded({extended:true}));

const storage = multer.diskStorage({
  destination: (req,file,cb)=>{
      cb(null,imgP)
  },
  filename: (req,file,cb)=>{
    let imgName = file.originalname.substr(0,13);
      cb(null,imgName+ "_" + Date.now());
  }
}); 
app.use(multer({storage:storage}).array("img",8));

app.use(express.static("public"));

app.set("view engine","ejs");

app.use(adminRoutes);
app.use(appRoutes);

const server = http.createServer(app);
server.listen(port);

// app.listen(3000);



