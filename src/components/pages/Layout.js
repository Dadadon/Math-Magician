import { Outlet, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = () => (
  <>
    <nav>
      <h1 className="text-center mt-3">Math Magician</h1>
      <ul className="nav nav-tabs justify-content-center">
        <li className="nav-item">
          <Link to="/" className="nav-link text-warning">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/calculator" className="nav-link text-warning">Calculator</Link>
        </li>
        <li className="nav-item">
          <Link to="/quote" className="nav-link text-warning">Quote</Link>
        </li>
      </ul>
    </nav>

    <Outlet />
  </>
);
export default Layout;
