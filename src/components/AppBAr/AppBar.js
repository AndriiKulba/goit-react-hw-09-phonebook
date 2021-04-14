import { useSelector } from 'react-redux';
import Navigation from '../Navigation/Navigation';
import UserAuth from '../userAuth/userAuth';
import UserMenu from '../userMenu/userMenu';
import styles from './AppBar.module.css';
import { userAuthSelectors } from '../../redux/user';

export default function AppBar() {
  const isAuthenticated = useSelector(userAuthSelectors.getIsAuthenticated);
  return (
    <header className={styles.header}>
      <Navigation />
      {isAuthenticated ? <UserMenu /> : <UserAuth />}
    </header>
  );
}
