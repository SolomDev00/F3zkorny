/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import Button from "../../../components/schema/Button";
import Input from "../../../components/schema/Input";
import { LOGIN_FORM } from "../../../data";
import { yupResolver } from "@hookform/resolvers/yup";
import InputErrorMessage from "../../../components/auth-errormsg/InputErrorMessage";
import { useForm } from "react-hook-form";
import { loginSchema } from "../../../validation";
import axiosInstance from "../../../config/axios.config";
import toast from "react-hot-toast";
import { AxiosError } from "axios";
import { IErrorResponse } from "../../../interfaces";
import Cookies from "universal-cookie";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../../app/store";
import { setToken } from "../../../app/functions/token";
import Waves from '../../../assets/wave-auth.svg';

interface IFormInput {
  username: string;
  password: string;
}

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);


  // ** Cookies
  const cookie = new Cookies();
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(loginSchema),
  });

  // ** Handlers
  const handleSubmitForm = async (formData: IFormInput) => {
    setIsLoading(true);
    try {
      const { status, data: response } = await axiosInstance.post(
        "/auth/login",
        formData
      );
      if (status === 200) {
        dispatch(setToken(response));
        cookie.set("userLogged", response);
        toast.success("Login is done, you will navigate after 2 seconds!", {
          position: "bottom-center",
          duration: 4000,
        });
        setTimeout(() => {
          window.location.replace("/");
        }, 2000);
      }
    } catch (error) {
      const { response } = error as AxiosError<IErrorResponse>;
      const message = response?.data.error.details?.message || response?.data.message;
      toast.error(`Login failed: ${message}`, {
        position: "bottom-center",
        duration: 1500,
      });
    } finally {
      setIsLoading(false);
    }
  };

  // ** Renders
  const renderLoginForm = LOGIN_FORM.map(
    ({ name, placeholder, type, forl, placel, validation }, idx) => (
      <div key={idx}>
        <div className="space-y-2 pb-1">
          <label htmlFor={forl} className="text-primary text-lg font-medium">
            {placel}
          </label>
          <Input
            id={forl}
            type={type}
            placeholder={placeholder}
            {...register(name, validation)}
          />
        </div>
        {errors[name] && <InputErrorMessage msg={errors[name]?.message} />}
      </div>
    )
  );

  return (
    <section className="bg-[#BC1F34] relative w-full min-h-screen flex items-center justify-center">
      <div className="w-full absolute inset-0 flex flex-col items-center z-10">
        <img className="w-full h-full object-cover" src={Waves} alt="WAVES" />
      </div>
      <div className="container flex items-center justify-center relative z-50 h-auto">
        <div className="w-3/4 bg-white rounded-2xl px-8 py-10 flex flex-col items-center justify-center space-y-8">
          <h2 className="text-3xl text-black font-medium text-center font-solom">Welcome Back to <span className="text-primary">SOS Alert</span></h2>
          <form
            className="w-full space-y-3 mx-auto"
            onSubmit={handleSubmit(handleSubmitForm)}
          >
            {renderLoginForm}
            <Button fullWidth isLoading={isLoading}>
              Login
            </Button>
            <div className="flex flex-col items-end space-y-1">
              <Link to={"/auth/confirm-login"} className="text-black">
                <span className="text-sm underline ml-1 text-black">Forgot your password?</span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
