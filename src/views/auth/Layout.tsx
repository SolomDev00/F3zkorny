import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="root-layout">
      <div className="flex flex-row justify-between h-full">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
