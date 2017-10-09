var express = require("express");
var bodyParser = require("body-parser");

var app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.set("view engine", "ejs");

var campgrounds = [
    // arrays of different campgrounds and images
    {name:"MountBriton", image:"https://images.unsplash.com/photo-1445308394109-4ec2920981b1?dpr=1&auto=compress,format&fit=crop&w=753&h=&q=80&cs=tinysrgb&crop="},
    {name:"SalmonCreek", image:"https://images.unsplash.com/photo-1487730116645-74489c95b41b?dpr=1&auto=compress,format&fit=crop&w=750&h=&q=80&cs=tinysrgb&crop="},
    {name:"oifyefofwrg", image:"https://images.unsplash.com/photo-1455763916899-e8b50eca9967?dpr=1&auto=compress,format&fit=crop&w=750&h=&q=80&cs=tinysrgb&crop="},    
    {name:"oifyefofwrg", image:"https://images.unsplash.com/photo-1455763916899-e8b50eca9967?dpr=1&auto=compress,format&fit=crop&w=750&h=&q=80&cs=tinysrgb&crop="},    
    {name:"Launrwrgrgg", image:"https://images.unsplash.com/photo-1455763916899-e8b50eca9967?dpr=1&auto=compress,format&fit=crop&w=750&h=&q=80&cs=tinysrgb&crop="},     
    {name:"Launrwrgrgg", image:"https://images.unsplash.com/photo-1455763916899-e8b50eca9967?dpr=1&auto=compress,format&fit=crop&w=750&h=&q=80&cs=tinysrgb&crop="},     
    {name:"Launrwrgrgg", image:"https://images.unsplash.com/photo-1455763916899-e8b50eca9967?dpr=1&auto=compress,format&fit=crop&w=750&h=&q=80&cs=tinysrgb&crop="},     
    {name:"Lauwggrgq", image:"https://images.unsplash.com/photo-1455763916899-e8b50eca9967?dpr=1&auto=compress,format&fit=crop&w=750&h=&q=80&cs=tinysrgb&crop="}      
]

//Route for landing page
app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    
    res.render("campgrounds", {campgrounds: campgrounds});
    
});

app.post("/campgrounds", function(req, res){
    // get data from the form and add it to the campground array
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name:name, image:image}
    campgrounds.push(newCampground);
    // redirect back to campground
    res.redirect("/campgrounds");


});

app.get("/campgrounds/new", function(req, res){
    res.render("new");

});


app.listen("3000", function(req, res){
    console.log("Yelpcamp Server is running!!");
});