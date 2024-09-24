const express = require("express");
const router = express.Router();

const comments = require("../data/commets");

router
  .route("/")
  .get((req, res) => {
    const links = [
      {
        href: "comments/:id",
        rel: ":id",
        type: "GET",
      },
    ];

    res.json({ comments, links });
});
router
  .route("/:id")
  .get((req, res, next) => {
    const comment = comments.find((u) => u.id == req.params.id);
    const links = [
        {
          href: `/${req.params.id}`,
          rel: "",
          type: "PATCH",
        },
        {
          href: `/${req.params.id}`,
          rel: "",
          type: "DELETE",
        },
      ];
  
      if (comment) res.json({ comment, links });
      else next();
});

module.exports = router;