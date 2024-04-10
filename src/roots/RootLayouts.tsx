import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const RootLayouts = () => {
  return (
    <div>
      <Navbar />
      <section>
        <Outlet />
      </section>
      {/* === FOOTER === */}
      <Footer />
    </div>
  );
};

export default RootLayouts;
