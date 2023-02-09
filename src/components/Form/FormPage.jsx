import FormHeader from "./FormHeader";
import FormAction from "./FormAction";

const FormPage = () => {
  document.body.className = "with-nav radial-bg flex-center";
  return (
    <div className="white-plate white-plate--payment">
      <div className="container-fluid">
        <FormHeader />

        <div className="white-plate__line-between white-plate__line-between--main"></div>

        <FormAction />
      </div>
      <script src="testData.js"> </script>
    </div>
  );
};

export default FormPage;
