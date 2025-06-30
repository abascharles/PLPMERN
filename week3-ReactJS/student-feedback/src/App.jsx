import { useState } from 'react';
import FeedbackForm from '@/components/pages/FeedbackForm';
import FeedbackList from '@/components/pages/FeedbackList';

import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

export default function App() {
  const [feedbacks, setFeedbacks] = useState([]);

  const addFeedback = feedback => {
    setFeedbacks(prev => [...prev, feedback]);
  };

  const deleteFeedback = index => {
    setFeedbacks(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">Student Feedback Tracker </h1>
      <FeedbackForm onAdd={addFeedback} />
      <FeedbackList feedbacks={feedbacks} onDelete={deleteFeedback} />
    </div>
  );
}
