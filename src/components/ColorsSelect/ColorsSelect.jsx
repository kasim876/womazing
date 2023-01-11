import './ColorsSelect.scss';

const ColorsSelect = ({setValue}) => {
  return (
    <div className="colors">
      <label className="colors__field white">
        <input
          type="radio"
          name="color"
          value="white"
          className="colors__input"
          onChange={(event) => setValue(event.target.value)}
        />
      </label>
      <label className="colors__field black">
        <input
          type="radio"
          name="color"
          value="black"
          className="colors__input"
          onChange={(event) => setValue(event.target.value)}
        />
      </label>
      <label className="colors__field gray">
        <input
          type="radio"
          name="color"
          value="gray"
          className="colors__input"
          onChange={(event) => setValue(event.target.value)}
        />
      </label>
      <label className="colors__field pink">
        <input
          type="radio"
          name="color"
          value="pink"
          className="colors__input"
          onChange={(event) => setValue(event.target.value)}
        />
      </label>
    </div>
  );
};

export default ColorsSelect;