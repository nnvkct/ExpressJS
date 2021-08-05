import { join } from "path";

const __dirname = "/sandbox/src";

export var authController = {
  index: function (req, res) {
    res.render(join(__dirname, "views/auth/index"));
  }
};
