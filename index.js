const express = require("express");
const app = express();
const port = 3000;

const users = require("./data/users");
const posts = require("./data/posts");



// Creating a GET route for the entire users database.
// This would be impractical in larger data sets.
app.get("/api/users", (req, res) => {
  res.json(users);
});
/* app.post('/', async (req,res) => {
    
})

app.patch('/', async (req,res) => {
    
})

app.delete('/', async (req,res) => {

})
*/
app.use((req, res) => {
    res.status(404);
    res.json({ error: "Resource Not Found"})
});
app.listen(port, () => {
    console.log(`Listening at ${port}`)
})
