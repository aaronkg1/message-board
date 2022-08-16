var express = require("express");
var router = express.Router();

const messages = [
  {
    text: "Hello there!",
    user: "Aaron",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

router.post("/new", (req, res, next) => {
  const user = req.body.user;
  const message = req.body.text;
  const added = new Date();
  messages.push({ text: message, user: user, added: added });

  res.redirect("/");
});

module.exports = router;
