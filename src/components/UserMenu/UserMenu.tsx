import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import { AppDispatch } from "../../redux/store";
import css from "./UserMenu.module.css";

const UserMenu: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={css.wrapper}>
      <p>
        Welcome, <span className={css.username}>{user.name}</span>
      </p>
      <button
        type="button"
        className={css.button}
        onClick={() => dispatch(logOut())}
      >
        Log Out
      </button>
    </div>
  );
};

export default UserMenu;
