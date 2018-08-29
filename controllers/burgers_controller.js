var express=require("express");
var burg=require("../models/burger.js");
var router = express.Router();

router.get("/", function(req,res){
	res.redirect("prettypatties")
});
// Create all our routes and set up logic within those routes where required.
router.get("/prettypatties", function(req, res) {
    burg.selectAll(function(data) {
        var hbsObject = {
          burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
      });
   
});

router.post("/prettypatties/update/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burg.updateOne({
      "devoured": req.body.devoured
    }, condition, function(data) {
      res.redirect("/prettypatties")
    });
  });

router.post("/prettypatties/create", function(req, res) {
    burg.insertOne([
      "burger_name"
    ], [
      req.body.burger_name, 
    ], function(data) {
      // Send back the ID of the new quote
      res.redirect("/prettypatties");
    });
  });
  module.exports = router;
