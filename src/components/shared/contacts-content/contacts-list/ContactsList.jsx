import styles from './ContactsList.module.scss';

const ContactsList = () => {
  return (
    <ul className={styles.root}>
      <li className={styles.item}>
        <span className={`text-md ${styles.caption}`}>Телефон</span>
        <a href="tel:+74958235412" className={`animation-link ${styles.value}`}>+7 (495) 823-54-12</a>
      </li>
      <li className={styles.item}>
        <span className={`text-md ${styles.caption}`}>E-mail</span>
        <a href="mailto:info@sitename.com" className={`animation-link ${styles.value}`}>info@sitename.com</a>
      </li>
      <li className={styles.item}>
        <span className={`text-md ${styles.caption}`}>Адрес</span>
        <address className={styles.value}>г. Москва, 3-я улица Строителей, 25</address>
      </li>
    </ul>
  );
};

export default ContactsList;