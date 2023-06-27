const { authProvider } = require("../providers");
const jwt = require("jsonwebtoken");
const { SERVER_SECRET } = require("../middlewares/authMiddleware");

const login = async (body) => {
  const { username } = body;
  try {
    const user = await authProvider.validateUser(body);
    if (!user) throw "User not found";
    const token = jwt.sign({ username }, SERVER_SECRET);
    return token;
  } catch (err) {
    throw err;
  }
};

module.exports = { login };
