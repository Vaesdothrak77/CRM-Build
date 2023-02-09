import { useContext } from "react";
import { AppContext } from "../TablePage";

import { Link } from "react-router-dom";

const TableAction = () => {
  const { filtered } = useContext(AppContext);

  const products = {
    "course-html": "Курс по верстке",
    "course-js": "Курс по javaScript",
    "course-vue": "Курс по Vue JS",
    "course-php": "Курс по PHP",
    "course-wordpress": "Курс по WordPress",
  };

  const statuses = {
    new: "Новая",
    inwork: "В работе",
    complete: "Завершена",
  };

  const badges = {
    new: "badge-danger",
    inwork: "badge-warning",
    complete: "badge-success",
  };

  return (
    <table className="table fs-14">
      <thead>
        <tr>
          <th>ID</th>
          <th>дата</th>
          <th>продукт</th>
          <th>имя</th>
          <th>email</th>
          <th>телефон</th>
          <th>статус</th>
          <th></th>
        </tr>
      </thead>
      <tbody id="tbody">
        {filtered &&
          filtered.map((request) => {
            return (
              <tr key={request.id}>
                <th scope="row">{request.id}</th>
                <td>{request.data}</td>
                <td>{products[request.product]}</td>
                <td>{request.name}</td>
                <td>{request.email}</td>
                <td>{request.phone}</td>
                <td>
                  <div className={`badge badge-pill ${badges[request.status]}`}>
                    {statuses[request.status]}
                  </div>
                </td>
                <td>
                  <Link to={`/edit/${request.id}`}>Редактировать</Link>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};
export default TableAction;
