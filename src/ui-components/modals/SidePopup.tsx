import React from "react";
import "./SidePopup.css";

interface SidePopupProps {
  isVisible: boolean;
  isPartiallyVisible: boolean;
  onClose: () => void;
}

const SidePopup: React.FC<SidePopupProps> = ({
  isVisible,
  isPartiallyVisible,
  onClose,
}) => {
  // Placeholder for wallet balance
  const walletBalance = 150.0; // Example balance, replace with dynamic data if needed

  const handleAddMoney = () => {
    // Add your logic to handle adding money
    alert("Add money functionality to be implemented");
  };

  return (
    <>
      <div
        className={`side-popup-backdrop ${isVisible ? "visible" : ""}`}
        onClick={onClose}
      />
      <div
        className={`side-popup ${
          isPartiallyVisible ? "partially-visible" : ""
        } ${isVisible ? "visible" : ""}`}
      >
        <div className="side-popup-content">
          <h2>Profile</h2>
          <button onClick={onClose} className="close-button">
            Close
          </button>
          <div className="profile-content">
            <p>Name: John Doe</p>
            <p>Email: johndoe@example.com</p>
            <div className="wallet-section">
              <p>Wallet Balance: ${walletBalance.toFixed(2)}</p>
              <button onClick={handleAddMoney} className="add-money-button">
                Add Money
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SidePopup;
