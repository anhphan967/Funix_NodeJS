const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const errorController = require("./controllers/error");
const User = require("./models/user");
const mongoose= require("mongoose")

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  User.findById("62525d677157157ec1c8e9e9")
    .then((user) => {      
      req.user = user;
      next();
    })
    .catch((err) => console.log(err));
});

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoose.connect('mongodb+srv://nodejs:batho123@cluster0.ipyxs.mongodb.net/shop?retryWrites=true&w=majority')
.then((result) => {
  User.findOne().then((user) => {
    if (!user) {
      const user = new User({
        name: "tuan",
        email: "tuan@test.com",
        cart: [],
      });
      user.save();
    }
  });
  app.listen(3000);
})
  .catch(err=>{
    console.log(err)
  })