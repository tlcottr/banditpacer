import React from "react";
import styles from "./styles.module.scss";

const Down = ({ size }) => {
  const iconSize = size || 36;
  return (
    <svg
      viewBox="0 0 29 29"
      xmlns="http://www.w3.org/2000/svg"
      height={`${iconSize}px`}
      width={`${iconSize}px`}
      className="fill-white"
    >
      <path d="M20.9977 20.9976C18.7115 23.3191 16.8564 26.0288 15.519 29L12.6504 29C11.3066 26.0305 9.44929 23.3215 7.16387 20.9976C5.24183 19.1504 2.6654 18.1412 9.12344e-05 18.1916L9.1428e-05 13.7632C3.25018 13.7632 5.86279 14.547 7.83793 16.1146C9.83435 17.7328 11.2622 19.9459 11.9136 22.4319L12.0704 22.4319L12.0704 -7.05762e-07L16.1225 -5.28636e-07L16.1225 22.4397L16.3577 22.4397C16.982 19.9556 18.3923 17.7398 20.3785 16.1224C22.3484 14.5549 24.961 13.7711 28.2163 13.7711L28.2163 18.1995C26.8779 18.1671 25.5462 18.3988 24.2974 18.8814C23.0689 19.3627 21.9476 20.0819 20.9977 20.9976V20.9976Z" />
    </svg>
  );
};

const DownArrow = ({ size }) => {
  return <Down size={size} />;
};

export default DownArrow;
