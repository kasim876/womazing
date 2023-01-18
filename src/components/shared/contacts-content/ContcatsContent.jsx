import ContactsList from './contacts-list/ContactsList';
import ContactsForm from './contcats-form/ContactsForm';

import styles from './ContactsContent.module.scss';

const ContactsContent = () => {
  return (
    <section className={styles.root}>
      <div className="container">
        <iframe title="map" className={styles.map} src="https://yandex.ru/map-widget/v1/?um=constructor%3Adfaf1e339a0aeb5cab3fb447689d0bd89a8415ff815d94b708f933e30d1f9c23&amp;source=constructor" width="1140" height="300" frameBorder="0"></iframe>
        <ContactsList />
        <ContactsForm />
      </div>
    </section>
  );
};

export default ContactsContent;