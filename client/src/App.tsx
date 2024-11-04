import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Pages/Dashboard";
import Login from "./Pages/Login";
import Layout from "./Layout/Layout";
import Register from "./Pages/Register";
import Default from "./Pages/Default";

const queryClient = new QueryClient();

const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/dashboard",
          element: <Products />,
        },
       
        {
          path: "*",
          element: <Default />
          ,
        },
      ],
    },
    
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export default App;
