import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import StarRating from './StarRating/StarRating.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StarRating
      maxRating={5}
      messages={['Terrible', 'Bad', 'OKay', 'Good', 'Amazing']}
    />
    <StarRating
      maxRating={10}
      size={24}
      color='red'
      className='test'
      defaultRating={3}
    />
  </StrictMode>
);
