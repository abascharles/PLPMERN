import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export default function FeedbackForm({ onAdd }) {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState('');

  /**
   * Handles form submission for feedback form
   * Prevents default form submission, validates required fields (name, comment, rating),
   * calls the onAdd callback with form data if validation passes, and resets form fields
   * @param {Event} e - The form submission event
   */
  const handleSubmit = e => {
    e.preventDefault();
    if (!name.trim() || !comment.trim() || !rating.trim()) return;
    onAdd({ name, comment, rating });
    // reset the form
    setName('');
    setComment('');
    setRating('');
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <Input placeholder="Student Name..." value={name} onChange={e => setName(e.target.value)} />
      <Textarea placeholder="Feedback" value={comment} onChange={e => setComment(e.target.value)} />
      <Input placeholder="Rating(1-5)" type="number" value={rating} onChange={e => setRating(e.target.value)} />
      <Button type="submit"> Submit Feedback</Button>
    </form>
  );
}
