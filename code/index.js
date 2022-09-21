const express = require("express");
const app = express();
const port = 8000;
const path = require("path");
const hbs = require("hbs");
// const port= process.env.port || 8000;

// console.log(path.join(__dirname,"../public"))
const spath = path.join(__dirname, "../public")
const tempath = path.join(__dirname, "../templetes/views")
const parpath = path.join(__dirname, "../templetes/partials")


app.set("view engine", "hbs");
app.set("views",tempath)
hbs.registerPartials(parpath)

app.use(express.static(spath));
app.get("/", (req, res) => {
    res.render("index.hbs");
});
app.get("/about", (req, res) => {
    res.render("about.hbs");
});
app.get("/weather", (req, res) => {
    res.render("weather.hbs");
});
app.get("*", (req, res) => {
    res.render("404error",{
        errmsg:"page not found"
    });
});
app.listen(port, () => {
    ` i am listening at ${port}`
})