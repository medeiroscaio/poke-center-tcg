import "./Dropdown.css";
import userProfile from "../../assets/user-profile.jpg";
import { CiImageOn } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import { useState } from "react";

function DropdownItem(props) {
  return (
    <li className="dropdown-item">
      {props.icon && <span>{props.icon}</span>}
      {props.children}
    </li>
  );
}

const Dropdown = () => {
  const [imageProfile, SetimageProfile] = useState("");

  function convertToBase64(e) {
    const file = e.target.files[0];

    if (!file) {
      return;
    }

    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      SetimageProfile(reader.result);
    };
    reader.onerror = (error) => {
      console.log("Error:", error);
    };
  }

  const triggerFileUpload = () => {
    document.getElementById("file-input").click();
  };

  return (
    <div className="dropdown-container">
      <div className="dropdown-trigger">
        <img
          src={
            imageProfile === "" || imageProfile === null
              ? userProfile
              : imageProfile
          }
          alt="User profile"
        />
      </div>
      <div className="dropdown-menu">
        <h3>Teste</h3>
        <ul>
          <DropdownItem icon={<CiImageOn onClick={triggerFileUpload} />}>
            <input
              id="file-input"
              type="file"
              accept="image/*"
              onChange={convertToBase64}
              style={{ display: "none" }}
            />
          </DropdownItem>
          <DropdownItem icon={<CiLogout />}>
            <h1>Logout</h1>
          </DropdownItem>
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
