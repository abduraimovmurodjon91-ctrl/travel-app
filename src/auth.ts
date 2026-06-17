import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./firebase";
interface AuthData {
  email: string;
  password: string;
}
export const signup = async ({ email, password }: AuthData) => {
  return await createUserWithEmailAndPassword(auth, email, password);
};
export const signin = async ({ email, password }: AuthData) => {
  return await signInWithEmailAndPassword(auth, email, password);
};
