import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Icon from '@material-ui/core/Icon';
import grey from '@material-ui/core/colors/grey';
import s from './LoginForm.module.css';
import { userAuthOperations } from '../../redux/user';

export default function LoginForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
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
    const values = { email, password };
    dispatch(userAuthOperations.logIn(values));
  };
  return (
    <>
      <h1>Login</h1>

      <form
        onSubmit={handleSubmit}
        className={s.login__form}
        autoComplete="off"
      >
        <div>
          <div className={s.login__field}>
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
            <label className={s.label_mail}>e-mail</label>
          </div>
          <div className={s.login__field}>
            <Icon style={{ color: grey[500], fontSize: 20 }}>pan_tool</Icon>
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              onChange={handleChange}
            />
            <label className={s.label_passw}>Password</label>
          </div>

          <button className={s.login__btn} type="submit">
            <Icon style={{ color: grey[50], fontSize: 30 }}>exit_to_app</Icon>
          </button>
        </div>
      </form>
    </>
  );
}

// class LoginForm extends Component {
//   handleSubmit = e => {
//     e.preventDefault();

//     this.props.onLogin(this.props.values);
//     this.props.resetValue('');
//   };

//   render() {
//     const { values, handleChange } = this.props;
//     const { email, password } = values;

//     return (
//       <>
//         <h1>Login</h1>

//         <form
//           onSubmit={this.handleSubmit}
//           className={s.login__form}
//           autoComplete="off"
//         >
//           <div>
//             <div className={s.login__field}>
//               <Icon style={{ color: grey[500], fontSize: 20 }}>
//                 alternate_email
//               </Icon>
//               <input
//                 type="email"
//                 name="email"
//                 value={email}
//                 placeholder="e-mail"
//                 onChange={handleChange}
//               />
//               <label className={s.label_mail}>e-mail</label>
//             </div>
//             <div className={s.login__field}>
//               <Icon style={{ color: grey[500], fontSize: 20 }}>pan_tool</Icon>
//               <input
//                 type="password"
//                 name="password"
//                 value={password}
//                 placeholder="Password"
//                 onChange={handleChange}
//               />
//               <label className={s.label_passw}>Password</label>
//             </div>

//             <button className={s.login__btn} type="submit">
//               <Icon style={{ color: grey[50], fontSize: 30 }}>exit_to_app</Icon>
//             </button>
//           </div>
//         </form>
//       </>
//     );
//   }
// }
// const mapStateToProps = state => ({
//   values: {
//     email: userAuthSelectors.getEmail(state),
//     password: userAuthSelectors.getPassword(state),
//   },
// });
// const mapDispatchToProps = dispatch => ({
//   onLogin: val => dispatch(userAuthOperations.logIn(val)),
//   handleChange: e =>
//     dispatch(userAuthActions.addValue(e.target.name, e.target.value)),
//   resetValue: value => dispatch(userAuthActions.resetValue(value)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
