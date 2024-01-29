import { PencilLine } from "phosphor-react";

import style from "./Sidebar.module.css";

export const Sidebar = () => {
  return (
    <aside className={style.sidebar}>
      <img
        className={style.cover}
        src="https://images.unsplash.com/photo-1566837945700-30057527ade0?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      <div className={style.profile}>
        <img
          className={style.avatar}
          src="https://avatars.githubusercontent.com/u/68625958?v=4"
          alt="moreno lindo de oculos de grau e camiseta preta"
        />
        <strong>Lucas Oliveira</strong>
        <span>Web Developer </span>
      </div>

      <footer>
        <a href="#">
          <PencilLine /> Editar seu perfil
        </a>
      </footer>
    </aside>
  );
};
