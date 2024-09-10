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
  const [open, setOpen] = useState(false);

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
      <div
        className="dropdown-trigger"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <img
          src={
            imageProfile === "" || imageProfile === null
              ? userProfile
              : imageProfile
          }
          alt="Profile"
        />
      </div>
      <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
        <h3>
          Teste
          <br />
          <span>Teste</span>
        </h3>

        <ul>
          <DropdownItem icon={<CiImageOn onClick={triggerFileUpload} />}>
            <input
              id="file-input"
              type="file"
              accept="image/*"
              onChange={convertToBase64}
              style={{ display: "none" }}
            />
            <a>Mudar imagem</a>
          </DropdownItem>
          <DropdownItem icon={<CiLogout />}>
            <a>Log Out</a>
          </DropdownItem>
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
