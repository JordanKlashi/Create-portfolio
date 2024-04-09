import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

function Modal({ children, onClose, isOpen }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        {children}
        <FontAwesomeIcon className='close-button' icon={faX} onClick={onClose} />
      </div>
    </div>
  );
}
export default Modal