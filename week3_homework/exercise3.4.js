const express = require("express");
const app = express();
const port = 3000;
app.use(express.urlencoded({ extended: true }));
app.set("views", `${__dirname}/views`);
app.set("view engine", "pug");

app.get("/", (req, res) => {
    return res.render("exercise3.4.pug");
});
app.post("/login", (req, res) => {
    const password = req.body.password;
    const username = req.body.username;
    const introduction = req.body.introduction;
    return res.send(
        `Username: ${username} Password: ${password}\n Introduction:${introduction}`
    );
});
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
