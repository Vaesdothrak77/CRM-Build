import TableLeftPanel from "./TableLeftPanel";
import TableForm from "./TableForm";
import TableAction from "./TableAction";

import { serverPath } from "../helpers/serverPath";
import { useEffect, useState, createContext } from "react";

export const AppContext = createContext(null);
const TablePage = () => {
  document.body.className = "with-nav body--dashboard";

  const [filter, setFilter] = useState({ product: "all", status: "all" });
  const [filtered, setFiltered] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    localStorage.getItem("filter")
      ? setFilter(JSON.parse(localStorage.getItem("filter")))
      : setFilter({ product: "all", status: "all" });
  }, []);

  useEffect(() => {
    const { product, status } = filter;

    const getRequests = async () => {
      try {
        const filterStr = `${serverPath}/requests?${
          product !== "all" ? `product=${product}&` : ""
        }${status !== "all" ? `status=${status}` : ""}`;
        const response = await fetch(filterStr);
        if (response.ok !== true) {
          throw Error("Ошибка при получении данных");
        }
        const result = await response.json();
        setFiltered(result);
        setIsLoading(false);
        setError(null);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };

    getRequests();
  }, [filter]);

  const changeFilter = (prop, value) => {
    setFilter(() => {
      const newFilter = { ...filter, [prop]: value };
      localStorage.setItem("filter", JSON.stringify(newFilter));
      return newFilter;
    });
  };

  return (
    <AppContext.Provider
      value={{ changeFilter, filter, filtered, isLoading, error }}
    >
      <TableLeftPanel />

      <div className="main-wrapper">
        <div className="container-fluid">
          <div className="admin-heading-1">Все заявки</div>

          <TableForm />

          <TableAction />
        </div>
      </div>
    </AppContext.Provider>
  );
};

export default TablePage;


