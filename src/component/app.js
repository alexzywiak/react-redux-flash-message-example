import React from 'react';

import FlashMessage from './flash_message';
import UserAction from './user_action';

const App = () => {
  return (
    <div className="container">
      <FlashMessage />
      <hr/>
      <UserAction />
    </div>
  );
};

export default App;