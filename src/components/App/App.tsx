import { Layout } from "../Layout/Layout";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { lazy, useEffect } from "react";
import { selectIsRefreching } from "../../redux/auth/selectors";
import { refreshUser } from "../../redux/auth/operations";
import { RestrictedRoute } from "../RestrictedRoute/RestrictedRoute";
import { PrivateRoute } from "../PrivateRoute/PrivateRoute";
import { Toaster } from "react-hot-toast";

const HomePage = lazy(() => import("../../pages/HomePage"));
const LoginPage = lazy(() => import("../../pages/LoginPage"));
const RegistrationPage = lazy(() => import("../../pages/RegistrationPage"));
const ContactsPage = lazy(() => import("../../pages/ContactsPage"));

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreching);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <div>Please, wait, loading info...</div>
  ) : (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              component={<RegistrationPage />}
              redirectTo={"/contacts"}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute
              component={<LoginPage />}
              redirectTo={"/contacts"}
            />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute component={<ContactsPage />} redirectTo={"/login"} />
          }
        />
        <Route path="*" element={<HomePage />} />
      </Routes>
      <Toaster />
    </Layout>
  );
}

export default App;
