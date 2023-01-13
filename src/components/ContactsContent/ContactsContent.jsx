import ContactsForm from '../ContactsForm/ContactsForm';

import './ContactsContent.scss';

const ContactsContent = () => {
  return (
    <section className="contacts-content">
      <div className="container">
        <iframe title="map" src="https://yandex.ru/map-widget/v1/?um=constructor%3Adfaf1e339a0aeb5cab3fb447689d0bd89a8415ff815d94b708f933e30d1f9c23&amp;source=constructor" width="1140" height="400" frameBorder="0"></iframe>
        <ul className="contacts-content__list">
          <li className="contacts-content__item">
            <span className="contacts-content__caption text-md">Телефон</span>
            <a href="tel:+74958235412" className="contacts-content__value animation-link">+7 (495) 823-54-12</a>
          </li>
          <li className="contacts-content__item">
            <span className="contacts-content__caption text-md">E-mail</span>
            <a href="mailto:info@sitename.com" className="contacts-content__value animation-link">info@sitename.com</a>
          </li>
          <li className="contacts-content__item">
            <span className="contacts-content__caption text-md">Адрес</span>
            <address className="contacts-content__value">г. Москва, 3-я улица Строителей, 25</address>
          </li>
        </ul>
        <ContactsForm />
      </div>
    </section>
  );
};

export default ContactsContent;