const { authService } = require("../services");

const login = async (req, res) => {
  try {
    const token = await authService.login(req.body);
    res.status(200).json({ message: "login successfully", token: token });
  } catch (err) {
    res.status(500).json({ action: "login", error: err });
  }
};

module.exports = { login };
