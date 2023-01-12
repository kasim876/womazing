import './SizesSelect.scss';

const SizesSelect = ({setValue}) => {
  return (
    <div className="sizes">
      <label className="sizes__field">
        <input
          type="radio"
          name="size"
          value="s"
          className="sizes__input"
          onChange={(event) => setValue(event.target.value)}
        />
        <span className="sizes__inner">s</span>
      </label>
      <label className="sizes__field">
        <input
          type="radio"
          name="size"
          value="m"
          className="sizes__input"
          onChange={(event) => setValue(event.target.value)}
        />
        <span className="sizes__inner">m</span>
      </label>
      <label className="sizes__field">
        <input
          type="radio"
          name="size"
          value="l"
          className="sizes__input"
          onChange={(event) => setValue(event.target.value)}
        />
        <span className="sizes__inner">l</span>
      </label>
      <label className="sizes__field">
        <input
          type="radio"
          name="size"
          value="xl"
          className="sizes__input"
          onChange={(event) => setValue(event.target.value)}
        />
        <span className="sizes__inner">xl</span>
      </label>
    </div>
  );
};

export default SizesSelect;