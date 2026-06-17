import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy } from "react";
import MainLayout from "./layout/mainLayout";
const Home = lazy(() => import("./pages/home"))
const SignUp = lazy(() => import("./pages/signUp"));
const SignIn = lazy(() => import("./pages/signIn"));
const PageNotFount = lazy(() => import("./pages/pageNotFound"));
const About = lazy(() => import("./pages/about"))
const Contact = lazy(() => import("./pages/contact"))
const Blog = lazy(() => import("./pages/blog"))
const Support = lazy(() => import("./pages/support"))
const Tours = lazy(() => import("./pages/tours"))
const DestinationMain = lazy(() => import("./components/home/destinationMain"))
const VirtualTour = lazy(() => import("./pages/virtualTour"))
const ToursDetails = lazy(() => import("./components/tours/toursCart"))
import { PublicRoute } from "./pages/publicRoute";
import ProtectedRoute from "./pages/protectedRoute";
const Checkout = lazy(() => import("./pages/checkout"))

const routes = createBrowserRouter([
  {
    errorElement: <PageNotFount />,
    path: "/",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />

      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "support",
            element: <Support />

          }
        ]
      },
      {
        path: "/tours",
        element: <Tours />,
      },
      {
        path: "/tours/:id",
        element: <ToursDetails />,
      },
      {
        path: "/checkout",
        element: <Checkout />
      },
      {
        path: "/blog",
        element: <Blog />
      },
      {
        path: "/destination",
        element: <DestinationMain />
      },
      {
        path: "/virtualtour",
        element: <VirtualTour />,

      },
    ],
  },
  {
    path: "signup",
    element: (
      <PublicRoute>
        <SignUp />
      </PublicRoute>
    )
  },
  {
    path: "signin",
    element: (
      <PublicRoute>
        <SignIn />
      </PublicRoute>
    )
  }
]);

const App = () => {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
};

export default App;
