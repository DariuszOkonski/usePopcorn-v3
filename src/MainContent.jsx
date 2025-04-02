import React from 'react';
import ListBox from './ListBox';
import WatchedBox from './WatchedBox';

function MainContent() {
  return (
    <main className='main'>
      <ListBox />
      <WatchedBox />
    </main>
  );
}

export default MainContent;
