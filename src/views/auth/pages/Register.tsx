import InputErrorMessage from "../../../components/auth-errormsg/InputErrorMessage";
import Button from "../../../components/schema/Button";
import Input from "../../../components/schema/Input";
import { useForm, SubmitHandler } from "react-hook-form";
import { REGISTER_FORM } from "../../../data";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../../validation";
import axiosInstance from "../../../config/axios.config";
import toast from "react-hot-toast";
import { useState } from "react";
import { AxiosError } from "axios";
import { IErrorResponse } from "../../../interfaces";
import { Link, useNavigate } from "react-router-dom";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import Waves from '../../../assets/wave-auth.svg';

interface IFormInput {
    username: string;
    email: string;
    phone?: string;
    password: string;
    confirm_password: string;
}

const RegisterPage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [phone, setPhone] = useState("");

    const router = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormInput>({
        resolver: yupResolver(registerSchema),
    });

    // Handlers
    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        setIsLoading(true);
        try {
            const requestData = {
                ...data,
                phone,
            };
            console.log(requestData);
            const { status, data: resData } = await axiosInstance.post(
                "auth/signup",
                requestData
            );
            console.log(resData);
            if (status === 200) {
                toast.success("Register is done, you will navigate after 2 seconds!", {
                    position: "bottom-center",
                    duration: 4000,
                });
                setTimeout(() => {
                    router("/login");
                }, 1500);
            }
        } catch (error) {
            const errorObj = error as AxiosError<IErrorResponse>;
            const message = errorObj.response?.data.error.message;
            toast.error(`${message}`, {
                position: "bottom-center",
                duration: 4000,
            });
        } finally {
            setIsLoading(false);
        }
    };

    // Renders
    const renderRegisterForm = REGISTER_FORM.map(
        ({ name, placeholder, type, forl, placel, validation }, idx) => (
            <div key={idx}>
                <div className="space-y-2 pb-1">
                    <label htmlFor={forl} className="text-primary text-lg font-medium">
                        {placel}
                    </label>
                    {name === "phone" ? (
                        <div className="space-y-2 border-[1px] border-gray-300 rounded-md">
                            <PhoneInput
                                value={phone}
                                defaultCountry="eg"
                                onChange={(phone) => setPhone(phone)}
                            />
                            {(phone.trim() === "" || phone.trim().length <= 2) && (
                                <InputErrorMessage msg={"Phone is Required!"} />
                            )}
                        </div>
                    ) : (
                        <Input
                            id={forl}
                            type={type}
                            placeholder={placeholder}
                            {...register(name, validation)}
                        />
                    )}
                    {errors[name] && <InputErrorMessage msg={errors[name]?.message} />}
                </div>
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
                    <div className="space-y-2">
                        <h2 className="text-3xl text-black font-medium text-center font-solom">Get started with <span className="text-primary">SOS Alert</span></h2>
                        <p className="text-xl text-[#737373] text-center font-solom">Create a free account. No credit card required</p>
                    </div>
                    <form
                        className="w-full space-y-3 mx-auto"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        {renderRegisterForm}
                        <Button fullWidth isLoading={isLoading}>
                            Register
                        </Button>
                        <div className="flex flex-col items-end space-y-1">
                            <Link to={"/auth/login"} className="text-sm text-black">
                                Have an account?<span className="underline ml-1 text-primary font-medium">Login</span>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </section >
    );
};

export default RegisterPage;
