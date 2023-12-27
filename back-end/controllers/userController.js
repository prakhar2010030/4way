import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import { User } from "../models/user.js";
import bcrypt from "bcrypt";

export const signUp = catchAsyncError(async (req, res, next) => {
  const { name, email, password, confirmedPassword } = req.body; // destructuring

  let user = await User.findOne({ email });

  if (!name || !email || !password || !confirmedPassword)
    return res.status(401).json({
      success: false,
      message: "required all entries",
    });

  if (user)
    return res.status(401).json({
      success: false,
      message: "user already exist",
    });

  if (password !== confirmedPassword)
    return res.status(401).json({
      success: false,
      message: "password doesn't match",
    });

  const hashedPassword = await bcrypt.hash(password, 10);
  const hashedConfirmPassword = await bcrypt.hash(confirmedPassword, 10);

  user = await User.create({
    name,
    email,
    password: hashedPassword,
    confirmedPassword: hashedConfirmPassword,
  });
  const token = user.getJWTToken();

  res.status(201).json({
    success: true,
    message: "user signed up successfully",
    token:token
  });
});

export const login = catchAsyncError(async (req, res, next) => {
  // console.log(req.body);
  const { email, password,token } = req.body;

  const user = await User.findOne({ email });
  console.log(user);

  if (!email || !password ||!token) {
    return res.status(401).json({
      success: false,
      message: "email/password/token required",
    });
  }
  if (!user)
    return res
      .status(400)
      .json({ success: false, message: "please register first" });

  const comparedValue = await bcrypt.compare(password, user.password);
  console.log(comparedValue);
  if (!comparedValue) {
    return res.status(401).json({
      success: false,
      message: "email/password required",
    });
  }

  res.status(200).json({
    success: true,
    message: "user logged in successfully",
  });
});
