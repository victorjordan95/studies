import ReactDOM from 'react-dom';
import * as S from './styles';

import PropTypes from 'prop-types';

export default function Loader({ isLoading }) {
  if (!isLoading) return null;

  return ReactDOM.createPortal(
    <S.Overlay>
      <div className="loader" />
    </S.Overlay>,
    document.getElementById('loader-root'),
  );
}

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};