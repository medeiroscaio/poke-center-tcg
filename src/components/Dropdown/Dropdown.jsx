import "./Dropdown.css";
import userProfile from "../../assets/user-profile.jpg"
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

    return (
        <div className="dropdown-container">
        <div className="dropdown-trigger" onClick={()=>{setOpen(!open)}}>
            <img src={userProfile} />
        </div>
        <div className={`dropdown-menu ${open? 'active' : 'inactive'}`}>
            <h3>Teste<br/><span>Teste</span></h3>

            <ul>
                <DropdownItem icon={<CiImageOn />}>
                
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
