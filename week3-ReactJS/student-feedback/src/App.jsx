import { useState } from 'react';
import FeedbackForm from '@/components/pages/FeedbackForm';
import FeedbackList from '@/components/pages/FeedbackList';

import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

export default function App() {
  const [feedbacks, setFeedbacks] = useState([]);

  const addFeedback = addedfeddback => {
    setFeedbacks(prev => [...prev, addedfeddback]);
  };
}
