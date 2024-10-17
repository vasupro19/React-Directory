import React from "react";
import "./PopUp.css"; // Import CSS for styling

// Define the types for the props
interface ModalProps {
  isVisible: boolean; // Whether the modal is visible
  onClose: () => void; // Function to handle closing the modal
  onRetry: () => void; // Function to handle retrying the game
}

const Modal: React.FC<ModalProps> = ({ isVisible, onClose, onRetry }) => {
  if (!isVisible) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Game Over</h2>
        <p>You hit a bomb!</p>
        <button onClick={onRetry}>Try Again</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default Modal;
