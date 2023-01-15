import Nav from '../nav/Nav';
import Phone from '../phone/Phone';

import styles from './Burger.module.scss';

function clickHandle() {
  const BLACKOUNT_ACTIVE_CLASS = styles['blackout-active'];
  const MENU_ACTIVE_CLASS = styles['menu-active'];
  
  const BLACKOUT_NODE = document.querySelector('.js-burger-blackout');
  const MENU_NODE = document.querySelector('.js-burger-menu');

  BLACKOUT_NODE.classList.toggle(BLACKOUNT_ACTIVE_CLASS);
  MENU_NODE.classList.toggle(MENU_ACTIVE_CLASS);
}

const Burger = () => {
  return (
    <div className={styles.root}>
      <button className={`btn-reset js-burger-btn ${styles.btn}`} onClick={clickHandle}>
        <span className={styles['btn-line']}></span>
        <span className={styles['btn-line']}></span>
        <span className={styles['btn-line']}></span>
      </button>
      <div className={`js-burger-menu ${styles.menu}`}>
        <Nav className={`${styles.nav}`} />
        <Phone />
      </div>
      <div className={`js-burger-blackout ${styles.blackout}`} onClick={clickHandle}></div>
    </div>
  );
};

export default Burger;