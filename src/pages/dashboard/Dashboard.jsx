import {Outlet} from "react-router";
import Header from "../../components/Header";

const Dashboard = () => {
    return (
        <>
            <div className="w-full h-20 bg-sky-200">
                <Header />
            </div>
            <div className="">
                <Outlet />;
            </div>
        </>
    );
};

export default Dashboard;
