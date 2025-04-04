import React, { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import StarRating from './StarRating/StarRating.jsx';

function Test() {
  const [movieRating, setMovieRating] = useState(0);

  return (
    <div>
      <StarRating maxRating={10} color='blue' onSetRating={setMovieRating} />
      <p>This movie was rated {movieRating} stars</p>
    </div>
  );
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element not found');
}
createRoot(rootElement).render(
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

    <Test />
  </StrictMode>
);
