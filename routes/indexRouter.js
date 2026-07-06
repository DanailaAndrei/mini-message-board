const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

const { Router } = require("express");
const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

indexRouter.get("/new", (req, res) => {
  res.render("form");
});

indexRouter.post("/message", (req, res) => {  
  res.render("message", { txt: req.body.txt });
});

indexRouter.post("/new", (req, res) => {
  messages.push({ text: req.body.msg, user: req.body.name, added: new Date() });

  res.redirect("/");
});

module.exports = indexRouter;