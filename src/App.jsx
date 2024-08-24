import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Verify from "./pages/auth/Verify";
import ErrorPage from "./components/ErrorPage";
import DashboardRoute from "./routes/DashboardRoute";
import Dashboard from "./pages/dashboard/Dashboard";
import DashboardHome from "./pages/dashboard/DashboardHome";
import Deposit from "./pages/dashboard/Deposit";

const App = () => {
    const router = createBrowserRouter([
        {
            path: "",
            element: <Login />,
        },
        {
            path: "signup",
            element: <Signup />,
        },
        {
            path: "verify",
            element: <Verify />,
        },
        {
            path: "/dashboard",
            errorElement: <ErrorPage />,
            element: <DashboardRoute element={<Dashboard />}></DashboardRoute>,
            children: [
                {
                    path: "",
                    element: <DashboardHome />,
                },
                {
                    path: "deposit",
                    element: <Deposit />,
                },
            ],
        },
    ]);

    return (
        <>
            <RouterProvider router={router} />
        </>
    );
};

export default App;
