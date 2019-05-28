const express = require("express");
const reload = require("reload");
const http = require("http");
const helmet = require("helmet");

require('dotenv').config();

const appRoutes = require("./routes/routes");

const app = express();
app.use(helmet());

const port = process.env.PORT || 3000;

app.use(express.urlencoded({extended:false}));
app.use(express.static("public"));

app.set("view engine","ejs");

app.use(appRoutes);

const server = http.createServer(app);
server.listen(port);

reload(app);

// reload(app).then(()=> {
    
//   }).catch((err)=> {
//     if (err) throw err;
//   });

