import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Icon from '@material-ui/core/Icon';
import grey from '@material-ui/core/colors/grey';
import s from './RegisterForm.module.css';
import { connect } from 'react-redux';
import {
  userAuthOperations,
  userAuthSelectors,
  userAuthActions,
} from '../../redux/user';

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

// class RegisterForm extends Component {
//   handleSubmit = e => {
//     e.preventDefault();
//     this.props.onRegister(this.props.values);
//     this.props.resetValue('');
//   };

//   render() {
//     const { values, handleChange } = this.props;

//     return (
//       <>
//         <h1>Registr</h1>
//         <form
//           onSubmit={this.handleSubmit}
//           className={s.register__form}
//           autoComplete="off"
//         >
//           <div>
//             <div className={s.register__field}>
//               <Icon style={{ color: grey[500], fontSize: 20 }}>
//                 perm_identity
//               </Icon>
//               <input
//                 type="text"
//                 name="name"
//                 value={values.name}
//                 placeholder="Name"
//                 onChange={handleChange}
//               />
//               <label className={s.label_name}>Name </label>
//             </div>
//             <div className={s.register__field}>
//               <Icon style={{ color: grey[500], fontSize: 20 }}>
//                 alternate_email
//               </Icon>
//               <input
//                 type="email"
//                 name="email"
//                 value={values.email}
//                 placeholder="e-mail"
//                 onChange={handleChange}
//               />
//               <label className={s.label_mail}>e-mail </label>
//             </div>{' '}
//             <div className={s.register__field}>
//               <Icon style={{ color: grey[500], fontSize: 20 }}>pan_tool</Icon>
//               <input
//                 type="password"
//                 name="password"
//                 value={values.password}
//                 placeholder="Password"
//                 onChange={handleChange}
//               />
//               <label className={s.label_passw}>Password </label>
//             </div>
//             <button className={s.register__btn} type="submit">
//               <Icon style={{ color: grey[50], fontSize: 30 }}>how_to_reg</Icon>
//             </button>
//           </div>
//         </form>
//       </>
//     );
//   }
// }

// const mapStateToProps = state => ({
//   values: {
//     name: userAuthSelectors.getName(state),
//     email: userAuthSelectors.getEmail(state),
//     password: userAuthSelectors.getPassword(state),
//   },
// });
// const mapDispatchToProps = dispatch => ({
//   onRegister: val => dispatch(userAuthOperations.register(val)),
//   handleChange: e =>
//     dispatch(userAuthActions.addValue(e.target.name, e.target.value)),
//   resetValue: value => dispatch(userAuthActions.resetValue(value)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
