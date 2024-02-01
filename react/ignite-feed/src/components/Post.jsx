import styles from "../components/Post.module.css";

export const Post = () => {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://avatars.githubusercontent.com/u/68625958?v=4 "
          />
          <div className={styles.authorInfo}>
            <strong>Lucas Oliveira</strong>
            <span>Web Developer </span>
          </div>
        </div>
        <time dateTime="2024-01-30 17:01:00">Publicado Ha 1 hora</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          <a href="#">👉 jane.design/doctorcare</a>
        </p>
        <p>
          <a href="#">#novoprojeto</a>
          <a href="#">#nlw</a>
        </p>
      </div>
    </article>
  );
};
