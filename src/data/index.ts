import {
  IChangeInput,
  ILoginInput,
  INewInput,
  IRegisterInput,
  IResetInput,
  IResetPassInput,
} from "../interfaces";

export const LOGIN_FORM: ILoginInput[] = [
  {
    name: "username",
    placeholder: "Enter your Username ..",
    type: "text",
    forl: "username",
    placel: "Username",
    validation: {
      required: true,
      minLength: 3,
    },
  },
  {
    name: "password",
    placeholder: "Enter your Password ..",
    type: "password",
    forl: "password",
    placel: "Password",
    validation: {
      required: true,
      minLength: 6,
    },
  },
];

export const REGISTER_FORM: IRegisterInput[] = [
  {
    name: "username",
    placeholder: "Type your Username ..",
    type: "text",
    forl: "username",
    placel: "Username",
    validation: {
      required: true,
      minLength: 3,
    },
  },
  {
    name: "email",
    placeholder: "Type your Email ..",
    type: "email",
    forl: "email",
    placel: "Email",
    validation: {
      required: true,
      pattern: /^[^@]+@[^@]+\.[^@ .]{2,}$/,
    },
  },
  {
    name: "phone",
    placeholder: "Type your Phone number ..",
    type: "text",
    forl: "name",
    placel: "Phone",
  },
  {
    name: "password",
    placeholder: "Type your Password ..",
    type: "password",
    forl: "password",
    placel: "Password",
    validation: {
      required: true,
      minLength: 6,
    },
  },
  {
    name: "confirm_password",
    placeholder: "Type your password Confirmation ..",
    type: "password",
    forl: "confirm_password",
    placel: "Password Confirmation",
    validation: {
      required: true,
      minLength: 6,
    },
  },
];

export const CHANGE_FORM: IChangeInput[] = [
  {
    name: "oldNum",
    placeholder: "+20 xx xx xx xx",
    type: "string",
    forl: "oldNum",
    placel: "Old Phone Number :",
    validation: {
      required: true,
      minLength: 10,
      maxLength: 15,
      pattern: /^\d+$/,
    },
  },
  {
    name: "newNum",
    placeholder: "+20 xx xx xx xx",
    type: "string",
    forl: "newNum",
    placel: "New Phone Number :",
    validation: {
      required: true,
      minLength: 10,
      maxLength: 15,
      pattern: /^\d+$/,
    },
  },
];

export const NEW_FORM: INewInput[] = [
  {
    name: "newNum",
    placeholder: "+20 xx xx xx xx",
    type: "string",
    forl: "newNum",
    placel: "New Phone Number :",
    validation: {
      required: true,
      minLength: 10,
      maxLength: 15,
      pattern: /^\d+$/,
    },
  },
];

export const RESET_FORM: IResetInput[] = [
  {
    name: "email",
    placeholder: "Type your Email ..",
    type: "email",
    forl: "email",
    placel: "Email :",
    validation: {
      required: true,
      pattern: /^[^@]+@[^@]+\.[^@ .]{2,}$/,
    },
  },
];

export const RESETPASS_FORM: IResetPassInput[] = [
  {
    name: "oldPass",
    placeholder: "Enter your old Password ..",
    type: "password",
    forl: "password",
    placel: "Old Password :",
    validation: {
      required: true,
      minLength: 6,
    },
  },
  {
    name: "newPass",
    placeholder: "Enter your new Password ..",
    type: "password",
    forl: "password",
    placel: "New Password :",
    validation: {
      required: true,
      minLength: 6,
    },
  },
];
