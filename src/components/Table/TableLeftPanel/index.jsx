import { serverPath } from "../../helpers/serverPath";
import { AppContext } from "../TablePage";
import { useContext, useEffect, useState } from "react";

const TableLeftPanel = () => {
  const [newRequests, setNewRequsets] = useState(null);

  const { changeFilter, filter } = useContext(AppContext);

  useEffect(() => {
    const filterString = `${serverPath}/requests?status=new`;

    const getRequests = async () => {
      const response = await fetch(filterString);
      const result = await response.json();

      setNewRequsets(result.length);
    };

    getRequests();
  }, []);

  const buttons = [
    { value: "all", name: "Все", id: 1 },
    { value: "new", name: "Новые", id: 2 },
    { value: "inwork", name: "В работе", id: 3 },
    { value: "complete", name: "Завершенные", id: 4 },
  ];

  return (
    <div className="left-panel blue-skin">
      <div className="left-panel__logo">
        <div className="left-panel__logo-title">CRM заявки</div>
        <div className="left-panel__logo-subtitle">
          учебный проект webcademy
        </div>
      </div>
      <div className="left-panel__user clearfix">
        <div className="left-panel__user-photo">
          <img src="img/avatars/avatar-128.jpg" alt="Avatar" />
        </div>
        <div className="left-panel__user-name">
          Петр <br />
          Васильевич
        </div>
      </div>
      <div className="left-panel__navigation">
        <div className="left-panel__navigation-title">Заявки</div>
        <ul>
         {buttons.map((btn)=>(
           <li key={btn.id}>
           <a
           className={btn.value === filter.status ? 'active' : ''}
           data-value={btn.value}
           data-role="left-status"
           onClick={(e) => { changeFilter('status', e.target.dataset.value) }}>
           {btn.name}
           {btn.name === 'Новые' ? <div className="badge" id="badge-new">{newRequests}</div> : ''}
           </a>
         </li>
         ))}
        </ul>
      </div>
    </div>
  );
};

export default TableLeftPanel;
