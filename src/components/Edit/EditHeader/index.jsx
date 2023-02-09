import { Link } from "react-router-dom";

const EditHeader = () => {
  return (
    <div className="row justify-content-between align-items-center">
      <div className="col">
        <div className="admin-heading-1">Работа с заявкой</div>
      </div>
      <div className="col text-right">
        <Link to="/table" className="btn btn-link">
          Вернуться назад
        </Link>
      </div>
    </div>
  );
};

export default EditHeader;
