import Hero from '../components/shared/hero/Hero';
import ContactsContent from '../components/shared/contacts-content/ContcatsContent';

const Contacts = () => {
  return (
    <main className="page__main">
      <Hero title="Контакты" breadcrumbs={['Контакты']} />
      <ContactsContent />
    </main>
  );
};

export default Contacts;