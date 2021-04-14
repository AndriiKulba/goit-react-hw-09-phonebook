import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Icon from '@material-ui/core/Icon';
import grey from '@material-ui/core/colors/grey';
import s from './ContactItem.module.css';
import { operations, selectors } from '../../redux/contacts';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Avatar from '@material-ui/core/Avatar';

export default function ContactItem() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectors.getvisibleContacts);
  const deleteContact = id => {
    dispatch(operations.deleteContact(id));
  };

  return (
    <Accordion defaultActiveKey="0">
      {contacts.map(({ id, name, number }) => {
        return (
          <Card
            key={id}
            style={{
              backgroundColor: 'rgb(39, 36, 36)',
              borderRadius: '10px',
            }}
          >
            <Accordion.Toggle
              as={Card.Header}
              eventKey={id}
              style={{
                borderBottom: '1px solid grey',
                paddingLeft: '5px',
              }}
            >
              <Avatar
                style={{
                  width: '25px',
                  height: '25px',
                  fontSize: '13px',
                  color: 'black',
                  fontWeight: 'bolder',
                  fontStyle: 'italic',
                }}
              >
                {name.substr(0, 2)}
              </Avatar>
              <p>{name}</p>
            </Accordion.Toggle>
            <button
              type="button"
              className={s.deleteBtn}
              onClick={() => deleteContact(id)}
            >
              <Icon style={{ color: grey[50], fontSize: 26 }}>
                delete_forever
              </Icon>
            </button>
            <Accordion.Collapse eventKey={id}>
              <Card.Body style={{ padding: '3px', marginLeft: '60px' }}>
                {number}
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        );
      })}
    </Accordion>
  );
}
