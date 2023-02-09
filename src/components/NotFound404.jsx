import { Link } from "react-router-dom";
const NotFound404 = () => {
  document.body.className = "with-nav body--dashboard";
  return (
    <div>
      <h1>404 Error</h1>
      <p>Sorry, the page you're looking for doesn't exist.</p>
      <Link to='/table'>Вернуться к такблице с заявками</Link>
    </div>
  );
};

export default NotFound404;
