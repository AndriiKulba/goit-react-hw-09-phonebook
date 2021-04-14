import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Icon from '@material-ui/core/Icon';
import grey from '@material-ui/core/colors/grey';
import s from './Filter.module.css';
import { v4 as uuidv4 } from 'uuid';
import { selectors, addFilter } from '../../redux/contacts';

const filterInputID = uuidv4();

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectors.getFilter);
  const handleChange = e => {
    const { value } = e.target;
    dispatch(addFilter(value));
  };
  const resetFilter = () => {
    dispatch(addFilter(''));
  };

  return (
    <label htmlFor={filterInputID} className={s.phonebook__filter}>
      <button className={s.phonebook__btn} onClick={resetFilter}>
        <Icon style={{ color: grey[800], fontSize: 20 }}>search</Icon>
      </button>
      <input
        type="text"
        name="filter"
        value={filter}
        id={filterInputID}
        onChange={handleChange}
        placeholder=" Find contacts by name"
      />
    </label>
  );
}
