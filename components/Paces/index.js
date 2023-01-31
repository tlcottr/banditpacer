import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";

const Icon = () => {
  return (
    <svg
      width="26"
      height="22"
      viewBox="0 0 26 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="hover:opacity-50 cursor-pointer"
    >
      <path
        d="M25.3 12.5365C25.3 16.3141 23.6139 19.7016 20.9469 22C19.6902 18.669 16.4496 16.2974 12.65 16.2974C8.85042 16.2974 5.60977 18.669 4.35308 22C1.68605 19.7016 0 16.3141 0 12.5365C0 5.61276 5.6636 0 12.65 0C19.6364 0 25.3 5.61276 25.3 12.5365ZM12.65 13.7901C14.7459 13.7901 16.445 12.1063 16.445 10.0292C16.445 7.95206 14.7459 6.26823 12.65 6.26823C10.5541 6.26823 8.855 7.95206 8.855 10.0292C8.855 12.1063 10.5541 13.7901 12.65 13.7901Z"
        fill="white"
      />
    </svg>
  );
};

const Paces = () => {
  return (
    <Link href="/paces">
      <Icon />
    </Link>
  );
};

export default Paces;
