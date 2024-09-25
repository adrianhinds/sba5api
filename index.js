const express = require("express");
const app = express();
const port = 3000;

const users = require("./data/users");
const posts = require("./data/posts");
const comments = require("./data/comments");
// get requests
app.get("/api/users", (req, res) => {
  res.json(users);
});
app.get("/api/posts", (req, res) => {
    res.json(posts);
  });
  app.get("/api/comments", (req, res) => {
    res.json(comments);
  });
  app.get("/api/users/:id", (req, res) => {
    const user = users.find((u) => u.id == req.params.id);
    if (user) res.json(user);
  });
// post request
app.post('/', (req,res) => {
    if (req.body.name && req.body.username && req.body.content) {
      if (users.find((u) => u.username == req.body.username)) {
        res.json({ error: "Username Already Taken" });
        return;
}

 const user = {
    id: users[users.length - 1].id + 1,
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
 };
  
  users.push(user);
  res.json(users[users.length - 1]);
} else res.json({ error: "Insufficient Data" });
});
// patch and delete request
app
  .route("/api/users/:id")
  .patch((req, res) => {

    const user = users.find((u, i) => {
      if (u.id == req.params.id) {
        for (const key in req.body) {
          users[i][key] = req.body[key];
        }
        return true;
      }
    });
  })
  .delete((req, res) => {
    const user = users.find((u, i) => {
      if (u.id == req.params.id) {
        users.splice(i, 1);
        return true;
      }
    });
  });
// error handler
app.use((req, res) => {
    res.status(404);
    res.json({ error: "Resource Not Found"})
});
app.listen(port, () => {
    console.log(`Listening at ${port}`)
})
