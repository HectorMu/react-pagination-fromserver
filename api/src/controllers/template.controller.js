const connection = require("../database");
const jwt = require("jsonwebtoken");

const controller = {};

controller.test = (req, res) => {
  res.json({ Test: "Hi, im working" });
};

controller.ListAll = async (req, res) => {
  const query = req.query;

  const limit = query.limit || 5;
  const offSet = query.offSet || 5;

  const users = await connection.query(
    `select * from usuarios limit ${limit} offset ${offSet}`
  );

  const results = await connection.query(
    "select count(*) as count from usuarios"
  );

  res.json({ users, totalCount: results[0].count });
};
controller.ListOne = async (req, res) => {};

controller.Save = async (req, res) => {};

controller.Update = async (req, res) => {};

controller.Delete = async (req, res) => {};

module.exports = controller;
