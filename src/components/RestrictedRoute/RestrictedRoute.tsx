import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";
import { FC } from "react";

interface IRestrictedRouteProps {
  component: FC;
  redirectTo: string;
}

export const RestrictedRoute: React.FC<IRestrictedRouteProps> = ({
  component: Component,
  redirectTo,
}) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn === true ? <Navigate to={redirectTo} /> : <Component />;
};
