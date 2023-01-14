import styles from './ColorSelect.module.scss';

const ColorSelect = ({setValue}) => {
  return (
    <div className={styles.root}>
      <label className={styles.field}>
        <input
          type="radio"
          name="color"
          value="white"
          className={styles.input}
          onChange={(event) => setValue(event.target.value)}
        />
        <span className={`${styles.inner} ${styles.white}`}></span>
      </label>
      <label className={styles.field}>
        <input
          type="radio"
          name="color"
          value="black"
          className={styles.input}
          onChange={(event) => setValue(event.target.value)}
        />
        <span className={`${styles.inner} ${styles.black}`}></span>
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