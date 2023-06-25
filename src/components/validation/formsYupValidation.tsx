import * as yup from "yup";

//define regExp
const phoneRegExp =
  /[0۰][9۹]([0-39۹\u06F0-\u06F3])[0-9\u06F0-\u06F9]-?[0-9\u06F0-\u06F9]{3}-?[0-9\u06F0-\u06F9]{4}/gu;
const passwordRegExp = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

//validate properties
const username = yup.string().required().min(3).max(20);
const email = yup.string().email().required();
const phone = yup
  .string()
  .matches(phoneRegExp, "phone must be a valid phone number")
  .required();
const password = yup
  .string()
  .matches(
    passwordRegExp,
    "password must contain at least an uppercase, a lowercase, a number and an especial character"
  )
  .required()
  .min(8);
const confirmPassword = yup
  .string()
  .oneOf(
    [yup.ref("password")],
    "password must contain at least a uppercase, a lowercase, a number and a especial character"
  )
  .required();

//export schemas
export const SginInFormSchema = yup.object().shape({
  username,
  password,
});
export const SignUpFormSchema = yup.object().shape({
  username,
  email,
  phone,
  password,
  confirmPassword,
});
