const express = require("express");
const app = express();
const port = 3000;
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    const queries = Object.keys(req.query)
        .map((k) => `${k}: ${req.query[k]}`)
        .join("\n");
    return res.send(queries);
});
app.post("/", (req, res) => {
    const bodies = Object.keys(req.body)
        .map((k) => `${k}: ${req.body[k]}`)
        .join("\n");
    return res.send(bodies);
});
app.put("/", (req, res) => {
    const bodies = Object.keys(req.body)
        .map((k) => `${k}: ${req.body[k]}`)
        .join("\n");
    return res.send(bodies);
});
app.delete("/", (req, res) => {
    const bodies = Object.keys(req.body)
        .map((k) => `${k}: ${req.body[k]}`)
        .join("\n");
    return res.send(bodies);
});
app.listen(port, () => console.log(`Server listening on port ${port}`));
