import * as Yup from "yup";

export interface iProduct {
  id: number;
  name: string;
  price: number;
  original_price: number;
  description: string;
  brand: string;
  originId: number;
}

export const signupSchema = Yup.object({
  username: Yup.string().required("Vui lòng không được bỏ trống"),
  email: Yup.string()
    .email("Email sai định dạng")
    .required("Vui lòng không được bỏ trống"),
  password: Yup.string().min(6).required("Vui lòng không được bỏ trống"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Mật khẩu không khớp")
    .required("Vui lòng không được bỏ trống"),
  role: Yup.string(),
});

export type SignupForm = Yup.InferType<typeof signupSchema>;

export interface IRegister {
  username: string;
  email: string;
  password: string;
}

export interface ILogin {
  email: string;
  password: string;
}
