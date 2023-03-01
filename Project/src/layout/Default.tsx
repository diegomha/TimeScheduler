import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export function Default() {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}