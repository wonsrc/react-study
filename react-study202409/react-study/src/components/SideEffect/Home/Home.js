import React, { useContext } from 'react';
import Card from '../../UI/Card';
import styles from './Home.module.css';
import ButtonComponent from '../../UI/Button';
import AuthContext from '../Store/auth-context';

const Home = () => {
  const { onLogout } = useContext(AuthContext);
  return (
    <Card className={styles.home}>
      <h1>Welcome Back!</h1>
      <ButtonComponent onClick={onLogout}>로그아웃</ButtonComponent>
    </Card>
  );
};

export default Home;
