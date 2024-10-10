import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/filters/selectors";
import { changeFilter } from "../../redux/filters/slice";
import { ChangeEvent } from "react";
import { AppDispatch } from "../../redux/store";
import css from "./SearchBox.module.css";

const SearchBox: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.searhForm}>
      <p>Find contact by name or number</p>
      <input type="text" value={filter} onChange={handleChange} />
    </div>
  );
};

export default SearchBox;
