import "./Container.css";
import UserPanel from "../UserPanel/UserPanel";

const Container = ({ children }) => (
  <main className="page-container">
    <div className="content-container">
      <UserPanel />
      {children}
    </div>
  </main>
);

export default Container;
