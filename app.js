const express = require("express");
const reload = require("reload");
const http = require("http");
const helmet = require("helmet");

require('dotenv').config();

const appRoutes = require("./routes/routes");
const adminRoutes = require("./routes/adminRoute");

const app = express();
app.use(helmet());

const port = process.env.PORT || 3000;

app.use(express.urlencoded({extended:false}));
app.use(express.static("public"));

app.set("view engine","ejs");


app.use(adminRoutes);
app.use(appRoutes);




app.listen(port);

// const server = http.createServer(app);
// server.listen(3000);

// reload(app);

// reload(app).then(()=> {
    
//   }).catch((err)=> {
//     if (err) throw err;
//   });

