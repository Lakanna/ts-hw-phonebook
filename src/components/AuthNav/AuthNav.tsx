import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";

export const AuthNav: React.FC = () => {
  let activeClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? `${css.link} ${css.active}` : css.link;
  return (
    <>
      <NavLink className={activeClass} to="/register">
        Register
      </NavLink>
      <NavLink className={activeClass} to="/login">
        Log In
      </NavLink>
    </>
  );
};
