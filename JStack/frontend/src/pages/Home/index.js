/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import * as S from "./styles";

// import Modal from '../../components/Modal';

import arrow from "../../assets/images/icons/arrow.svg";
import edit from "../../assets/images/icons/edit.svg";
import trash from "../../assets/images/icons/trash.svg";
import { useEffect } from "react";
import { useState } from "react";
// import Loader from '../../components/Loader';

export default function Home() {
  const [contacts, setContacts] = useState([]);

  function getContacts() {
    fetch("http://localhost:3001/contacts")
      .then(async (response) => {
        const data = await response.json();
        setContacts(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <S.Container>
      {/* <Loader /> */}

      {/* <Modal danger /> */}

      <S.InputSearchContainer>
        <input type="text" placeholder="Pesquise pelo nome" />
      </S.InputSearchContainer>

      <S.Header>
        <strong>
          {contacts.length}
          {contacts.length === 1 ? " contato" : " contatos"}
        </strong>
        <Link to="/new">Novo contato</Link>
      </S.Header>

      <S.ListContainer>
        <header>
          <button type="button" className="sort-button">
            <span>Nome</span>
            <img src={arrow} alt="Arrow" />
          </button>
        </header>

        {contacts.map((contact) => (
          <S.Card key={contact.id}>
            <div className="info">
              <div className="contact-name">
                <strong>{contact?.name}</strong>
                {contact?.category_name && <small>{contact?.category_name}</small>}
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
      </S.ListContainer>
    </S.Container>
  );
}
