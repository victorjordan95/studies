import PropTypes from 'prop-types';
import { useState } from 'react';
import useErrors from '../../hooks/useErrors';

import isEmailValid from '../../utils/isEmailValid';

import FormGroup from '../FormGroup';
import Button from '../Styled/Button';
import Input from '../Styled/Input';
import Select from '../Styled/Select';

import * as S from './styles';

export default function ContactForm({ buttonLabel }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('');
  const { setError, removeError, getErrorMessageByFieldName } = useErrors();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log({
    //   name, email, phone, category,
    // });
  };

  function handleChangeName(e) {
    setName(e.target.value);

    if (!e.target.value) {
      setError({ field: 'name', message: 'Nome é obrigatório' });
    } else {
      removeError('name');
    }
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);

    if (e.target.value && !isEmailValid(e.target.value)) {
      setError({ field: 'email', message: 'E-mail inválido' });
    } else {
      removeError('email');
    }
  }

  return (
    <S.Form onSubmit={handleSubmit} noValidate>
      <FormGroup error={getErrorMessageByFieldName('name')}>
        <Input
          error={getErrorMessageByFieldName('name')}
          onChange={handleChangeName}
          placeholder="Nome"
          value={name}
        />
      </FormGroup>

      <FormGroup error={getErrorMessageByFieldName('email')}>
        <Input
          error={getErrorMessageByFieldName('email')}
          onChange={handleEmailChange}
          placeholder="E-mail"
          type="email"
          value={email}
        />
      </FormGroup>

      <FormGroup>
        <Input
          placeholder="Telefone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <Select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Categoria</option>
          <option value="instagram">Instagram</option>
          <option value="discord">Discord</option>
        </Select>
      </FormGroup>

      <S.ButtonContainer>
        <Button
          type="submit"
        >
          {buttonLabel}
        </Button>

      </S.ButtonContainer>

    </S.Form>
  );
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};
