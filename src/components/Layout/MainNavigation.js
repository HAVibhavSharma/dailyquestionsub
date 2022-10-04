import { Link } from "react-router-dom";
import { useContext } from "react";
import classes from "./MainNavigation.module.css";
// import AuthContext from "../../store/auth-context";
import { useSelector, useDispatch } from "react-redux";

const MainNavigation = () => {
  // const authcxt = useContext(AuthContext);
  const token = useSelector((state) => state.token);

  // const isloggedin = authcxt.isLoggedIn;

  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {!token.isloggedin && (
            <li>
              <Link to="/auth">Login</Link>
            </li>
          )}
          {token.isloggedin && (
            <li>
              <Link to="https://www.youtube.com/watch?v=gXSlzUSQO0A">Profile</Link>
            </li>
          )}
          {token.isloggedin && (
            <li>
              <button>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
