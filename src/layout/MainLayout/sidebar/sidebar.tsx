import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { SidebarContext } from "./index";
import "./sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faHome,
  faInfo,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const sidebarContext = useContext(SidebarContext);

  if (!sidebarContext) {
    throw new Error("Sidebar must be used within a SidebarProvider");
  }

  const { isOpen, toggleSidebar } = sidebarContext;

  return (
    <>
      {/* Toggle Button */}
      <div className="button-div">
        <button className="toggle-button" onClick={toggleSidebar}>
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </button>
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-content">
          <ul>
            <li>
              <Link to="/home" onClick={toggleSidebar}>
                <FontAwesomeIcon icon={faHome} /> Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={toggleSidebar}>
                <FontAwesomeIcon icon={faInfo} /> About
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={toggleSidebar}>
                <FontAwesomeIcon icon={faEnvelope} /> Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
