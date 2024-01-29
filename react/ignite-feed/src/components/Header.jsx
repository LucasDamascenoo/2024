import style from "./Header.module.css";

import logo from "../assets/Ignite.svg";

export const Header = () => {
  return (
    <header className={style.header}>
      <h3>Ignite Feed</h3>
      <img src={logo} alt="" />
    </header>
  );
};
