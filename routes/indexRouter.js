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

indexRouter.get("/message", (req, res) => {
  let params = new URLSearchParams(req.url);
  let txt = params.values().next().value;
  
  res.render("message", { txt: txt });
});

indexRouter.post("/new", (req, res) => {
  messages.push({ text: req.body.msg, user: req.body.name, added: new Date() });

  res.redirect("/");
});

module.exports = indexRouter;