import {
  Route,
  createHashRouter,
  createRoutesFromElements,
} from "react-router-dom";
import HomePage from "../views";
import RootLayout from "../views/Layout";
import ErrorHandler from "../components/errors/ErrorRouteHandler";
import PageNotFound from "../views/PageNotFound";
import Cookies from "universal-cookie";
import ProtectedRoute from "../views/auth/ProtectedRoute";
import LoginPage from "../views/auth/pages/Login";
import AuthLayout from "../views/auth/Layout";
import AuthPage from "../views/auth";
import RegisterPage from "../views/auth/pages/Register";
import Azkar from "../components/views/Azkar/Azkar";

const cookie = new Cookies();
const token = cookie.get("userLogged");
console.log(cookie.get("userLogged"));
const isLoggedIn = !!token;
const userData = isLoggedIn ? { token } : null;

const routers = createHashRouter(
  createRoutesFromElements(
    <>
      {/* Root Layout */}
      <Route path="/" element={<RootLayout />} errorElement={<ErrorHandler />}>
        <Route index element={<HomePage />} />
        <Route path="/azkar" element={<Azkar />} />
      </Route>
      <Route
        path="/auth/"
        element={<AuthLayout />}
        errorElement={<ErrorHandler />}
      >
        <Route index element={<AuthPage />} />
        <Route
          path="login"
          element={
            <ProtectedRoute
              isAllowed={!isLoggedIn}
              redircetPath="/"
              data={userData}
            >
              <LoginPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="register"
          element={
            <ProtectedRoute
              isAllowed={!isLoggedIn}
              redircetPath="/"
              data={userData}
            >
              <RegisterPage />
            </ProtectedRoute>
          }
        />
      </Route>
      {/* Page Not Found */}
      < Route path="*" element={< PageNotFound />} />
    </>
  )
);

export default routers;
