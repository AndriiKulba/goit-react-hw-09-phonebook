import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Icon from '@material-ui/core/Icon';
import grey from '@material-ui/core/colors/grey';
import styles from './userMenu.module.css';
import { userAuthOperations, userAuthSelectors } from '../../redux/user';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(userAuthSelectors.getUsername);
  const onLogout = () => {
    console.log(1234);
    dispatch(userAuthOperations.logOut());
  };

  return (
    <div className={styles.user_menu}>
      <span className={styles.username}>Welcome, {name}</span>
      <button type="button" className={styles.btn_logout} onClick={onLogout}>
        <Icon style={{ color: grey[50], fontSize: 25 }}>logout</Icon>
        <span className={styles.prompt}>Logout</span>
      </button>
    </div>
  );
}

// const mapStateToProps = state => ({
//   name: userAuthSelectors.getUsername(state),
// });
// const mapDispatchToProps = {
//   onLogout: userAuthOperations.logOut,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
