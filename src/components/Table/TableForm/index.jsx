import { useContext } from "react";
import { AppContext } from "../TablePage";

const TableForm = () => {
  const { changeFilter, filter } = useContext(AppContext);

  const buttons = [
    { value: "all", name: "Все", id: 1 },
    { value: "new", name: "Новые", id: 2 },
    { value: "inwork", name: "В работе", id: 3 },
    { value: "complete", name: "Завершенные", id: 4 },
  ];

  return (
    <form action="">
      <div className="form-row">
        <div className="row mb-3 justify-content-start">
          <div className="col">
            <div
              id="topStatusBar"
              className="btn-group"
              role="group"
              aria-label="..."
            >
              {buttons.map((btn) => (
                <button
                  className={`btn btn-light ${
                    btn.value === filter.status ? "active" : ""
                  }`}
                  data-value={btn.value}
                  key={btn.id}
                  onClick={(e) => {
                    changeFilter("status", e.target.dataset.value);
                  }}
                >
                  {btn.name}
                </button>
              ))}
            </div>
          </div>
          <div className="col ml-100">
            <select
              className="custom-select"
              value={`${filter.product}`}
              onChange={(e) => {
                changeFilter("product", e.target.value);
              }}
              id="productSelect"
            >
              <option value="all">Все продукты</option>
              <option value="course-html">Курс по верстке</option>
              <option value="course-js">Курс по JavaScript</option>
              <option value="course-vue">Курс по VUE JS</option>
              <option value="course-php">Курс по PHP</option>
              <option value="course-wordpress">Курс по WordPress</option>
            </select>
          </div>
        </div>
      </div>
    </form>
  );
};

export default TableForm;
