const express = require('express');
const pageRoute = require('./routes/pageRoute');


const app = express();

//teplate engine
app.set("view engine","ejs");

//middlewares;
app.use(express.static("public"));


//routes
app.use('/',pageRoute);



const port = 3000;
app.listen(port, () => {
      console.log(`App started on port ${port}`);
});
