import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./List.module.scss";
const List = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getAllData = async () => {
      await axios.get("http://localhost:4000/address").then((result) => {
        setData(result.data);
        console.log(result.data);
      });
    };
    getAllData();
  }, []);
  return (
    <div className={styles.container}>
      <h1>All address</h1>
      <div className={styles.sub}>
        {data &&
          data.map((person) => (
            <div key={person._id}>
              <div className={styles.person}>
                <h6>Name</h6>
                <h6>{person.name}</h6>
              </div>
              <div className={styles.person}>
                <h6>Address</h6>
                <h6>{person.address}</h6>
              </div>
              <div className={styles.person}>
                <h6>Phone</h6>
                <h6>{person.phone}</h6>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default List;
