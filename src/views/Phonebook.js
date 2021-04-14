import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ContactForm from '../components/ContactForm';
import ContactList from '../components/ContactList';
import Filter from '../components/Filter';
import ContactItem from '../components/ContactItem';
import Loader from '../components/Loader';
import { operations, selectors } from '../redux/contacts';

export default function Phonebook() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectors.getLoading);
  useEffect(() => {
    dispatch(operations.fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ContactForm title="Phonebook" />

      <ContactList title="Contacts">
        <div className="filter_container">
          <Filter />
          {isLoading && <Loader />}
        </div>
        <ContactItem />
      </ContactList>
    </>
  );
}
