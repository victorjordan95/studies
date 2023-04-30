import PropTypes from 'prop-types';
import Spinner from '../Spinner';

import * as S from './styles';

export default function FormGroup({ children, error, isLoading }) {
  return (
    <S.Container>
      <div className="form-item">
        {children}
        {isLoading && (
          <div className='loader'>
            <Spinner size={16}/>
          </div>
        )}
      </div>
      {error && <S.Error>{error}</S.Error>}
    </S.Container>
  );
}

FormGroup.propTypes = {
  children: PropTypes.node.isRequired,
  error: PropTypes.string,
  isLoading: PropTypes.bool,
};

FormGroup.defaultProps = {
  error: null,
  isLoading: false,
};
