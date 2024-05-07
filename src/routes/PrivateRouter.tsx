import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

const PrivateRouter = () => {
  return (
    <>
      <Header />
      <div className="p-5 bg-gradient-to-r from-emerald-700 via-amber-600 to-fuchsia-500 flex-auto flex h-full min-h-screen">
        <div className="w-full h-full">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default PrivateRouter;
