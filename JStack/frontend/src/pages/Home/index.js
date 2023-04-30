/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import * as S from "./styles";

// import Modal from '../../components/Modal';

import { useEffect, useMemo, useState } from "react";
import arrow from "../../assets/images/icons/arrow.svg";
import edit from "../../assets/images/icons/edit.svg";
import trash from "../../assets/images/icons/trash.svg";
import Loader from "../../components/Loader";
import delay from "../../utils/delay";
import ContactsService from "../../services/ContactsService";
// import Loader from '../../components/Loader';

export default function Home() {
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState("asc");
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  
  

  const filteredContacts = useMemo(() => {
    return contacts.filter((contact) => {
      return contact.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }, [contacts, searchTerm]);

  async function getContacts() {
    try {
      setIsLoading(true);
      
      const contactsList = await ContactsService.listContacts(orderBy);
      setContacts(contactsList);
      setHasError(false);
  
    } catch {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }

  function handleToggleOrderBy() {
    const newState = orderBy === "asc" ? "desc" : "asc";
    setOrderBy(newState);
  }

  function handleSearchTerm(event) {
    setSearchTerm(event.target.value);
  }

  useEffect(() => {
    getContacts();
  }, [orderBy]);

  return (
    <S.Container>
      <Loader isLoading={isLoading} />

      {/* <Modal danger /> */}

      <S.InputSearchContainer>
        <input
          type="text"
          placeholder="Pesquise pelo nome"
          value={searchTerm}
          onChange={handleSearchTerm}
        />
      </S.InputSearchContainer>

      <S.Header
        hasError={hasError}
        justifyContent={
          hasError
            ? "flex-end"
            : contacts.length > 0
            ? "space-between"
            : "center"
        }
      >
        {!hasError && filteredContacts.length > 0 && (
          <strong>
            {contacts.length}
            {contacts.length === 1 ? " contato" : " contatos"}
          </strong>
        )}
        <Link to="/new">Novo contato</Link>
      </S.Header>

      {hasError && (
        <>
          <p>Erro ao carregar os contatos</p>
          <button onClick={getContacts}>Tentar novamente</button>
        </>
      )}

      {!hasError && (
        <>
          {contacts.length < 1 && !isLoading && (
            <div>
              <p>
                Você ainda nao tem nenhum contato cadastrado. Clique no botao
                "Novo Contato" à cima para cadastrar o seu primeiro!
              </p>
            </div>
          )}

          {(contacts.length > 0 || isLoading) && filteredContacts.length < 1 &&(
            <div>
              <p>
                Nenhum contato encontrado com o termo {searchTerm}. Tente novamente!
              </p>
            </div>
          )}

          {filteredContacts.length > 0 && (
            <S.ListHeader orderBy={orderBy}>
              <button
                type="button"
                className="sort-button"
                onClick={handleToggleOrderBy}
              >
                <span>Nome</span>
                <img src={arrow} alt="Arrow" />
              </button>
            </S.ListHeader>
          )}

          {contacts.map((contact) => (
            <S.Card key={contact.id}>
              <div className="info">
                <div className="contact-name">
                  <strong>{contact?.name}</strong>
                  {contact?.category_name && (
                    <small>{contact?.category_name}</small>
                  )}
                </div>

                <span>{contact?.email}</span>
                <span>{contact?.phone}</span>
              </div>

              <div className="actions">
                <Link to={`/edit/${contact?.id}`}>
                  <img src={edit} alt="" />
                </Link>

                <button type="button">
                  <img src={trash} alt="Arrow" />
                </button>
              </div>
            </S.Card>
          ))}
        </>
      )}
    </S.Container>
  );
}
