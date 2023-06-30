import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';

interface IUser {
  id: string;
  username: string;
  email: string;
  password: string;

  createdAt: string;
  updatedAt: string;
}

const userSchema = new Schema<IUser>(
  {
    id: String,
    username: String,
    email: String,
    password: String,
  },
  { timestamps: true }
);

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  try {
    const hashedPassword = await bcrypt.hash(this.password, 10);
    this.password = hashedPassword;
  } catch (e) {
    return next(e as Error);
  }
});

const User = model('User', userSchema);

export default User;
