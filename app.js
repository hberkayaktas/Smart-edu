const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');
const methodOverride = require('method-override');
const pageRoute = require("./routes/pageRoute");
const courseRoute = require("./routes/courseRoute");
const categoryRoute = require("./routes/categoryRoute");
const userRoute = require("./routes/userRoute");

const app = express();

//Connect DB
connectStringB = "mongodb://localhost/smartedu-db"
mongoose.connect(connectStringB).then(() => {
  console.log("DB Connected Successfuly");
});

//teplate engine
app.set("view engine", "ejs");

//Global Variable
global.userIN = null;

//middlewares;
app.use(express.static("public"));
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(
  session({
    secret: "smartEdu_session_string", //buraya istediğini girebilirsin
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: connectStringB }),
  })
);
app.use("*", (req, res, next) => {
  userIN = req.session.userID;
  next();
});
app.use(flash());
app.use((req, res, next) => {
  res.locals.flashMessages = req.flash();
  next();
})
app.use(methodOverride('_method',{
  methods:['POST','GET'],
}))


//routes
app.use("/", pageRoute);
app.use("/courses", courseRoute);
app.use("/categories", categoryRoute);
app.use("/users", userRoute);

const port = 3000;
app.listen(port, () => {
  console.log(`App started on port ${port}`);
});
