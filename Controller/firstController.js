import user from "../Modal/firstModal.js";

export const sample = async (req, res) => {
  const { uid, email } = req.body;
  try {
    const newUser = new user({ uid, email });
    await newUser.save();
    return res.status(201).json({
      mssg: "success",
    });
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      mssg: "eror",
    });
  }
};
