module.exports = app => {
    const customers = require("../controllers/customer.controller.js");
  
    var router = require("express").Router();
  
    router.get("/", customers.processData);
  
    app.use("/api/customers", router);
  };
  