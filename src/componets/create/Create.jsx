import React, { useState } from "react";
import axios from "axios";

import style from './Create.module.scss'
const Create = () => {
  const [inputValues, setInputValues] = useState({
    name: "",
    address: "",
    phone: "",
  });
  const { name, address, phone } = inputValues;
  const handleInputValues = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };
  const handleCreate = (e) => {
    e.preventDefault();
    try {
      axios
        .post("http://localhost:4000/create", { inputValues })
        .then((result) => {console.log(result.data)

            window.location.reload()
        });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className={style.container}>
      <form className={style.CForm}>
        <div className={style.item}>
          <label>Name: </label>
          <input
            name="name"
            onChange={handleInputValues}
            value={name}
            type="text"
          />
        </div>
        <div className={style.item}>
          <label>Address: </label>
          <input
            onChange={handleInputValues}
            name="address"
            value={address}
            type="text"
          />
        </div>
        <div className={style.item}>
          <label>Phone : </label>
          <input
            onChange={handleInputValues}
            name="phone"
            value={phone}
            type="number"
          />
        </div>
        <button onClick={handleCreate}>Add</button>
      </form>
    </div>
  );
};

export default Create;
