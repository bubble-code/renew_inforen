import { Outlet } from "react-router-dom";
import Navbar1 from "../components/Navbar/navBar"

const Home = () => {

    return (
        <div className="mx-auto max-w-screen-xl h-screen flex flex-col">
            <Navbar1 />
            <div className="flex-1 my-4">
                <Outlet/>
            </div>
        </div>
    )
}

export default Home;