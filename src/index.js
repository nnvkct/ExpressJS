import bodyParser from "body-parser";
import express from "express";
import { join } from "path";
import userRoute from "./routes/user.route.js";
import authRoute from "./routes/auth.route.js";
import cookieParser from "cookie-parser";

const __dirname = "/sandbox/src";

const app = express();
const port = 3000;

app.set("views", join(__dirname, "views"));
app.set("view engine", "pug");

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cookieParser());

app.use(express.static(join(__dirname, "public")));

app.use("/users", userRoute);
app.use("/auth", authRoute);

app.get("/cookie", function (req, res, next) {
  res.cookie("user-id", "Hellofsdfs");
  res.send("Hello");
});

app.get("/", (req, res) => {
  res.render("index", { name: "NNV" });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
