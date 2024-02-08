const handler = (req, res) => {
  if (req.method === "POST") {
    const { email, name, text } = req.body;
    const isEmailValid =
      /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email) &&
      email.trim() !== "";
    if (!isEmailValid)
      return res.status(422).json("Enter a valid Email Address.");
    if (!name) return res.status(422).json("Enter Your Name.");
    if (!text) return res.status(422).json("Enter Your Text.");

    return res.status(201).json("Added the Comment.");
  }
};

export default handler;
