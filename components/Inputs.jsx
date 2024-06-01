import React, { useState } from "react";
import styles from "./Inputs.module.css";
import ImageQr from "./ImageQr";

const Inputs = () => {
  const [value, setValue] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    setImgUrl(value);
  };
  const inpset = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className={`${styles.main}`}>
      <form onSubmit={submitHandler} className={`${styles.form}`}>
        <label>write whatever you want</label>
        <input type="text" onChange={inpset} />
        <button type="submit">submit</button>
      </form>
      <div>
        <ImageQr value={imgUrl} />
      </div>
    </div>
  );
};

export default Inputs;
