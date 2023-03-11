const express = require("express");
const router = express.Router();

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

//GET home page
router.get("/", function(req, res) {
  res.render("index", { title: "Mini Messageboard" , messages: messages })
})

router.get("/new", function(req, res) {
  res.render("new", { title: "Add a new message"})
})

router.post("/new", function(req, res) {
  messages.push({text: req.body.message, user: req.body.name, added: new Date()});
  res.redirect("/")
})

module.exports = router;



