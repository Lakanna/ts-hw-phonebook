import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";
import { FC } from "react";

interface IPrivateRouteProps {
  component: FC;
  redirectTo: string;
}

export const PrivateRoute: React.FC<IPrivateRouteProps> = ({
  component: Component,
  redirectTo,
}) => {
  const isLogged = useSelector(selectIsLoggedIn);

  return isLogged === true ? <Component /> : <Navigate to={redirectTo} />;
};
