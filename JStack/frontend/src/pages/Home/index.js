/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom';
import * as S from './styles';

// import Modal from '../../components/Modal';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';
// import Loader from '../../components/Loader';

export default function Home() {
  return (
    <S.Container>

      {/* <Loader /> */}

      {/* <Modal danger /> */}

      <S.InputSearchContainer>
        <input type="text" placeholder="Pesquise pelo nome" />
      </S.InputSearchContainer>

      <S.Header>
        <strong>3 contatos</strong>
        <Link to="/new">Novo contato</Link>
      </S.Header>

      <S.ListContainer>
        <header>
          <button type="button" className="sort-button">
            <span>Nome</span>
            <img src={arrow} alt="Arrow" />
          </button>
        </header>

        <S.Card>
          <div className="info">
            <div className="contact-name">
              <strong>Victor Jordan</strong>
              <small>instagram</small>
            </div>

            <span>victor@teste.com</span>
            <span>(14) 99999-9999</span>
          </div>

          <div className="actions">
            <Link to="/edit/123">
              <img src={edit} alt="" />
            </Link>

            <button type="button">
              <img src={trash} alt="Arrow" />
            </button>

          </div>

        </S.Card>

      </S.ListContainer>
    </S.Container>
  );
}
