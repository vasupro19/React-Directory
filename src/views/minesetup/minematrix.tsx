import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGem, faBomb, faBars } from "@fortawesome/free-solid-svg-icons";
import Modal from "../../ui-components/modals/PopUp";
import SidePopup from "../../ui-components/modals/SidePopup"; // Import the SidePopup component
import "./GridLayout.css";

const GridLayout = () => {
  const [bombCount, setBombCount] = useState(0);
  const [bet, setBet] = useState(false);
  const [betAmount, setBetAmount] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false); // State for sidebar visibility
  const [isSidebarPartiallyVisible, setIsSidebarPartiallyVisible] =
    useState(false); // State for partial sidebar visibility

  // Handler functions
  const handleRetry = () => {
    setModalVisible(false);
    // Add logic to restart the game
  };

  const handleClose = () => {
    setModalVisible(false);
  };

  const handleToggleSidebar = () => {
    if (isSidebarVisible) {
      setIsSidebarVisible(false); // Close the sidebar if it's open
    } else if (isSidebarPartiallyVisible) {
      setIsSidebarPartiallyVisible(false); // Fully close if partially visible
    } else {
      setIsSidebarPartiallyVisible(true); // Open the sidebar partially
    }
  };

  const generateIcons = () => {
    const iconsArray = Array(25).fill("gem");
    let bombsPlaced = 0;
    while (bombsPlaced < 5) {
      const index = Math.floor(Math.random() * 25);
      if (iconsArray[index] === "gem") {
        iconsArray[index] = "bomb";
        bombsPlaced++;
      }
    }
    return iconsArray.map((icon) => ({ type: icon, revealed: false }));
  };

  const [icons, setIcons] = useState(generateIcons());

  const handleClick = (index: number) => {
    if (bet) {
      setIcons((prevIcons) =>
        prevIcons.map((icon, i) => {
          if (i === index && !icon.revealed) {
            if (icon.type === "bomb") {
              setBetAmount(0);
              setBet(false);
            }
            setBetAmount((prevState) => prevState * 1.25);
            return { ...icon, revealed: true };
          }
          return icon;
        })
      );
    }
  };

  const handleBet = () => {
    setBet(true);
    setIcons(generateIcons());
  };

  const handleInput = (value: number) => {
    setBetAmount(value);
  };

  return (
    <div className="grid-container">
      <header className="grid-header">
        <h1>
          <FontAwesomeIcon icon={faGem} />
          The Mine King
        </h1>
        <FontAwesomeIcon
          icon={faBars}
          className="menu-icon"
          onClick={handleToggleSidebar} // Toggle the sidebar on click
        />
      </header>
      <div className="grid">
        {icons.map((icon, index) => (
          <div
            className="grid-item"
            key={index}
            onClick={() => handleClick(index)}
            style={{ cursor: "pointer" }}
          >
            {icon.revealed && icon.type === "bomb" && (
              <FontAwesomeIcon icon={faBomb} />
            )}
            {icon.revealed && icon.type === "gem" && (
              <FontAwesomeIcon icon={faGem} />
            )}
          </div>
        ))}
        <Modal
          isVisible={modalVisible}
          onRetry={handleRetry}
          onClose={handleClose}
        />
      </div>

      <input
        type="number"
        placeholder="Amount"
        className="amount-input"
        disabled={bet}
        onChange={(e) => handleInput(parseInt(e.target.value))}
      />
      <button className="bet-button" onClick={handleBet}>
        Place Bet
      </button>
      {bet && <button className="bet-button">CashOut {betAmount}</button>}

      {/* Render the SidePopup */}
      <SidePopup
        isVisible={isSidebarVisible}
        isPartiallyVisible={isSidebarPartiallyVisible}
        onClose={handleToggleSidebar} // Close the sidebar on close button click
      />
    </div>
  );
};

export default GridLayout;
