const express = require("express");
const app = express();
const port = 3000;
app.get("/factorial", (req, res) => {
    const num = parseInt(req.query.number);
    return res.redirect(`http://localhost:3000/factorial/${num}`);
});

app.get("/factorial/:number", (req, res) => {
    const num = parseInt(req.params.number);
    let ans = 1;
    for (let i = 1; i <= num; i++) {
        ans *= i;
    }
    return res.send(`${ans}`);
});
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
