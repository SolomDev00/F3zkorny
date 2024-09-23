import { Toaster } from "react-hot-toast";
import routers from "./routers";
import { RouterProvider } from "react-router-dom";

const App = () => {
  return (
    <>
      <RouterProvider router={routers} />
      <Toaster toastOptions={{
        duration: 4000
      }} />
    </>
  );
};

export default App;
