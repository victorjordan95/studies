import ContactForm from '../../components/ContactForm';
import PageHeader from '../../components/PageHeader';

export default function NewContacts() {
  return (
    <>
      <PageHeader title="Novo Contato" />

      <ContactForm buttonLabel="Cadastrar" />
    </>
  );
}
