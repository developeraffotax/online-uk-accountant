const sendMail = require("../utils/sendMail");
const path = require("path");

exports.sendMessage = async (req, res) => {
  const { fullname, email, phone, message } = req.body;

  try {
    const result = await sendMail(fullname, email, phone, message);

    if (result) {
      res.sendFile(path.resolve(__dirname, "./views", "success.html"));
    } else {
      res.status(404).json({ message: "Failed to send message" });
    }
  } catch (error) {
    console.log(error);
  }
};
