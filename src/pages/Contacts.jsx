import Hero from '../components/Hero/Hero';
import ContactsContent from '../components/ContactsContent/ContactsContent';

const Contacts = () => {
  return (
    <main className="page__main">
      <Hero title="Контакты" />
      <ContactsContent />
    </main>
  );
};

export default Contacts;