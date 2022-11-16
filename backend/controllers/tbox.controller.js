const tboxService = require("../services/tbox.service");

async function getData(req, res, next) {
  res.json(await tboxService.getData(req.query));
}

async function getList(req, res, next) {
  res.json(await tboxService.getFiles());
}

module.exports = {
  getData,
  getList,
};
