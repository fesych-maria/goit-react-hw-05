import css from "./Options.module.css";

const Options = ({ updateFeedback, totalFeedback, handleReset }) => {
  return (
    <>
      <ul className={css.list}>
        <li>
          <button onClick={() => updateFeedback("good")}>Good</button>
        </li>

        <li>
          <button onClick={() => updateFeedback("neutral")}>Neutral</button>
        </li>

        <li>
          <button onClick={() => updateFeedback("bad")}>Bad</button>
        </li>

        {totalFeedback > 0 && (
          <li>
            <button onClick={handleReset}>Reset</button>
          </li>
        )}
      </ul>
    </>
  );
};

export default Options;
