import ContactForm from '../../components/ContactForm';
import PageHeader from '../../components/PageHeader';

export default function NewContacts() {
  async function handleSubmit(data) {
    try {
      console.log(data);
      const contact = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        category_id: data.categoryId,
      }
      const response = await ContactsService.createContact(contact);
    } catch (error) {
      alert(error.message);
    }

  }

  return (
    <>
      <PageHeader title="Novo Contato" />

      <ContactForm 
        buttonLabel="Cadastrar"
        onSubmit={handleSubmit}
      />
    </>
  );
}
