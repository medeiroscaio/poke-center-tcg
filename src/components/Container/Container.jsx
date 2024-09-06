import "./Container.css";
import UserPanel from "../UserPanel/UserPanel";

const Container = ({ children }) => (
  <main className="page-container">
      <UserPanel />
      {children}
  </main>
);

export default Container;
