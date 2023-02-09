import EditHeader from "./EditHeader";
import EditForm from "./EditForm";
import useFetch from "../useFetch";
import { serverPath } from "../helpers/serverPath";

import { useParams } from "react-router-dom";

const EditPage = () => {
  document.body.className = "with-nav";

  const { id } = useParams();
  const { data: request, isLoading, error } = useFetch(`${serverPath}requests/` + id);

  return (
      <section className="with-nav">
          <div className="form-wrapper">
              <div className="container-fluid">

                  <EditHeader />

                  {error && <h5>{error}</h5>}
                  {isLoading && <h5>Ожидание...</h5>}

                  <div className="row">
                      <div className="col">
                          {request && <EditForm request={request} />}
                      </div>
                  </div >

              </div>
          </div>
      </section>
  );
}
export default EditPage;
