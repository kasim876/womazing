import styles from './SizeSelect.module.scss';

const SizeSelect = ({setValue}) => {
  return (
    <div className={styles.root}>
      <label className={styles.field}>
        <input
          type="radio"
          name="size"
          value="s"
          className={styles.input}
          onChange={(event) => setValue(event.target.value)}
        />
        <span className={styles.inner}>s</span>
      </label>
      <label className={styles.field}>
        <input
          type="radio"
          name="size"
          value="m"
          className={styles.input}
          onChange={(event) => setValue(event.target.value)}
        />
        <span className={styles.inner}>m</span>
      </label>
      <label className={styles.field}>
        <input
          type="radio"
          name="size"
          value="l"
          className={styles.input}
          onChange={(event) => setValue(event.target.value)}
        />
        <span className={styles.inner}>l</span>
      </label>
      <label className={styles.field}>
        <input
          type="radio"
          name="size"
          value="xl"
          className={styles.input}
          onChange={(event) => setValue(event.target.value)}
        />
        <span className={styles.inner}>xl</span>
      </label>
    </div>
  );
};

export default SizeSelect;