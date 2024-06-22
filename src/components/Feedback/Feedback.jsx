import css from './Feedback.module.css';

export default function Feedback({ reviews, totalFeedback }) {
  const { good, neutral, bad } = reviews;
  return (
    <div className={css.info}>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {Math.round((good / totalFeedback) * 100)}%</p>
    </div>
  );
}
