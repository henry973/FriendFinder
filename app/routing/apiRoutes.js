var friends = require("../data/friends");



module.exports = function(app) {
 

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  
  

  app.post("/api/friends", function(req, res) {
    var bestMatch = {
        name: "",
        photo: "",
        friendDifference: 1000

    }
    if (tableData.length < 5) {
      tableData.push(req.body);
      res.json(true);
    }
    else {
      waitListData.push(req.body);
      res.json(false);
    }
  });

 
  app.post("/api/clear", function(req, res) {
    tableData.length = [];
    waitListData.length = [];

    res.json({ ok: true });
  });
};