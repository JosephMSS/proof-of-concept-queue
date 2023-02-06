var express = require("express");
var router = express.Router();
const { DocumentsService } = require("../service/documents.service");
const service = new DocumentsService();
/* GET home page. */
router.get("/task/:id", function (req, res, next) {
  const response = service.create(req.params);
  res.json({ createdAt: response });
});

module.exports = router;
