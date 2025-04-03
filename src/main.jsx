import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import './index.css';
import StarRating from './StarRating/StarRating.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StarRating maxRating={5} />
  </StrictMode>
);
