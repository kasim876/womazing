import {useState} from 'react';

import GreenButton from '../../../ui/button/green-button/GreenButton';

import styles from './ContactsForm.module.scss';

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
    <form className={styles.root}>
      <h3 className={`subtitle ${styles.subtitle}`}>Напишите нам</h3>
      <input
        type="text"
        placeholder="Имя"
        name="name"
        value={name}
        className={`text-md ${styles.input}`}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="E-mail"
        name="email"
        value={email}
        className={`text-md ${styles.input}`}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="tel"
        placeholder="Телефон"
        name="tel"
        value={phone}
        className={`text-md ${styles.input}`}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <textarea
        placeholder="Сообщение"
        name="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
        className={`text-md ${styles.input} ${styles['big-input']}`}
      ></textarea>
      <GreenButton
        className={styles.btn}
        onClick={(e) => formSubmit(e, setMessage)}
      >
        Отправить
      </GreenButton>
      <p className={`text-md js-alert ${styles.alert}`}>Сообщение успешно отправлено</p>
    </form>
  );
};

export default ContactsForm;