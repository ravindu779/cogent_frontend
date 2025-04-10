const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export const submitForm = async (formData) => {
  const response = await fetch(`${API_URL}/api/registrations`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });
  if (!response.ok) throw new Error('Submission failed');
  return response.json();
};