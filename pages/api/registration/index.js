const handler = (req, res) => {
  if (req.method === "POST") {
    const { email } = req.body;
    const isEmailValid =
      /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email) &&
      email.trim() !== "";
    if (!isEmailValid) {
    return res.status(422).json("Enter a valid Email Address.")
    }
    return res.json("Signed up!");
  }
};

export default handler;
