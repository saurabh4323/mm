import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import { ClerkProvider } from "@clerk/clerk-react";
import Landing from "./Landing";
import Register from "./Components/Register/Register";
import Feature from "./Components/Feature/Feature";
import AboutPage from "./Components/About/About";
import Prod from "./Components/Hero/Prod";

// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}
const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      // {
      //   path: "/",
      //   element: <Landing></Landing>,
      // },
      // {
      //   path: "/dash/:Resid/edit",
      //   element: <Edit />,
      // },
    ],
  },
  {
    path: "/",
    element: <Landing></Landing>,
  },
  {
    path: "/feature",
    element: <Feature></Feature>,
  },
  {
    path: "/about",
    element: <AboutPage></AboutPage>,
  },
  {
    path: "/products",
    element: <Prod></Prod>,
  },

  {
    path: "/sign",
    element: <Register></Register>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <RouterProvider router={router} />
    </ClerkProvider>
  </React.StrictMode>
);
