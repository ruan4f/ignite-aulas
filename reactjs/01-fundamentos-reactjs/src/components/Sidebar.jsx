import styles from './Sidebar.module.css';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1599837565318-67429bde7162?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
      />

      <div className={styles.profile}>
        <strong>Ruan Ferreira</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          Editar seu Perfil
        </a>
      </footer>
    </aside>
  );
}