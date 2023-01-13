import {useState} from 'react';

import './ContactsForm.scss';

const formSubmit = (e, setMessage) => {
  e.preventDefault();
  
  document.querySelector('.js-alert').style.display = 'block';
  setMessage('');
};

const ContactsForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  
  return (
    <form className="contacts-content__form">
      <h3 className="contacts-content__subtitle">Напишите нам</h3>
      <input
        type="text"
        placeholder="Имя"
        name="name"
        value={name}
        className="contacts-content__input"
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="E-mail"
        name="email"
        value={email}
        className="contacts-content__input"
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="tel"
        placeholder="Телефон"
        name="tel"
        value={phone}
        className="contacts-content__input"
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <textarea
        placeholder="Сообщение"
        name="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
        className="contacts-content__input contacts-content__input--big"
      ></textarea>
      <button
        className="btn-reset btn-green contacts-content__btn"
        onClick={(e) => formSubmit(e, setMessage)}
      >
        Отправить
      </button>
      <p className="contacts-content__alert text-md js-alert">Сообщение успешно отправлено</p>
    </form>
  );
};

export default ContactsForm;