const express = require("express");
const app = express();
const port = 3000;
app.set("views", `${__dirname}/views`);
app.set("view engine", "pug");
app.get("/board/page/:page", (req, res) => {
    const pagen = { pagenum: req.params.page };
    return res.render("exercise3.2.pug", pagen);
});
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
