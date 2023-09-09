import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import { UserInterface } from "../interfaces/user.interface";

const HASH_ROUNDS = 10;

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    lowercase: true,
    minLength: [1, "first name must be more then 1 character"],
    maxLength: [25, "first name can not be more than 25 characters"],
  },
  lastName: {
    type: String,
    required: true,
    lowercase: true,
    minLength: [1, "last name must be more then 1 character"],
    maxLength: [25, "last name can not be more than 25 characters"],
  },
  username: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
    minlength: [6, "Username must be more than 5 characters"],
    maxLength: [25, "Username can not be more than 25 characters"],
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    select: false,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: false,
  },
  dateJoined: {
    type: Date,
    default: () => new Date(),
  },
});

userSchema.pre("save", async function (next) {
  const thisObj = this as UserInterface;

  if (!this.isModified("password")) {
    return next();
  }

  try {
    const salt = await bcrypt.genSalt(HASH_ROUNDS);
    thisObj.password = await bcrypt.hash(thisObj.password, salt);
    return next();
  } catch (e: any) {
    return next(e);
  }
});

// userSchema.methods.validatePassword = async function (pass: string) {
//     return bcrypt.compare(pass, this.password);
// };

export default mongoose.model<UserInterface>("User", userSchema);
