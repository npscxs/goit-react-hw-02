import { useEffect, useState } from "react";
import "./App.css";
import Description from "../Description/Description";
import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";
import Notification from "../Notification/Notification";

function App() {
  const [stats, setStats] = useState(() => {
    const localStats = window.localStorage.getItem("stats");
    if (localStats !== null) {
      return JSON.parse(localStats);
    } else {
      return { good: 0, neutral: 0, bad: 0 };
    }
  });

  useEffect(() => {
    window.localStorage.setItem("stats", JSON.stringify(stats));
  }, [stats]);

  const updateFeedback = (feedbackType) => {
    setStats((prevState) => ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setStats({ good: 0, neutral: 0, bad: 0 });
  };

  const totalFeedback = stats.good + stats.neutral + stats.bad;

  const percentGoodFeedback = Math.round((stats.good / totalFeedback) * 100);

  return (
    <div>
      <Description />
      <Options
        stats={stats}
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          stats={stats}
          totalFeedback={totalFeedback}
          percentGoodFeedback={percentGoodFeedback}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}
export default App;
