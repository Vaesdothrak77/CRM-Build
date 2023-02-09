import { useEffect, useState } from "react";
import { getRandomData } from "../testData";
import { serverPath } from "../../helpers/serverPath";

const CRMForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [product, setProduct] = useState("course-html");

  const [isPending, setPending] = useState(false);
  const [test, setTest] = useState(true);

  useEffect(() => {
    const { name, phone, email, product } = getRandomData();
    setName(name);
    setPhone(phone);
    setEmail(email);
    setProduct(product);
  }, [test]);

  const getDate = () => {
    return {
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
    };
  };

  // const clearForm = () => {
  //   setName("");
  //   setPhone("");
  //   setEmail("");
  //   setProduct("course-html");
  // };

  const hendlerSubmit = (e) => {
    e.preventDefault();
    const request = {
      name,
      phone,
      email,
      product,
      data: getDate().date,
      time: getDate().time,
      status: "new",
    };
    setPending(true);

    fetch(serverPath + "/requests", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(request),
    })
      .then(() => {
        setPending(false);
        setTest(!test);
        // clearForm()
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <form id="form" onSubmit={hendlerSubmit} method="POST" action="">
      <label>Ваши данные:</label>
      <div className="form-group">
        <input
          id="name"
          type="text"
          name="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          autoComplete="on"
          className="form-control"
          placeholder=""
          required
        />
      </div>
      <div className="form-group">
        <input
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
          id="phone"
          type="text"
          name="phone"
          autoComplete="on"
          className="form-control"
          placeholder="Телефон"
        />
      </div>
      <div className="form-group">
        <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          id="email"
          type="email"
          name="email"
          autoComplete="on"
          className="form-control"
          placeholder="Email"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleFormControlSelect1">Продукт:</label>
        <select
          id="product"
          value={product}
          onChange={(e) => {
            setProduct(e.target.value);
          }}
          name="product"
          className="form-control"
        >
          <option value="course-html">Курс по верстке</option>
          <option value="course-js">Курс по JavaScript</option>
          <option value="course-vue">Курс по VUE JS</option>
          <option value="course-php">Курс по PHP</option>
          <option value="course-wordpress">Курс по WordPress</option>
        </select>
      </div>
      <div className="form-group">
        {isPending && (
          <button type="submit" className="btn btn-lg btn-primary btn-block">
            Ожидание...
          </button>
        )}
        {!isPending && (
          <button type="submit" className="btn btn-lg btn-primary btn-block">
            Оформить заявку
          </button>
        )}
      </div>
    </form>
  );
};

export default CRMForm;
