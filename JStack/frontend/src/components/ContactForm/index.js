import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import useErrors from '../../hooks/useErrors';

import CategoriesService from '../../services/CategoriesService';

import isEmailValid from '../../utils/isEmailValid';

import FormGroup from '../FormGroup';
import Button from '../Styled/Button';
import Input from '../Styled/Input';
import Select from '../Styled/Select';

import * as S from './styles';

export default function ContactForm({ buttonLabel, onSubmit }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [categories, setCategories] = useState([]);
  const [isLoadingCategories, setIsLoadingCategories] = useState(true);
  
  
  const { setError, removeError, getErrorMessageByFieldName } = useErrors();

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

  function handleSubmit(e) {
    e.preventDefault();

    onSubmit({ name, email, phone, categoryId });
  }

  useEffect(() => {
    async function fetchCategories() {
      try {
        const categories = await CategoriesService.listCategories();
        setCategories(categories);
      } catch (error) { }
      finally {
        setIsLoadingCategories(false);
      }
    }

    fetchCategories();
  }, [])
  

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

      <FormGroup isLoading={isLoadingCategories}>
        <Select
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
          disabled={isLoadingCategories}
        >
          <option value="">Sem categoria</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
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
  onSubmit: PropTypes.func.isRequired,
};
