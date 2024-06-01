import Image from "next/image";
import React from "react";
import styles from "./ImageQr.module.css";

const ImageQr = ({ value }) => {
  return (
    <div className={`${styles.main}`}>
      {value === "" ? null : (
        <Image
          src={`https://qr-code.ir/api/qr-code/?d=${value}`}
          width={200}
          height={200}
        />
      )}
    </div>
  );
};

export default ImageQr;
