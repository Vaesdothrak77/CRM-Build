import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { serverPath } from "../../helpers/serverPath";

const EditForm = ({ request }) => {
  const nav = useNavigate();

  const { name, product, date, time, phone, id, email, status } = request;

  const [nameChange, setName] = useState(name);
  const [statusChange, setStatus] = useState(status);
  const [emailChange, setEmail] = useState(email);
  const [productChange, setProduct] = useState(product);
  const [phoneChange, setPhone] = useState(phone);

  const changeRequest = (e) => {
    e.preventDefault();

    const changeRequest = {
      ...request,
      product: productChange,
      name: nameChange,
      email: emailChange,
      phone: phoneChange,
      status: statusChange,
    };

    const putRequest = async () => {
      const response = await fetch(serverPath + "/requests/" + id, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(changeRequest),
      });

      response.ok && nav("/table");
    };

    putRequest();
  };

  const delRequest = () => {
    const requestAway = async () => {
      const response = await fetch(serverPath + "/requests/" + id, {
        method: "DELETE",
      });

      response.ok && nav("/table");
    };

    requestAway();
  };

  return (
    <form
      id="form"
      onSubmit={(e) => {
        changeRequest(e);
      }}
    >
      <div className="card mb-4">
        <div className="card-header">Данные о заявке</div>
        <div className="card-body">
          <div className="row mb-3">
            <div className="col-md-2">
              <strong>ID:</strong>
            </div>
            <div className="col">
              Заявка №<span id="number">{id}</span>
            </div>
            <input name="id" type="hidden" id="id" />
          </div>

          <div className="row mb-3">
            <div className="col-md-2">
              <strong>Дата создания:</strong>
            </div>
            <div className="col" id="date">
              {date} {time}
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-2">
              <strong>Продукт:</strong>
            </div>
            <div className="col">
              <select
                id="product"
                name="product"
                className="custom-select"
                value={productChange}
                onChange={(e) => {
                  setProduct(e.target.value);
                }}
              >
                <option value="course-html">Курс по верстке</option>
                <option value="course-js">Курс по JavaScript</option>
                <option value="course-vue">Курс по VUE JS</option>
                <option value="course-php">Курс по PHP</option>
                <option value="course-wordpress">Курс по WordPress</option>
              </select>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-2">
              <strong>Имя:</strong>
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                value={nameChange}
                id="name"
                name="name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-2">
              <strong>Email:</strong>
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                value={emailChange}
                id="email"
                name="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-2">
              <strong>Телефон:</strong>
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                value={phoneChange}
                id="phone"
                name="phone"
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-2">
              <strong>Статус заявки:</strong>
            </div>
            <div className="col">
              <select
                className="custom-select"
                id="status"
                name="status"
                value={statusChange}
                onChange={(e) => {
                  setStatus(e.target.value);
                }}
              >
                <option defaultValue>Выберите...</option>
                <option value="new">Новая</option>
                <option value="inwork">В работе</option>
                <option value="complete">Завершена</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-between">
        <div className="col text-right ">
          <button
            type="button"
            className="btn btn-primary mr-5"
            onClick={() => {
              delRequest();
            }}
          >
            Удалить заявку
          </button>
          <button type="submit" className="btn btn-primary">
            Сохранить изменения
          </button>
        </div>
      </div>
    </form>
  );
};

export default EditForm;
