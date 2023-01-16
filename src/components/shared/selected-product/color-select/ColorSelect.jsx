import styles from './ColorSelect.module.scss';

const ColorSelect = ({setValue}) => {
  return (
    <div className={styles.root}>
      <label className={styles.field}>
        <input
          type="radio"
          name="color"
          value="brown"
          className={styles.input}
          onChange={(event) => setValue(event.target.value)}
        />
        <span className={`${styles.inner} ${styles.brown}`}></span>
      </label>
      <label className={styles.field}>
        <input
          type="radio"
          name="color"
          value="gray"
          className={styles.input}
          onChange={(event) => setValue(event.target.value)}
        />
        <span className={`${styles.inner} ${styles.gray}`}></span>
      </label>
      <label className={styles.field}>
        <input
          type="radio"
          name="color"
          value="yellow"
          className={styles.input}
          onChange={(event) => setValue(event.target.value)}
        />
        <span className={`${styles.inner} ${styles.yellow}`}></span>
      </label>
      <label className={styles.field}>
        <input
          type="radio"
          name="color"
          value="pink"
          className={styles.input}
          onChange={(event) => setValue(event.target.value)}
        />
        <span className={`${styles.inner} ${styles.pink}`}></span>
      </label>
    </div>
  );
};

export default ColorSelect;