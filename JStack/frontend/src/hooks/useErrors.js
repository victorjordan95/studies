import { useState } from 'react';

export default function useErrors() {
  const [errors, setErrors] = useState([]);

  const setError = ({ field, message }) => {
    const errorAlreadyExists = errors.find((error) => error.field === field);
    if (errorAlreadyExists) {
      return;
    }

    setErrors((prevState) => [
      ...prevState,
      { field, message },
    ]);
  };

  const removeError = (fieldName) => {
    setErrors(errors.filter((err) => err.field !== fieldName));
  };

  function getErrorMessageByFieldName(fieldName) {
    return errors.find((error) => error.field === fieldName)?.message;
  }

  return {
    getErrorMessageByFieldName,
    removeError,
    setError,
  };
}
