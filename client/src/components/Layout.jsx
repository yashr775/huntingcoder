// components/Layout.js
import Navbar from "./Navbar";

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar /> {/* Navbar will always be shown */}
            <main>{children}</main>
        </div>
    );
};

export default Layout;
