import { useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectNameFilter } from '../../redux/selectors';
import { changeFilter } from '../../redux/filtersSlice';

import styles from './SearchBox.module.css';

function SearchBox() {
  const contactFilterId = useId();
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const onChangeInputHandler = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={styles.searchBox}>
      <label htmlFor={contactFilterId}>Find contacts by name</label>
      <input
        placeholder="Search contact"
        value={filter}
        onChange={onChangeInputHandler}
        type="text"
        name="contactFilter"
        id={contactFilterId}
      />
    </div>
  );
}

export default SearchBox;
