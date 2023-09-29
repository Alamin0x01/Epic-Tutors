import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Classes from "../Pages/Classes/Classes/Classes";
import Instructors from "../Pages/Instructors/Instructors/Instructors";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import DashboardLayout from "../Layout/DashboardLayout";
import SelectedClass from "../Pages/Dashboard/StudentDashboard/SelectedClass/SelectedClass";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import ManageUser from "../Pages/Dashboard/AdminDashboard/ManageUser";
import ManageClasses from "../Pages/Dashboard/AdminDashboard/ManageClasses";
import InstructorRoute from "./InstructorRoute";
import StudentRoute from "./StudentRoute";
import EnrolledClasses from "../Pages/Dashboard/StudentDashboard/SelectedClass/EnrolledClasses";
import PaymentHistory from "../Pages/Dashboard/StudentDashboard/SelectedClass/PaymentHistory";
import AddClass from "../Pages/Dashboard/InstructorDashboard.jsx/AddClass";
import MyClasses from "../Pages/Dashboard/InstructorDashboard.jsx/MyClasses";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/classes",
        element: <Classes />,
      },
      {
        path: "/instructors",
        element: <Instructors />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "manageclasses",
        element: (
          <AdminRoute>
            <ManageClasses />
          </AdminRoute>
        ),
      },
      {
        path: "manageuser",
        element: (
          <AdminRoute>
            <ManageUser />
          </AdminRoute>
        ),
      },
      {
        path: "addclass",
        element: (
          <InstructorRoute>
            <AddClass />
          </InstructorRoute>
        ),
      },
      {
        path: "myclasses",
        element: (
          <InstructorRoute>
            <MyClasses />
          </InstructorRoute>
        ),
      },
      {
        path: "selectedClass",
        element: (
          <StudentRoute>
            <SelectedClass />
          </StudentRoute>
        ),
      },

      {
        path: "enrolledClasses",
        element: (
          <StudentRoute>
            <EnrolledClasses />
          </StudentRoute>
        ),
      },
      {
        path: "paymentHistory",
        element: (
          <StudentRoute>
            <PaymentHistory />
          </StudentRoute>
        ),
      },
    ],
  },
]);

export default router;
