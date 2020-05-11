const express = require("express");
const db = require("../data/dbConfig");

const route = express.Router();

route.get("/", (req, res) => {
  db("accounts")
    .then((accounts) => {
      res.status(200).json(accounts);
    })
    .catch((err) => {
      res.status(500).json({ erorMessage: "there was an error" });
    });
});

route.post("/", (req, res) => {
  db("accounts")
    .insert(req.body, "id")
    .then((account) => {
      res.status(201).json(account);
    })
    .catch((err) => {
      res
        .status(500)
        .json({ erorMessage: "there was an error posting the account" });
    });
});

route.get("/:id", (req, res) => {
  const { id } = req.params;
  db("accounts")
    .where({ id })
    .first()
    .then((account) => {
      res.status(200).json(account);
    })
    .catch((err) => {
      res
        .status(500)
        .json({ erorMessage: "there was an error finding the account" });
    });
});

route.put("/:id", (req, res) => {
  const { id } = req.params;
  db("accounts")
    .where({ id })
    .update(req.body)
    .then((account) => {
      res.status(200).json(account);
    })
    .catch((err) => {
      res.status(500).json({ erorMessage: "there was an error" });
    });
});

route.delete("/:id", (req, res) => {
  const { id } = req.params;
  db("accounts")
    .where({ id })
    .del()
    .then((account) => {
      res.status(200).json(account);
    })
    .catch((err) => {
      res
        .status(500)
        .json({ erorMessage: "there was an error removing the account" });
    });
});

module.exports = route;
