import { Container } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <ul className="nav justify-content-end p-4  bg-light">
        <li className="nav-item">
          <Link to="/" className="nav-link active">Users</Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link">Users</Link>
        </li>
        <li className="nav-item">
          <Link to="/products" className="nav-link">Products</Link>
        </li>
        <li className="nav-item">
          <Link to="/products" className="nav-link">Products</Link>
        </li>
      </ul>

      <Outlet />
    </>
  )
};

export default Layout;
