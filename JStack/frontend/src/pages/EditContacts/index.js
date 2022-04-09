import ContactForm from '../../components/ContactForm';
import PageHeader from '../../components/PageHeader';

export default function EditContacts() {
  return (
    <>
      <PageHeader title="Editar Victor Jordan" />

      <ContactForm
        buttonLabel="Salvar alterações"
      />
    </>
  );
}
