import jwt from "jsonwebtoken";

export const generateToken = (userId, response) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  response.cookie("jwt", token, {
    httpOnly: true, // prevents XSS attacks cross-site scripting attacks
    secure: process.env.NODE_ENV !== "development",
    maxAge: 7 * 24 * 60 * 60 * 1000,
    sameSite: "strict", // CSRF attacks cross-site request forgery attacks
  });

  return token;
};
