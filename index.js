var express = require("express");

var app = express()

app.set("view engine", "ejs");

//Route for landing page
app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    var campgrounds = [
        {name: "Salmon Creek", image:"https://images.unsplash.com/photo-1487730116645-74489c95b41b?dpr=1&auto=compress,format&fit=crop&w=750&h=&q=80&cs=tinysrgb&crop="},
        {name: "Mount Briton", image:"https://images.unsplash.com/photo-1445308394109-4ec2920981b1?dpr=1&auto=compress,format&fit=crop&w=753&h=&q=80&cs=tinysrgb&crop="},
        {name: "Agbejule Rock", image:"https://images.unsplash.com/photo-1470246973918-29a93221c455?dpr=1&auto=compress,format&fit=crop&w=334&h=&q=80&cs=tinysrgb&crop="},
        {name: "IyanuMasheke", image:"https://images.unsplash.com/photo-1504851149312-7a075b496cc7?dpr=1&auto=compress,format&fit=crop&w=349&h=&q=80&cs=tinysrgb&crop="},
        {name: "Launryn Hill", image:"https://images.unsplash.com/photo-1455763916899-e8b50eca9967?dpr=1&auto=compress,format&fit=crop&w=750&h=&q=80&cs=tinysrgb&crop="}      
    ]
    res.render("campgrounds", {campgrounds: campgrounds});
    
});

app.listen("3000", function(req, res){
    console.log("Yelpcamp Server is running!!");
});