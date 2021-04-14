import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Icon from '@material-ui/core/Icon';
import grey from '@material-ui/core/colors/grey';
import s from './RegisterForm.module.css';
import { userAuthOperations } from '../../redux/user';

export default function RegisterForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const values = { name, email, password };
    dispatch(userAuthOperations.register(values));
  };
  return (
    <>
      <h1>Registr</h1>
      <form
        onSubmit={handleSubmit}
        className={s.register__form}
        autoComplete="off"
      >
        <div>
          <div className={s.register__field}>
            <Icon style={{ color: grey[500], fontSize: 20 }}>
              perm_identity
            </Icon>
            <input
              type="text"
              name="name"
              value={name}
              placeholder="Name"
              onChange={handleChange}
            />
            <label className={s.label_name}>Name </label>
          </div>
          <div className={s.register__field}>
            <Icon style={{ color: grey[500], fontSize: 20 }}>
              alternate_email
            </Icon>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="e-mail"
              onChange={handleChange}
            />
            <label className={s.label_mail}>e-mail </label>
          </div>{' '}
          <div className={s.register__field}>
            <Icon style={{ color: grey[500], fontSize: 20 }}>pan_tool</Icon>
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              onChange={handleChange}
            />
            <label className={s.label_passw}>Password </label>
          </div>
          <button className={s.register__btn} type="submit">
            <Icon style={{ color: grey[50], fontSize: 30 }}>how_to_reg</Icon>
          </button>
        </div>
      </form>
    </>
  );
}
