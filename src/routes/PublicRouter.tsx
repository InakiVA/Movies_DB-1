import { Outlet } from "react-router-dom";

const PublicRouter = () => {
  return (
    <>
      <div className="p-5 bg-gradient-to-b from-emerald-700 to-fuchsia-500 flex-auto h-full">
        Public Router
      </div>
      <Outlet></Outlet>
    </>
  );
};

export default PublicRouter;
