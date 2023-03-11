import { useState } from 'react';
import { FeedbackOptions } from './Feedback/Feedback';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
// import css from './App.module.css';

export function App() {
  const [feedBack, setFeedBack] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  })

  const addFeedback = param => {
    setFeedBack(prevstate => {
      const obj = { ...prevstate };
      obj[param] = obj[param] + 1;
      return obj;
    });
  };
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = () => {
    return Math.floor((good / countTotalFeedback()) * 100) || 0;
  };


    const { good, neutral, bad } = feedBack;
    return (
      <div
        style={{
          textAlign: 'center',
          padding: 100,
          width: 250,
          margin: "auto",
        }}
      >
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(feedBack)}
            onLeaveFeedback={addFeedback}
          />
        </Section>
        <Section title="Statistics">
          {countTotalFeedback() === 0 ? (
            <Notification message="No feedback given" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback}
              positivePercentage={countPositiveFeedbackPercentage}
            />
          )}
        </Section>
      </div>
    );
  }

