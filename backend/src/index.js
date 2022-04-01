const express=require("express");
const app=express();
const cors=require("cors");
app.use(cors());
const Usercontroller=require("./controllers/userController")
const productController = require("./controllers/productController")
const SignupController=require("./controllers/SignupController")
const loginController=require("./controllers/loginController")
const passport1 = require("./configu/google-oauth");

const cityController = require("./controllers/cityController");
const areaController = require("./controllers/areaController");
const CityId_BikeIdcontroller = require("./controllers/cityIdbikeId.controller");


app.use(express.json());
app.use("/users", Usercontroller);
app.use("/Signup", SignupController);
app.use("/login",loginController);
app.use("/products", productController);

app.use("/cities",cityController);
app.use("/areas", areaController);
app.use("/citybikes",CityId_BikeIdcontroller)


app.get('/auth/google',
  passport1.authenticate('google', { scope: ['profile', 'email'] }));
 
app.get(
'/auth/google/callback', 
  passport1.authenticate('google', { failureRedirect: '/login', session:false } ),

  function(req, res) {
    // const token = generateToken(req.user)
    return res.status(200).send({user:req.user})
  }
)

module.exports=app;