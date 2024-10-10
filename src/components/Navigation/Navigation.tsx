import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import css from "./Navigation.module.css";

export const Navigation: React.FC = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const activeClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? `${css.link} ${css.active}` : css.link;

  return (
    <nav>
      <NavLink className={activeClass} to="/">
        Home
      </NavLink>
      {isLoggedIn === true && (
        <NavLink className={activeClass} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
