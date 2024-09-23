import * as yup from "yup";

const isDifferent = (val1: string, val2: string) => val1 !== val2;

export const registerSchema = yup
  .object({
    username: yup
      .string()
      .required("Username is required!")
      .min(3, "Username should be at least 3 characters!"),
    // phone: yup.string().required("Phone is required!"),
    email: yup
      .string()
      .required("Email is required!")
      .matches(/^[^@]+@[^@]+\.[^@ .]{2,}$/, "Email address is not Valid!"),
    password: yup
      .string()
      .required("Password is required!")
      .min(6, "Password should be at least 6 characters!"),
    confirm_password: yup
      .string()
      .required("Password confirmation is required!")
      .oneOf([yup.ref("password")], "Passwords must match"),
  })
  .required();

export const loginSchema = yup
  .object({
    username: yup
      .string()
      .required("Username is required!")
      .min(3, "Username should be at least 3 characters!"),
    password: yup
      .string()
      .required("Password is required!")
      .min(6, "Password should be at least 6 characters!"),
  })
  .required();

export const changeSchema = yup
  .object({
    oldNum: yup
      .string()
      .required("Old number is required!")
      .matches(/^\d+$/, "Old number must be digits only!")
      .min(10, "Old number must be at least 10 digits!")
      .max(15, "Old number cannot be more than 15 digits!"),

    newNum: yup
      .string()
      .required("New number is required!")
      .matches(/^\d+$/, "New number must be digits only!")
      .min(10, "New number must be at least 10 digits!")
      .max(15, "New number cannot be more than 15 digits!")
      .test(
        "is-different",
        "New number must be different from the old number!",
        function (value) {
          const { oldNumber } = this.parent;
          return isDifferent(oldNumber, value || "");
        }
      ),
  })
  .required();

export const newSchema = yup
  .object({
    newNum: yup
      .string()
      .required("New number is required!")
      .matches(/^\d+$/, "New number must be digits only!")
      .min(10, "New number must be at least 10 digits!")
      .max(15, "New number cannot be more than 15 digits!"),
  })
  .required();

export const resetSchema = yup
  .object({
    email: yup
      .string()
      .required("Email is required!")
      .matches(/^[^@]+@[^@]+\.[^@ .]{2,}$/, "Email address is not Valid!"),
  })
  .required();

export const resetPassSchema = yup
  .object({
    oldPass: yup
      .string()
      .required("Oldest Password is required!")
      .min(6, "Password should be at least 6 characters!"),
    newPass: yup
      .string()
      .required("New Password is required!")
      .min(6, "Password should be at least 6 characters!"),
  })
  .required();
