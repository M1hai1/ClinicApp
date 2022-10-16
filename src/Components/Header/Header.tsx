import React, { useEffect, useState } from 'react';
import logo from '../../assets/components/header/logo.png'
import styles from './Header.module.css'
import {Link} from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import {themeSlice} from '../../redux/reducers/themeSlice';



const Header = () => {

  const {theme} = useAppSelector(state => state.themeReducer)
  const {toggleTheme} = themeSlice.actions
  const dispatch = useAppDispatch()

  const [sticky, setSticky] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => 
      window.scrollY > 250 ? setSticky(true) : setSticky(false)
    );
});

    return (
      <div className={theme ? styles.dark_header : styles.light_header}>
        <div className="container">
        <header className={sticky ? styles.sticky : styles.header}>
          <div>
            <img src={logo} alt="curex"/>
          </div>
          <nav className={styles.header_nav}>
            <button className={theme ? styles.dark_button : styles.light_button} onClick={() => dispatch(toggleTheme())}/>
            <Link to="/" onClick={() => window.scrollTo(0, 0)} className={styles.nav_link}>Главная</Link>
            <Link to="/about/james" onClick={() => window.scrollTo(0, 0)} className={styles.nav_link}>О нас</Link>
            <Link to="/doctors" onClick={() => window.scrollTo(0, 0)} className={styles.nav_link}>Врачам</Link>
            <Link to="/service" onClick={() => window.scrollTo(0, 0)} className={styles.nav_link}>Сервис</Link>
            <Link to="/contacts" onClick={() => window.scrollTo(0, 0)} className={styles.nav_link}>Контакты</Link>
          </nav>

        </header>
      </div>
      </div>
    );
};

export default Header;