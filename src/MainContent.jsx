import React from 'react';
import ListBox from './ListBox';
import WatchedBox from './WatchedBox';

function MainContent({ movies }) {
  return (
    <main className='main'>
      <ListBox movies={movies} />
      <WatchedBox />
    </main>
  );
}

export default MainContent;
