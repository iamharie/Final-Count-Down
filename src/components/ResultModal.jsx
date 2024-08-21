import { forwardRef } from "react";

const ResultModal = forwardRef(function ResultModal(
  { targetTime, result },
  ref
) {
  return (
    <dialog ref={ref} className="result-modal">
      <h1>you {result}</h1>
      <p>
        The target time was <strong>{targetTime}</strong>
      </p>
      <p>
        you stopped the timer with <strong>X seconds</strong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
