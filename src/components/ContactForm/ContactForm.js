import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Icon from '@material-ui/core/Icon';
import grey from '@material-ui/core/colors/grey';
import s from './ContactForm.module.css';
import { v4 as uuidv4 } from 'uuid';
import { selectors, operations } from '../../redux/contacts';
import { userAuthActions } from '../../redux/user';

const nameInputID = uuidv4();
const numberInputID = uuidv4();

export default function ContactForm({ title }) {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(selectors.getContacts);

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const auditContact = contacts.filter(contact => contact.name === name);
    auditContact.length === 0
      ? dispatch(operations.addContact(name, number))
      : dispatch(userAuthActions.resetError('This contact already exist'));
    setName('');
    setNumber('');
  };

  return (
    <div className={s.phonebook}>
      <h1>{title}</h1>

      <form onSubmit={handleSubmit} className={s.phonebook__form}>
        <div>
          <div className={s.phonebook__field}>
            <Icon style={{ color: grey[500], fontSize: 20 }}>
              perm_identity
            </Icon>

            <input
              type="text"
              name="name"
              value={name}
              id={nameInputID}
              onChange={handleChange}
            />
            <label className={s.phonebook__name}>Name</label>
          </div>
          <div className={s.phonebook__field}>
            <Icon style={{ color: grey[500], fontSize: 20 }}>phone</Icon>
            <input
              type="tel"
              name="number"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
              placeholder={'111-22-33'}
              value={number}
              id={numberInputID}
              onChange={handleChange}
            />
            <label htmlFor={numberInputID} className={s.phonebook__tel}>
              Phone
            </label>
          </div>
        </div>
        <button type="submit" className={s.phonebook__btn}>
          <Icon style={{ color: grey[50], fontSize: 40 }}>add_circle</Icon>
        </button>
      </form>
    </div>
  );
}
