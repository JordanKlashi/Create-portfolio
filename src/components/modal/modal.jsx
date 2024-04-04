const Modal = ({ imageUrl, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content">
        <img src={imageUrl} alt="Agrandissement" />
        <button onClick={onClose}>Fermer</button>
      </div>
    </div>
  );
};

export default Modal;