import "./Dropdown.css";
import userProfile from "../../assets/user-profile.jpg"
import { CiImageOn } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";

function DropdownItem(props){
    return(
        <li className="dropdown-item">
            {props.icon && <span>{props.icon}</span>}
            <a> {props.text} </a>
        </li>
    );
  }

const Dropdown = () => {
    return (
        <div className="dropdown-container">
        <div className="dropdown-trigger">
            <img src={userProfile} />
        </div>
        <div className="dropdown-menu">
            <h3>Teste</h3>
            <ul>
                <DropdownItem icon={<CiImageOn />} text="Profile Image" />
                <DropdownItem icon={<CiLogout />} text="Logout" />
            </ul>
        </div>
        </div>
    );
};


export default Dropdown;
