import { InputHTMLAttributes, Ref, forwardRef } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> { }

const Input = forwardRef(({ ...rest }: IProps, ref: Ref<HTMLInputElement>) => {
  return (
    <input
      ref={ref}
      className="border-2 border-gray-300 text-black focus:outline-none outline-none focus:ring-1 focus:ring-primary focus:border-transparent rounded-xl px-3 py-3 text-md w-full bg-transparent duration-200"
      {...rest}
    />
  );
});

export default Input;
