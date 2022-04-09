import PropTypes from 'prop-types';

import * as S from './styles';

export default function FormGroup({ children, error }) {
  return (
    <S.Container>
      {children}
      {error && <S.Error>{error}</S.Error>}
    </S.Container>
  );
}

FormGroup.propTypes = {
  children: PropTypes.node.isRequired,
  error: PropTypes.string,
};

FormGroup.defaultProps = {
  error: null,
};
