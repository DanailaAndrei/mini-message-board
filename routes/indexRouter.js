const db = require("../db/queries");
const { Router } = require("express");
const indexRouter = Router();

indexRouter.get("/", async (req, res) => {
  let messages = await db.getAllMessages();
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

indexRouter.get("/new", (req, res) => {
  res.render("form");
});

indexRouter.post("/message", (req, res) => {  
  res.render("message", { txt: req.body.txt });
});

indexRouter.post("/new", async (req, res) => {
  await db.insertMessage(req.body.name, req.body.msg);

  res.redirect("/");
});

module.exports = indexRouter;