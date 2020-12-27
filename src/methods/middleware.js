module.exports = function(req,res,next){

    console.log("current rooute is " + req.originalUrl);
   
    next();
  }

