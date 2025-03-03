export default function Feedback({
  stats,
  totalFeedback,
  percentGoodFeedback,
}) {
  return (
    <ul>
      <li>Good:{stats.good}</li>
      <li>Neutral:{stats.neutral}</li>
      <li>Bad:{stats.bad}</li>
      <li>Tottal:{totalFeedback}</li>
      <li>Positive:{percentGoodFeedback}%</li>
    </ul>
  );
}
