import "./Container.css";
import UserPanel from "../UserPanel/UserPanel";

const Container = ({ children }) => (
  <>
  <UserPanel />
  <main className="page-container">
      {children}
  </main>
  </>
);

export default Container;
