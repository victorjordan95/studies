import propTypes from 'prop-types';
import ReactDOM from 'react-dom';
import Button from '../Styled/Button';

import * as S from './styles';

export default function Modal({ danger }) {
  return ReactDOM.createPortal(
    <S.Overlay>
      <S.Container danger={danger}>
        <h1>Modal</h1>
        <p>copro do modal</p>
        <S.Footer>
          <button type="button" className="cancel-button">Cancelar</button>
          <Button danger={danger}>Cancelar</Button>
        </S.Footer>
      </S.Container>
    </S.Overlay>,
    document.getElementById('modal-root'),
  );
}

Modal.propTypes = {
  danger: propTypes.bool,
};

Modal.defaultProps = {
  danger: false,
};
