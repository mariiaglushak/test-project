import { NavLink } from "react-router-dom";

const Layout = ({children}) => {
  return (<div>
    <ul>
    <li>
      <NavLink to="/">Home</NavLink>
    </li>
    <li>
      <NavLink to="/catalog">Catalog</NavLink>
    </li>
    <li>
      <NavLink to="/favorites">Favorites</NavLink>
    </li>
    </ul>
    <main>{children}</main>
  </div>)
}

export default Layout;