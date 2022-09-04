import { Outlet } from "react-router-dom";
import NavigationBar from "../../common/NavigationBar";

export default function Layout() {
  return (
    <div className="bg-white transition-all flex flex-col min-h-screen">
      <NavigationBar />
      <div className="w-screen my-auto ">
        <Outlet />
      </div>
    </div>
  );
}